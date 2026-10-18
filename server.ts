import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { createServer as createViteServer } from 'vite';
import { db } from './server/db';
import {
  sendContactFormEmail,
  sendTrialRequestEmail,
  sendTestEmail,
  getEmailConfigurationStatus,
  OFFICIAL_ACADEMY_EMAIL
} from './server/email';
import {
  sendTrialWhatsAppNotification,
  sendInquiryWhatsAppNotification,
  getWhatsAppConfigurationStatus,
  sendTestWhatsAppNotification,
  ACADEMY_OWNER_WHATSAPP
} from './server/whatsapp';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '25mb' }));

interface AdminSession {
  userId: string;
  email: string;
  name: string;
  createdAt: number;
  expiresAt: number;
}
const activeAdminSessions = new Map<string, AdminSession>();

const ADMIN_ALLOWED_IDENTIFIERS = [
  'admin@noorulhuda.com',
  'noorulhudaacademy206@gmail.com',
  'sanaullah4542khan@gmail.com',
  'admin',
  'director',
  'owner',
  'sanaullah',
  'sanaullah4542'
].map(e => e.toLowerCase());

function isValidAdminSecretCode(codeOrPwd: string): boolean {
  if (!codeOrPwd) return false;
  const configuredSecret = process.env.ADMIN_SECRET_CODE || 'Sana454542@';
  if (codeOrPwd === configuredSecret) return true;
  if (process.env.ADMIN_PASSWORD && codeOrPwd === process.env.ADMIN_PASSWORD) return true;
  return false;
}

export function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : (req.headers['x-admin-token'] as string)?.trim();

  if (!token) {
    return res.status(401).json({ error: 'Administrator authentication required. Missing authorization token.' });
  }

  const session = activeAdminSessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    if (session) activeAdminSessions.delete(token);
    return res.status(403).json({ error: 'Access denied. Invalid or expired administrator session.' });
  }

  (req as any).adminSession = session;
  next();
}

// 1. Admin login endpoint
app.post('/api/auth/admin-login', (req: Request, res: Response) => {
  const { identifier, password, secretCode, code } = req.body;
  const providedCode = (secretCode || code || password || '').trim();

  if (!identifier || !providedCode) {
    return res.status(400).json({ error: 'Administrator identifier and secret code are required.' });
  }

  const idLower = identifier.trim().toLowerCase();
  const dbUsers = db.getAllUsers();
  const dbUser = dbUsers.find(u =>
    u.role === 'admin' && (u.email.toLowerCase() === idLower || idLower === 'admin' || idLower === 'director' || idLower === 'owner')
  );

  const isAllowedIdentifier = ADMIN_ALLOWED_IDENTIFIERS.includes(idLower) || !!dbUser;

  if (!isAllowedIdentifier) {
    return res.status(401).json({ error: 'Access denied. Account not recognized as an authorized administrator.' });
  }

  const isSecretValid = isValidAdminSecretCode(providedCode) || (dbUser && dbUser.passwordHash === providedCode);
  if (!isSecretValid) {
    return res.status(401).json({ error: 'Invalid administrator secret code. Access denied.' });
  }

  const token = `adm_${crypto.randomBytes(24).toString('hex')}_${Date.now()}`;
  const session: AdminSession = {
    userId: dbUser?.id || 'usr-admin-owner',
    email: dbUser?.email || (idLower.includes('@') ? idLower : 'sanaullah4542khan@gmail.com'),
    name: dbUser?.name || 'Academy Director & Owner',
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000
  };
  activeAdminSessions.set(token, session);

  return res.json({
    success: true,
    token,
    user: {
      id: session.userId,
      name: session.name,
      email: session.email,
      role: 'admin'
    }
  });
});

app.get('/api/auth/admin-verify', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : (req.headers['x-admin-token'] as string)?.trim();

  if (!token || !activeAdminSessions.has(token)) {
    return res.status(401).json({ authenticated: false, error: 'No active administrator session.' });
  }

  const session = activeAdminSessions.get(token)!;
  if (session.expiresAt < Date.now()) {
    activeAdminSessions.delete(token);
    return res.status(401).json({ authenticated: false, error: 'Administrator session expired.' });
  }

  return res.json({
    authenticated: true,
    user: {
      id: session.userId,
      name: session.name,
      email: session.email,
      role: 'admin'
    }
  });
});

app.post('/api/auth/admin-logout', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : (req.headers['x-admin-token'] as string)?.trim();
  if (token) {
    activeAdminSessions.delete(token);
  }
  return res.json({ success: true, message: 'Administrator signed out successfully.' });
});

// 2. Contact form submission
app.post('/api/contact/submit', async (req: Request, res: Response) => {
  try {
    const { name, phone, email, course = 'General Inquiry', message = '' } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ success: false, error: 'Name and Phone are required.' });
    }

    const inquiry = db.addContactInquiry({
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim(),
      course: course.trim(),
      message: message.trim(),
      emailDeliveryStatus: 'pending'
    });

    const emailRes = await sendContactFormEmail({
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim(),
      course: course.trim(),
      message: message.trim(),
      inquiryId: inquiry.id
    });

    const waRes = await sendInquiryWhatsAppNotification({
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim(),
      course: course.trim(),
      message: message.trim(),
      inquiryId: inquiry.id
    });

    db.updateContactInquiryStatus(
      inquiry.id,
      'new',
      emailRes.delivered ? 'sent' : 'fallback_recorded',
      `Email: ${emailRes.note}. WhatsApp: ${waRes.note}`
    );

    return res.json({
      success: true,
      inquiryId: inquiry.id,
      message: 'Inquiry submitted successfully.'
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Trial form submission
app.post('/api/trial/submit', async (req: Request, res: Response) => {
  try {
    const {
      studentName,
      parentName,
      learnerType = 'child',
      courseTitle = 'Nazra Quran',
      phoneNumber,
      email,
      preferredDays,
      preferredTime,
      country,
      notes
    } = req.body;

    if (!studentName || !phoneNumber) {
      return res.status(400).json({ success: false, error: 'Student Name and Phone number are required.' });
    }

    const trial = db.addTrialRequest({
      studentName: studentName.trim(),
      parentName: parentName?.trim(),
      learnerType: learnerType as any,
      courseInterest: courseTitle,
      courseTitle,
      teacherPreference: 'no-preference',
      phoneNumber: phoneNumber.trim(),
      email: email?.trim(),
      preferredDays,
      preferredTime,
      country,
      notes,
      emailDeliveryStatus: 'pending'
    });

    const emailRes = await sendTrialRequestEmail({
      studentName: studentName.trim(),
      parentName: parentName?.trim(),
      learnerType,
      courseInterest: courseTitle,
      courseTitle,
      teacherPreference: 'no-preference',
      phoneNumber: phoneNumber.trim(),
      email: email?.trim(),
      preferredDays,
      preferredTime,
      country,
      notes,
      requestId: trial.id
    });

    const waRes = await sendTrialWhatsAppNotification({
      studentName: studentName.trim(),
      parentName: parentName?.trim(),
      learnerType: String(learnerType),
      courseTitle,
      phoneNumber: phoneNumber.trim(),
      preferredDays,
      preferredTime,
      country,
      requestId: trial.id
    });

    db.updateTrialRequestStatus(
      trial.id,
      'new',
      emailRes.delivered ? 'sent' : 'fallback_recorded',
      `Email: ${emailRes.note}. WhatsApp: ${waRes.note}`
    );

    return res.json({
      success: true,
      requestId: trial.id,
      message: 'Free trial booking confirmed successfully.'
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Protected full dashboard endpoint
app.get('/api/admin/full-dashboard', requireAdminAuth, (_req: Request, res: Response) => {
  const users = db.getAllUsers();
  const students = users
    .filter(u => u.role === 'student')
    .map(s => {
      const attendance = db.getAttendanceForStudent(s.studentId || s.id);
      const homework = db.getHomework(s.id);
      return {
        id: s.id,
        studentId: s.studentId || 'NUH-' + s.id.slice(-4),
        name: s.name,
        urduName: s.urduName,
        email: s.email,
        phone: s.phone,
        avatarUrl: s.avatarUrl,
        createdAt: s.createdAt,
        totalClassesAttended: attendance.filter(a => a.status === 'present').length,
        attendanceRate: 96,
        latestCourse: homework[0]?.courseName || 'Tajweed-ul-Quran & Makharij',
        assignedTeacher: 'Sheikh Omar Al-Azhari / Ustadha Fatima',
        feeStatus: 'Active Plan'
      };
    });

  const schedules = [
    { id: 'sch-1', day: 'Monday - Thursday', time: '17:00 - 17:45 PKT', course: 'Noorani Qaida & Basic Arabic', instructor: 'Qari Muhammad Safeer', room: 'Virtual Room 1' },
    { id: 'sch-2', day: 'Monday - Friday', time: '18:00 - 18:45 PKT', course: 'Nazra Quran & Tajweed', instructor: 'Sheikh Omar Al-Azhari', room: 'Virtual Room 2' },
    { id: 'sch-3', day: 'Saturday - Sunday', time: '10:00 - 11:00 PKT', course: 'Quran Memorization (Hifz)', instructor: 'Hafiz Bilal Farooqi', room: 'Hifz Sanctuary' },
    { id: 'sch-4', day: 'Tuesday & Thursday', time: '19:00 - 19:45 PKT', course: 'Islamic Studies & Masnoon Duas', instructor: 'Ustadha Fatima Zahra', room: 'Sisters Studio' }
  ];

  res.json({
    contactInquiries: db.getContactInquiries(),
    trialRequests: db.getTrialRequests(),
    students,
    schedules,
    metrics: db.getAdminMetrics(),
    emailStatus: getEmailConfigurationStatus(),
    whatsAppStatus: getWhatsAppConfigurationStatus()
  });
});

app.patch('/api/admin/inquiries/:id', requireAdminAuth, (req: Request, res: Response) => {
  const { status, note } = req.body;
  const updated = db.updateContactInquiryStatus(req.params.id, status, undefined, note);
  if (!updated) return res.status(404).json({ error: 'Inquiry not found' });
  res.json({ success: true, inquiry: updated });
});

app.patch('/api/admin/trials/:id', requireAdminAuth, (req: Request, res: Response) => {
  const { status, note } = req.body;
  const updated = db.updateTrialRequestStatus(req.params.id, status, undefined, note);
  if (!updated) return res.status(404).json({ error: 'Trial request not found' });
  res.json({ success: true, trial: updated });
});

app.get('/api/whatsapp/status', (_req: Request, res: Response) => {
  res.json(getWhatsAppConfigurationStatus());
});

app.post('/api/admin/whatsapp/test', requireAdminAuth, async (_req: Request, res: Response) => {
  const result = await sendTestWhatsAppNotification();
  res.json({ success: true, ...result });
});

app.get('/api/email/status', (_req: Request, res: Response) => {
  res.json(getEmailConfigurationStatus());
});

app.post('/api/email/test', async (_req: Request, res: Response) => {
  const result = await sendTestEmail();
  res.json({ success: result.delivered, ...result });
});

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
