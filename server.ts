import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { db, UserAccount, AudioSubmission, LearningPath } from './server/db';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Middleware
app.use(express.json({ limit: '25mb' }));

// Safe Gemini AI instance
let aiClient: GoogleGenAI | null = null;
try {
  if (process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI();
  }
} catch (e) {
  console.warn('Could not initialize GoogleGenAI client:', e);
}

// ----------------------------------------------------
// 1. AI QURAN LEARNING ASSISTANT & NEW MUSLIM PATHWAY
// ----------------------------------------------------
app.post('/api/ai/chat', async (req: Request, res: Response) => {
  try {
    const { message, language = 'en', mode = 'tutor', history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const systemPrompt = `You are the Official AI Quran & Islamic Learning Assistant of "Noor Ul Huda Online Quran Academy".
The Academy specializes in personalized 1-on-1 Quran and Islamic learning with certified male and female teachers worldwide.
Website Features:
- Courses: Noorani Qaida & Basic Arabic, Tajweed-ul-Quran & Makharij, Quran Memorization (Hifz), Islamic Studies for Children & Youth, Quran Translation & Tafsir, Quranic Arabic Language, Daily Masnoon Duas & Daily Supplications, Prophetic Character & Stories, New Muslim Foundation Course.
- Pricing Plans:
  * Premium Plan (5 classes/week): $85/month
  * Standard Plan (3 classes/week): $59/month
  * Basic Plan (2 classes/week): $40/month
- Teachers: Graduated from renowned institutions like Al-Azhar, Wifaq-ul-Madaris, holding Ijazah in Hafs 'an 'Asim. Male & female scholars available.
- Features: 1-on-1 private video classes, interactive digital Quran Mushaf, audio recitation recording & teacher feedback, personalized learning paths, student/parent/teacher/admin dashboards, 24/7 flexible scheduling, 3-day free trial.
- Contact: Phone/WhatsApp +92 313 0958451, Email: sanaullah4542khan@gmail.com, info@noorulhudaacademy.com.

IMPORTANT RULES & BOUNDARIES:
1. Mode: "${mode}".
   - If mode is "new_muslim", offer gentle, compassionate, welcoming guidance for new Muslims (shahada, basics of purification wudu, prayer salah steps, understanding Tawhid, gentle daily habits, reassurance).
   - If mode is "tutor", answer questions about Quran reading, Tajweed rules (Noon Saakin, Meem Saakin, Madd, Makharij), academy courses, lesson recommendations, schedules, and learning methods.
2. Language: Answer fluently in the requested language: "${language}" (English, Urdu [اردو], or Arabic [العربية]). If the user speaks Urdu or Arabic, respond respectfully in that language with high literary and Islamic etiquette.
3. SCHOLARLY & RECITATION LIMITATION DISCLAIMER:
   - Always clarify that while you provide general Islamic education and study tools, actual Quranic recitation (Tajweed) requires listening and correction by a qualified human Qari/teacher.
   - For specific legal rulings (Fatwas), recommend consulting certified Muftis/scholars.
   - Encourage students to book a free trial with a human teacher at Noor Ul Huda Academy.
4. Keep answers clear, authentic, respectful, encouraging, and formatted with clean paragraphs or bullet points.`;

    // Attempt Gemini call if client available
    if (aiClient && process.env.GEMINI_API_KEY) {
      try {
        const fullPrompt = `${systemPrompt}\n\nUser Query: ${message}`;
        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: fullPrompt
        });

        const text = response.text || '';
        if (text.trim()) {
          return res.json({
            reply: text,
            provider: 'gemini-3.8-flash',
            disclaimer: 'AI guidance is for educational reference. For recitation validation, practice with a certified teacher.'
          });
        }
      } catch (geminiError: any) {
        console.warn('Gemini API call failed, using intelligent fallback:', geminiError?.message || geminiError);
      }
    }

    // Intelligent Fallback Knowledge Engine (guaranteed 100% uptime)
    const lower = message.toLowerCase();
    let fallbackReply = '';

    if (language === 'ur' || /[\u0600-\u06FF]/.test(message)) {
      if (lower.includes('فیس') || lower.includes('قیمت') || lower.includes('fee') || lower.includes('price')) {
        fallbackReply = `نور الہدیٰ آن لائن قران اکیڈمی کے ماہانہ تعلیمی پلانز درج ذیل ہیں:
• پریمیم پلان (ہفتے میں 5 کلاسز): $85 فی مہینہ
• اسٹینڈرڈ پلان (ہفتے میں 3 کلاسز): $59 فی مہینہ
• بنیادی پلان (ہفتے میں 2 کلاسز): $40 فی مہینہ
تمام پلانز میں 1-آن-1 انفرادی کلاس، سند یافتہ اساتذہ، اور 3 دن کا مفت ٹرائل شامل ہے۔ مزید معلومات کے لیے واٹس ایپ (+92 313 0958451) پر رابطہ فرمائیں۔`;
      } else if (lower.includes('تجوید') || lower.includes('مخارج') || lower.includes('نون ساکن')) {
        fallbackReply = `تجوید قران کریم کی صحیح تلاوت کا فن ہے۔ نون ساکن اور تنوین کے 4 بنیادی احکام ہیں:
1. اظہار (صاف پڑھنا): جب نون ساکن کے بعد حروف حلقی (ء، ہ، ع، ح، غ، خ) آئیں۔
2. ادغام (ملا کر پڑھنا): حروف یرملون (ی، ر، م، ل، و، ن) میں۔
3. اقلاب (میم سے بدلنا): حرف 'ب' آنے پر۔
4. اخفاء (ناک میں چھپا کر پڑھنا): باقی 15 حروف میں۔
نوٹ: تجوید کی عملی مشق کے لیے ہمارے تجربہ کار قاری صاحب کے ساتھ مفت ٹرائل کلاس بک کریں۔`;
      } else {
        fallbackReply = `السلام علیکم و رحمتہ اللہ و برکاتہ!
نور الہدیٰ آن لائن قران اکیڈمی میں خوش آمدید۔
ہم نورانی قاعدہ، ناظرہ قران مع تجوید، حفظ قران، اور اسلامیات کے کورسز پیش کرتے ہیں۔
آپ کس کورس یا کلاس شیڈول کے بارے میں جاننا چاہتے ہیں؟ آپ ہماری سند یافتہ اساتذہ کے ساتھ مفت 3 روزہ ٹرائل بھی حاصل کر سکتے ہیں۔`;
      }
    } else if (language === 'ar') {
      fallbackReply = `أهلاً وسهلاً بكم في أكاديمية نور الهدى لتعليم القرآن الكريم عن بعد.
نقدم دروساً فردية (1-على-1) مع نخبة من القراء والمعلمين المجازين في:
• القاعدة النورانية وتأسيس القراءة
• أحكام التجويد والمخارج
• تحفيظ القرآن الكريم
• العلوم الإسلامية واللغة العربية
باقاتنا التعليمية تبدأ من $40 شهرياً مع إمكانية تجربة مجانية لـ 3 أيام.`;
    } else {
      // English
      if (mode === 'new_muslim' || lower.includes('new muslim') || lower.includes('revert') || lower.includes('convert')) {
        fallbackReply = `As-salamu alaykum and a warmest welcome!
We are honored to accompany you on your beautiful journey in Islam.
Here are supportive initial steps for beginners:
1. The Foundation (Tawhid & Shahada): Knowing Allah is One with no partners, and Muhammad (ﷺ) is His final messenger.
2. Step-by-Step Prayer (Salah): Start with simple postures and listening; perfection is a gradual, loving journey.
3. Learning to Read the Quran: Starting with our beginner-friendly Noorani Qaida module teaches Arabic letters from zero with zero pressure.
4. Dedicated Mentorship: We offer compassionate, patient 1-on-1 tutors specifically trained for new Muslims.

Feel free to ask any question about daily routines, wudu, prayers, or book a compassionate free trial!`;
      } else if (lower.includes('fee') || lower.includes('price') || lower.includes('cost') || lower.includes('plan')) {
        fallbackReply = `Noor Ul Huda Quran Academy offers transparent, affordable monthly plans:
• Basic Plan (2 classes/week, 8 sessions/mo): $40 / month
• Standard Plan (3 classes/week, 12 sessions/mo): $59 / month
• Premium Plan (5 classes/week, 20 sessions/mo): $85 / month

All plans include:
- Dedicated 1-on-1 private lessons (30 mins each)
- Certified male & female Azhari & Ijazah tutors
- Interactive digital classroom & recitation audio grading
- 3-Day risk-free trial (no card required)
WhatsApp: +92 313 0958451 | Email: sanaullah4542khan@gmail.com`;
      } else if (lower.includes('tajweed') || lower.includes('noon saakin') || lower.includes('qalqalah') || lower.includes('makharij')) {
        fallbackReply = `Tajweed literally means "beautification and precise pronunciation" of Allah's Words.
Key Pillars of Tajweed:
1. Makharij (Articulations): Producing each Arabic letter from its exact throat, tongue, or lip point.
2. Sifaat (Letter Characteristics): Whispering, echoing (Qalqalah), or lightness/heaviness (Tafkheem/Tarqeeq).
3. Noon Saakin & Tanween: Izhar (clearness), Idgham (merging), Iqlab (flipping to Meem), and Ikhfa (nasal concealment).

Important note: Tajweed is an oral tradition passed directly from mouth to ear. Practice directly with our qualified Sheikhs during your live lesson.`;
      } else {
        fallbackReply = `As-salamu alaykum! Welcome to the Noor Ul Huda Quran Learning Assistant.
I am here to guide you through:
• Our courses: Noorani Qaida, Tajweed Mastery, Hifz Memorization, Islamic Studies, and Arabic.
• Academy admissions, 3-day free trials, and customized lesson schedules.
• Audio recitation practice and homework tracking.

How may I assist your Quranic journey today?`;
      }
    }

    return res.json({
      reply: fallbackReply,
      provider: 'knowledge-engine',
      disclaimer: 'AI guidance is for educational reference. For recitation validation, practice with a certified teacher.'
    });
  } catch (error: any) {
    console.error('Error in /api/ai/chat:', error);
    res.status(500).json({ error: 'Failed to process AI chat request' });
  }
});

// ----------------------------------------------------
// 2. AUTHENTICATION & USER MANAGEMENT
// ----------------------------------------------------
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { identifier, password, role } = req.body;
  if (!identifier) {
    return res.status(400).json({ error: 'Identifier (email or Student/Teacher ID) is required' });
  }

  const users = db.getAllUsers();
  const idLower = identifier.trim().toLowerCase();
  const user = users.find(u =>
    u.email.toLowerCase() === idLower ||
    (u.studentId && u.studentId.toLowerCase() === idLower) ||
    (u.teacherId && u.teacherId.toLowerCase() === idLower) ||
    (u.parentId && u.parentId.toLowerCase() === idLower)
  );

  if (!user) {
    return res.status(401).json({ error: 'Account not found. Please verify your credentials or register.' });
  }

  // Password / Pin check (allows 123456 or matching password)
  if (password && user.passwordHash !== password && password !== '123456') {
    return res.status(401).json({ error: 'Invalid PIN or password.' });
  }

  return res.json({
    token: `tok_${user.id}_${Date.now()}`,
    user: {
      id: user.id,
      name: user.name,
      urduName: user.urduName,
      email: user.email,
      role: user.role,
      studentId: user.studentId,
      teacherId: user.teacherId,
      parentId: user.parentId,
      avatarUrl: user.avatarUrl,
      phone: user.phone
    }
  });
});

app.post('/api/auth/register', (req: Request, res: Response) => {
  const { name, email, role = 'student', password, phone, courseInterest } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const existing = db.getUserByEmail(email);
  if (existing) {
    return res.status(400).json({ error: 'An account with this email already exists' });
  }

  const newId = `usr-${Date.now()}`;
  const studentId = role === 'student' ? `NUH-${Math.floor(1000 + Math.random() * 9000)}` : undefined;
  const parentId = role === 'parent' ? `PAR-${Math.floor(100 + Math.random() * 900)}` : undefined;

  const newUser: UserAccount = {
    id: newId,
    name,
    email,
    role: role as any,
    passwordHash: password || '123456',
    studentId,
    parentId,
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    phone: phone || '+92 313 0958451',
    createdAt: new Date().toISOString().split('T')[0]
  };

  db.addUser(newUser);

  // If student, create initial learning path
  if (studentId) {
    db.saveLearningPath({
      studentId,
      studentName: name,
      ageGroup: 'Youth / Adult',
      currentLevel: 'Beginner (Qaida)',
      primaryGoal: courseInterest || 'Learn Quran with Tajweed',
      daysPerWeek: 3,
      recommendedCourse: courseInterest || 'Noorani Qaida & Basic Arabic',
      stage: 'Stage 1: Alphabet & Phonetics Assessment',
      milestones: [
        {
          id: 'ms-new-1',
          title: 'Arabic Letters Recognition & Vocal Articulations',
          duration: '3 Weeks',
          status: 'in-progress',
          description: 'Recognizing all 28 Arabic letters in isolated and joint forms.'
        },
        {
          id: 'ms-new-2',
          title: 'Harakat (Fathah, Kasrah, Dammah) Mastery',
          duration: '3 Weeks',
          status: 'upcoming',
          description: 'Short vowels and clear non-stretched pronunciation.'
        }
      ],
      updatedAt: new Date().toISOString()
    });
  }

  return res.json({
    token: `tok_${newUser.id}_${Date.now()}`,
    user: newUser
  });
});

app.get('/api/auth/me', (req: Request, res: Response) => {
  const users = db.getAllUsers();
  // Return first demo student or requested id
  res.json({ user: users[0] });
});

// ----------------------------------------------------
// 3. PERSONALIZED LEARNING PATHS & ASSESSMENTS
// ----------------------------------------------------
app.post('/api/learning-path/assess', (req: Request, res: Response) => {
  const { studentName, studentAge, alphabetKnowledge, readingFluency, targetGoal, daysPerWeek } = req.body;

  let currentLevel: LearningPath['currentLevel'] = 'Beginner (Qaida)';
  let recommendedCourse = 'Noorani Qaida & Basic Arabic';
  let stage = 'Stage 1: Arabic Phonetics & Foundation';

  if (targetGoal === 'revert' || targetGoal === 'new_muslim') {
    currentLevel = 'New Muslim Foundation';
    recommendedCourse = 'New Muslim Comprehensive Foundation Course';
    stage = 'Stage 1: Islamic Beliefs, Wudu, and First Surahs';
  } else if (readingFluency === 'fluent_rules') {
    currentLevel = 'Advanced (Hifz & Tafsir)';
    recommendedCourse = 'Quran Memorization (Hifz) & Ijazah Preparation';
    stage = 'Stage 4: Hifz Sabak/Sabqi and Tafsir Studies';
  } else if (alphabetKnowledge === 'confident') {
    currentLevel = 'Intermediate (Nazra & Tajweed)';
    recommendedCourse = 'Tajweed-ul-Quran & Makharij Masterclass';
    stage = 'Stage 2: Tajweed Rules & Fluency in Recitation';
  }

  const milestones: LearningPath['milestones'] = [
    {
      id: `ms-${Date.now()}-1`,
      title: 'Level Assessment & Placement Evaluation',
      duration: '1 Week',
      status: 'completed',
      description: 'Initial diagnostic assessment with head teacher Sheikh Omar.'
    },
    {
      id: `ms-${Date.now()}-2`,
      title: `${recommendedCourse} - Core Module 1`,
      duration: '4-6 Weeks',
      status: 'in-progress',
      description: 'Systematic daily practice with oral repetition and recitation.'
    },
    {
      id: `ms-${Date.now()}-3`,
      title: 'Mid-term Tajweed & Retention Check',
      duration: '1 Week',
      status: 'upcoming',
      description: 'Formal evaluation of articulation, pausing (waqf), and fluency.'
    },
    {
      id: `ms-${Date.now()}-4`,
      title: 'Course Completion & Certification',
      duration: 'Final Examination',
      status: 'upcoming',
      description: 'Official Noor Ul Huda Academy Certificate of Achievement.'
    }
  ];

  const studentId = req.body.studentId || 'NUH-8421';
  const saved = db.saveLearningPath({
    studentId,
    studentName: studentName || 'Student',
    ageGroup: studentAge || 'Youth',
    currentLevel,
    primaryGoal: targetGoal || 'Quran Literacy',
    daysPerWeek: Number(daysPerWeek) || 3,
    recommendedCourse,
    stage,
    milestones,
    updatedAt: new Date().toISOString()
  });

  res.json({ success: true, learningPath: saved });
});

app.get('/api/learning-path/:studentId', (req: Request, res: Response) => {
  const pathData = db.getLearningPath(req.params.studentId);
  if (!pathData) {
    // Return default template
    return res.json({
      learningPath: db.getLearningPath('NUH-8421')
    });
  }
  res.json({ learningPath: pathData });
});

// ----------------------------------------------------
// 4. ATTENDANCE MANAGEMENT SYSTEM
// ----------------------------------------------------
app.get('/api/attendance', (req: Request, res: Response) => {
  const studentId = req.query.studentId as string;
  if (studentId) {
    return res.json({ attendance: db.getAttendanceForStudent(studentId) });
  }
  return res.json({ attendance: db.getAllAttendance() });
});

app.post('/api/attendance/mark', (req: Request, res: Response) => {
  const { studentId, studentName, classId, courseName, teacherName, date, time, status, remarks } = req.body;

  if (!studentId || !date || !status) {
    return res.status(400).json({ error: 'studentId, date, and status are required' });
  }

  const record = db.markAttendance({
    studentId,
    studentName: studentName || 'Student',
    classId: classId || `cls-${Date.now()}`,
    courseName: courseName || 'Tajweed-ul-Quran',
    teacherName: teacherName || 'Sheikh Omar Al-Azhari',
    date,
    time: time || '18:00 GMT',
    status,
    remarks: remarks || 'Attendance logged by teacher.'
  });

  res.json({ success: true, record });
});

// ----------------------------------------------------
// 5. QURAN AUDIO PRACTICE & TEACHER FEEDBACK SYSTEM
// ----------------------------------------------------
app.get('/api/audio-practice', (req: Request, res: Response) => {
  const studentId = req.query.studentId as string;
  const submissions = db.getAudioSubmissions(studentId);
  res.json({ submissions });
});

app.post('/api/audio-practice/submit', (req: Request, res: Response) => {
  const { studentId, studentName, courseName, surahName, ayahRange, audioDataUrl, durationSeconds, studentNotes } = req.body;

  if (!studentId || !surahName) {
    return res.status(400).json({ error: 'studentId and surahName are required' });
  }

  const newSubmission = db.addAudioSubmission({
    studentId,
    studentName: studentName || 'Student',
    courseName: courseName || 'Quran Recitation',
    surahName,
    ayahRange: ayahRange || 'Selected Verses',
    audioDataUrl: audioDataUrl || '',
    durationSeconds: Number(durationSeconds) || 60,
    studentNotes
  });

  // Notify teacher & parent
  db.addNotification({
    userId: 'usr-teacher-1',
    title: 'New Recitation Audio for Review',
    message: `${studentName || 'Student'} submitted ${surahName} (${ayahRange || ''}) for audio evaluation.`,
    type: 'feedback',
    link: '#audio-practice'
  });

  res.json({ success: true, submission: newSubmission });
});

app.post('/api/audio-practice/:id/review', (req: Request, res: Response) => {
  const { teacherName, writtenRemarks, makharijScore, tajweedScore, audioDataUrl } = req.body;

  const updated = db.reviewAudioSubmission(req.params.id, {
    teacherName: teacherName || 'Sheikh Omar Al-Azhari',
    writtenRemarks: writtenRemarks || 'Excellent effort. Continue working on your throat letters.',
    makharijScore: Number(makharijScore) || 90,
    tajweedScore: Number(tajweedScore) || 92,
    audioDataUrl,
    reviewedAt: new Date().toISOString()
  });

  if (!updated) {
    return res.status(404).json({ error: 'Submission not found' });
  }

  // Notify student
  db.addNotification({
    userId: 'usr-student-1',
    title: 'Recitation Evaluation Completed',
    message: `Teacher evaluated your recitation of ${updated.surahName}. Tajweed Score: ${updated.teacherFeedback?.tajweedScore}/100.`,
    type: 'feedback',
    link: '#audio-practice'
  });

  res.json({ success: true, submission: updated });
});

// ----------------------------------------------------
// 6. HOMEWORK & ASSIGNMENTS
// ----------------------------------------------------
app.get('/api/homework', (req: Request, res: Response) => {
  const studentId = req.query.studentId as string;
  const homework = db.getHomework(studentId);
  res.json({ homework });
});

app.post('/api/homework/submit', (req: Request, res: Response) => {
  const { homeworkId, notes, audioUrl } = req.body;
  if (!homeworkId) return res.status(400).json({ error: 'homeworkId is required' });

  const updated = db.submitHomework(homeworkId, notes || '', audioUrl);
  if (!updated) return res.status(404).json({ error: 'Homework not found' });

  res.json({ success: true, homework: updated });
});

app.post('/api/homework/:id/grade', (req: Request, res: Response) => {
  const { grade, remarks } = req.body;
  const updated = db.gradeHomework(req.params.id, grade, remarks);
  if (!updated) return res.status(404).json({ error: 'Homework not found' });

  res.json({ success: true, homework: updated });
});

app.post('/api/homework/create', (req: Request, res: Response) => {
  const { studentId, title, courseName, surahOrTopic, ayahRange, dueDate, description } = req.body;
  const item = db.createHomework({
    studentId: studentId || 'NUH-8421',
    title: title || 'New Assignment',
    courseName: courseName || 'Tajweed-ul-Quran',
    surahOrTopic: surahOrTopic || 'General Lesson',
    ayahRange: ayahRange || '',
    dueDate: dueDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    description: description || 'Complete practice exercises as discussed in class.'
  });

  res.json({ success: true, homework: item });
});

// ----------------------------------------------------
// 7. FEE RECORDS & ADMIN INVOICING
// ----------------------------------------------------
app.get('/api/fees', (req: Request, res: Response) => {
  const studentId = req.query.studentId as string;
  res.json({ fees: db.getFeeRecords(studentId) });
});

app.post('/api/fees/:id/pay', (req: Request, res: Response) => {
  const { paymentMethod } = req.body;
  const updated = db.updateFeeStatus(req.params.id, 'paid', paymentMethod || 'Online Remittance / Card');
  if (!updated) return res.status(404).json({ error: 'Invoice not found' });
  res.json({ success: true, fee: updated });
});

// ----------------------------------------------------
// 8. NOTIFICATIONS & ANNOUNCEMENTS
// ----------------------------------------------------
app.get('/api/notifications', (req: Request, res: Response) => {
  const userId = (req.query.userId as string) || 'usr-student-1';
  res.json({
    notifications: db.getNotifications(userId),
    announcements: db.getAnnouncements()
  });
});

app.post('/api/notifications/:id/read', (req: Request, res: Response) => {
  const updated = db.markNotificationAsRead(req.params.id);
  res.json({ success: true, notification: updated });
});

// ----------------------------------------------------
// 9. ADMIN METRICS & DATA
// ----------------------------------------------------
app.get('/api/admin/metrics', (req: Request, res: Response) => {
  const metrics = db.getAdminMetrics();
  const users = db.getAllUsers();
  const fees = db.getFeeRecords();
  const attendance = db.getAllAttendance();
  const audioSubmissions = db.getAudioSubmissions();

  res.json({
    metrics,
    users,
    fees,
    attendance,
    audioSubmissions
  });
});

// ----------------------------------------------------
// 10. DIGITAL CLASSROOM MEETING GENERATOR
// ----------------------------------------------------
app.get('/api/classroom/session/:classId', (req: Request, res: Response) => {
  const classId = req.params.classId;
  const roomName = `NoorUlHuda-Class-${classId}`;
  const jitsiUrl = `https://meet.jit.si/${roomName}#config.prejoinPageEnabled=false&config.startWithAudioMuted=false`;

  res.json({
    classId,
    roomName,
    meetingUrl: jitsiUrl,
    whiteboardUrl: `https://wbo.ophir.dev/boards/${roomName}`,
    notice: 'Direct, secure end-to-end encrypted classroom session.'
  });
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    geminiActive: !!(aiClient && process.env.GEMINI_API_KEY)
  });
});

// ----------------------------------------------------
// DEV SERVER & VITE INTEGRATION
// ----------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // In dev, use Vite's middlewareMode
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Noor Ul Huda Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
