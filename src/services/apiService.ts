/**
 * Noor Ul Huda Online Quran Academy - Admissions & Inquiries API Client
 * Securely communicates with backend API endpoints for Contact Us and Free Trial bookings.
 */

export interface ContactSubmissionPayload {
  name: string;
  phone: string;
  email?: string;
  course: string;
  message?: string;
}

export interface TrialSubmissionPayload {
  studentName: string;
  parentName?: string;
  learnerType: 'child' | 'adult' | 'beginner';
  courseInterest: string;
  courseTitle?: string;
  teacherPreference: 'female' | 'male' | 'no-preference';
  phoneNumber: string;
  email?: string;
  currentLevel?: string;
  preferredDays?: string;
  preferredTime?: string;
  country?: string;
  timezone?: string;
  notes?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
  requestId?: string;
  recipient?: string;
  deliveryMethod?: string;
  error?: string;
}

export interface AdminInquiryItem {
  id: string;
  name: string;
  email?: string;
  phone: string;
  course: string;
  message?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'enrolled';
  emailDeliveryStatus: 'sent' | 'fallback_recorded' | 'failed' | 'pending';
  deliveryNote?: string;
}

export interface AdminTrialItem {
  id: string;
  studentName: string;
  parentName?: string;
  learnerType: 'child' | 'adult' | 'beginner';
  courseInterest: string;
  courseTitle?: string;
  teacherPreference: 'female' | 'male' | 'no-preference';
  phoneNumber: string;
  email?: string;
  currentLevel?: string;
  preferredDays?: string;
  preferredTime?: string;
  country?: string;
  timezone?: string;
  notes?: string;
  createdAt: string;
  status: 'new' | 'scheduled' | 'completed';
  emailDeliveryStatus: 'sent' | 'fallback_recorded' | 'failed' | 'pending';
  deliveryNote?: string;
}

/**
 * Submit Contact Us Inquiry
 */
export async function submitContactInquiry(
  payload: ContactSubmissionPayload
): Promise<SubmissionResponse> {
  try {
    const res = await fetch('/api/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.success) {
      // If backend is running statically on Netlify without Node runtime, try verified relay directly
      if (res.status === 404 || res.status === 502) {
        return await submitViaStaticRelay('contact', payload);
      }
      throw new Error(data?.error || `Server responded with status ${res.status}`);
    }

    return data;
  } catch (err: any) {
    // If fetch failed due to offline/network/static hosting, attempt verified fallback relay
    if (err.message && (err.message.includes('Failed to fetch') || err.message.includes('404'))) {
      try {
        return await submitViaStaticRelay('contact', payload);
      } catch (fallbackErr: any) {
        throw new Error(fallbackErr.message || 'Network connection failed. Please contact us on WhatsApp.');
      }
    }
    throw err;
  }
}

/**
 * Submit Free Trial Booking Request
 */
export async function submitTrialRequest(
  payload: TrialSubmissionPayload
): Promise<SubmissionResponse> {
  try {
    const res = await fetch('/api/trial/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.success) {
      if (res.status === 404 || res.status === 502) {
        return await submitViaStaticRelay('trial', payload);
      }
      throw new Error(data?.error || `Server responded with status ${res.status}`);
    }

    return data;
  } catch (err: any) {
    if (err.message && (err.message.includes('Failed to fetch') || err.message.includes('404'))) {
      try {
        return await submitViaStaticRelay('trial', payload);
      } catch (fallbackErr: any) {
        throw new Error(fallbackErr.message || 'Network connection failed. Please contact us on WhatsApp.');
      }
    }
    throw err;
  }
}

/**
 * Static relay helper for pure-static Netlify builds where server.ts is not running
 */
async function submitViaStaticRelay(
  type: 'contact' | 'trial',
  payload: any
): Promise<SubmissionResponse> {
  const targetEmail = 'noorulhudaacademy206@gmail.com';
  const subject =
    type === 'trial'
      ? `[Noor Ul Huda Website] Free Trial Booking: ${payload.studentName} (${payload.courseTitle || payload.courseInterest})`
      : `[Noor Ul Huda Website] New Contact Inquiry from ${payload.name} (${payload.course})`;

  const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      ...payload
    })
  });

  const json = (await res.json().catch(() => null)) as any;
  if (!res.ok || json?.success === 'false') {
    throw new Error('Unable to transmit request. Please contact us directly via WhatsApp at +92 313 0958451.');
  }

  return {
    success: true,
    recipient: targetEmail,
    deliveryMethod: 'relay_service',
    message: 'Your submission has been safely delivered to the admissions office.'
  };
}

export const ADMIN_TOKEN_KEY = 'nuh_admin_auth_token';

export function getStoredAdminToken(): string | null {
  try {
    return sessionStorage.getItem(ADMIN_TOKEN_KEY) || localStorage.getItem(ADMIN_TOKEN_KEY) || null;
  } catch {
    return null;
  }
}

export function setStoredAdminToken(token: string) {
  try {
    sessionStorage.setItem(ADMIN_TOKEN_KEY, token);
    localStorage.setItem(ADMIN_TOKEN_KEY, token);
  } catch (err) {
    console.error('Failed to save admin token:', err);
  }
}

export function removeStoredAdminToken() {
  try {
    sessionStorage.removeItem(ADMIN_TOKEN_KEY);
    localStorage.removeItem(ADMIN_TOKEN_KEY);
  } catch (err) {
    console.error('Failed to clear admin token:', err);
  }
}

/**
 * Authenticate Administrator with secure server-side verification
 */
export async function loginAdministrator(credentials: {
  identifier: string;
  password?: string;
  secretCode?: string;
}): Promise<{
  success: boolean;
  token?: string;
  user?: any;
  error?: string;
}> {
  try {
    const res = await fetch('/api/auth/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: credentials.identifier,
        secretCode: credentials.secretCode || credentials.password,
        password: credentials.password || credentials.secretCode
      })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'Authentication failed. Please verify credentials.' };
    }
    if (data.token) {
      setStoredAdminToken(data.token);
    }
    return { success: true, token: data.token, user: data.user };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Server communication error during administrator login.' };
  }
}

/**
 * Verify active administrator session
 */
export async function verifyAdminSession(tokenOverride?: string): Promise<{
  authenticated: boolean;
  user?: any;
}> {
  const token = tokenOverride || getStoredAdminToken();
  if (!token) return { authenticated: false };

  try {
    const res = await fetch('/api/auth/admin-verify', {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) {
      removeStoredAdminToken();
      return { authenticated: false };
    }
    const data = await res.json();
    return { authenticated: !!data.authenticated, user: data.user };
  } catch {
    return { authenticated: false };
  }
}

/**
 * Sign out administrator
 */
export async function logoutAdministrator(): Promise<void> {
  const token = getStoredAdminToken();
  if (token) {
    try {
      await fetch('/api/auth/admin-logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch {
      // ignore
    }
  }
  removeStoredAdminToken();
}

/**
 * Fetch all inquiries & trial requests for the LMS Admin dashboard
 */
export async function getAdminInquiries(tokenOverride?: string): Promise<{
  contactInquiries: AdminInquiryItem[];
  trialRequests: AdminTrialItem[];
}> {
  const token = tokenOverride || getStoredAdminToken();
  try {
    const res = await fetch('/api/admin/inquiries', {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    if (!res.ok) throw new Error('Unauthorized or failed to load inquiries');
    return await res.json();
  } catch (err) {
    console.warn('Could not fetch admin inquiries:', err);
    return { contactInquiries: [], trialRequests: [] };
  }
}

/**
 * Update Inquiry Status
 */
export async function updateInquiryStatus(id: string, status: AdminInquiryItem['status'], note?: string, tokenOverride?: string) {
  const token = tokenOverride || getStoredAdminToken();
  const res = await fetch(`/api/admin/inquiries/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ status, note })
  });
  return await res.json();
}

/**
 * Update Trial Status
 */
export async function updateTrialStatus(id: string, status: AdminTrialItem['status'], note?: string, tokenOverride?: string) {
  const token = tokenOverride || getStoredAdminToken();
  const res = await fetch(`/api/admin/trials/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ status, note })
  });
  return await res.json();
}

/**
 * Check active email gateway status
 */
export async function checkEmailStatus(): Promise<{
  recipient: string;
  ccRecipient: string;
  smtpHost: string;
  smtpPort: number;
  smtpSecure: boolean;
  smtpUser: string | null;
  smtpConfigured: boolean;
  activeEngine: string;
}> {
  try {
    const res = await fetch('/api/email/status');
    if (!res.ok) throw new Error('Status failed');
    return await res.json();
  } catch {
    return {
      recipient: 'noorulhudaacademy206@gmail.com',
      ccRecipient: 'sanaullah4542khan@gmail.com',
      smtpHost: 'smtp.gmail.com',
      smtpPort: 465,
      smtpSecure: true,
      smtpUser: null,
      smtpConfigured: false,
      activeEngine: 'Verified Backend Email Relay'
    };
  }
}

/**
 * Trigger live email delivery test
 */
export async function triggerTestEmail(): Promise<{
  success: boolean;
  delivered: boolean;
  method: string;
  recipient: string;
  ccRecipient: string;
  note: string;
  timestamp: string;
  error?: string;
}> {
  const res = await fetch('/api/email/test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  return await res.json();
}

/**
 * Check active WhatsApp gateway status
 */
export async function checkWhatsAppStatus(): Promise<{
  configured: boolean;
  provider: string;
  activeEngine: string;
  ownerPhone: string;
  supportDesk: string;
  statusNote: string;
}> {
  try {
    const res = await fetch('/api/whatsapp/status');
    if (!res.ok) throw new Error('WhatsApp status fetch failed');
    return await res.json();
  } catch {
    return {
      configured: false,
      provider: 'none',
      activeEngine: 'Direct WhatsApp Business Coordinator (+92 313 0958451)',
      ownerPhone: '+923130958451',
      supportDesk: 'Noor Ul Huda Online Quran Academy Desk',
      statusNote: 'WhatsApp coordinator ready. Set WHATSAPP_API_TOKEN in .env for automated Meta Cloud alerts.'
    };
  }
}

/**
 * Trigger live WhatsApp delivery test to academy owner phone
 */
export async function triggerTestWhatsApp(tokenOverride?: string): Promise<{
  success: boolean;
  delivered: boolean;
  provider: string;
  note: string;
  recipientPhone: string;
  directChatUrl?: string;
  error?: string;
}> {
  const token = tokenOverride || getStoredAdminToken();
  const res = await fetch('/api/admin/whatsapp/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });
  return await res.json();
}

export interface AdminStudentItem {
  id: string;
  studentId: string;
  name: string;
  urduName?: string;
  email: string;
  phone: string;
  avatarUrl: string;
  createdAt: string;
  totalClassesAttended: number;
  attendanceRate: number;
  latestCourse: string;
  assignedTeacher: string;
  feeStatus: string;
}

export interface AdminScheduleItem {
  id: string;
  day: string;
  time: string;
  course: string;
  instructor: string;
  room: string;
}

/**
 * Fetch full comprehensive dashboard bundle for authenticated administrator
 */
export async function getAdminFullDashboard(tokenOverride?: string): Promise<{
  contactInquiries: AdminInquiryItem[];
  trialRequests: AdminTrialItem[];
  students: AdminStudentItem[];
  schedules: AdminScheduleItem[];
  metrics: any;
  emailStatus: any;
  whatsAppStatus: any;
}> {
  const token = tokenOverride || getStoredAdminToken();
  try {
    const res = await fetch('/api/admin/full-dashboard', {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    if (!res.ok) throw new Error('Failed to load executive admin dashboard');
    return await res.json();
  } catch (err) {
    console.warn('Could not load full admin dashboard bundle:', err);
    return {
      contactInquiries: [],
      trialRequests: [],
      students: [],
      schedules: [],
      metrics: null,
      emailStatus: null,
      whatsAppStatus: null
    };
  }
}
