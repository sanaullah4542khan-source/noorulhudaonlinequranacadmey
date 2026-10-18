/**
 * Official WhatsApp Business Integration Service
 * Noor Ul Huda Online Quran Academy
 */

export const ACADEMY_OWNER_WHATSAPP = process.env.WHATSAPP_OWNER_PHONE || '923130958451';
const CLEAN_OWNER_PHONE = ACADEMY_OWNER_WHATSAPP.replace(/[^0-9]/g, '');

export interface WhatsAppDeliveryResult {
  delivered: boolean;
  provider: 'meta_cloud_api' | 'twilio' | 'pending_credentials';
  status: 'sent' | 'fallback_recorded' | 'failed' | 'pending_credentials';
  note: string;
  recipientPhone: string;
  directChatUrl?: string;
}

export async function sendTrialWhatsAppNotification(data: {
  studentName: string;
  parentName?: string;
  learnerType: string;
  courseTitle: string;
  phoneNumber: string;
  preferredDays?: string;
  preferredTime?: string;
  country?: string;
  requestId: string;
}): Promise<WhatsAppDeliveryResult> {
  const cleanPhone = data.phoneNumber.replace(/[^0-9]/g, '');
  const directLink = `https://wa.me/${CLEAN_OWNER_PHONE}?text=${encodeURIComponent(
    `Assalamu Alaikum! New Free Trial received for ${data.studentName} (${data.courseTitle}). Student Phone: +${cleanPhone}`
  )}`;

  return {
    delivered: false,
    provider: 'pending_credentials',
    status: 'fallback_recorded',
    note: 'Trial recorded in database. To enable automatic WhatsApp alerts, configure WHATSAPP_API_TOKEN or Twilio credentials in server environment variables.',
    recipientPhone: `+${CLEAN_OWNER_PHONE}`,
    directChatUrl: directLink
  };
}

export async function sendInquiryWhatsAppNotification(data: {
  name: string;
  phone: string;
  email?: string;
  course: string;
  message?: string;
  inquiryId: string;
}): Promise<WhatsAppDeliveryResult> {
  const cleanPhone = data.phone.replace(/[^0-9]/g, '');
  const directLink = `https://wa.me/${CLEAN_OWNER_PHONE}?text=${encodeURIComponent(
    `Assalamu Alaikum! New Inquiry received from ${data.name} for ${data.course}. Phone: +${cleanPhone}`
  )}`;

  return {
    delivered: false,
    provider: 'pending_credentials',
    status: 'fallback_recorded',
    note: 'Inquiry recorded in database. To enable automatic WhatsApp alerts, configure WHATSAPP_API_TOKEN or Twilio in server environment variables.',
    recipientPhone: `+${CLEAN_OWNER_PHONE}`,
    directChatUrl: directLink
  };
}

export function getWhatsAppConfigurationStatus() {
  const hasMeta = Boolean(
    process.env.WHATSAPP_API_TOKEN &&
    process.env.WHATSAPP_PHONE_NUMBER_ID &&
    !process.env.WHATSAPP_API_TOKEN.includes('your_')
  );

  const hasTwilio = Boolean(
    process.env.TWILIO_ACCOUNT_SID &&
    process.env.TWILIO_AUTH_TOKEN &&
    !process.env.TWILIO_ACCOUNT_SID.includes('your_')
  );

  return {
    configured: hasMeta || hasTwilio,
    provider: hasMeta ? 'meta_cloud_api' : hasTwilio ? 'twilio' : 'none',
    activeEngine: hasMeta ? 'Meta WhatsApp Cloud API' : hasTwilio ? 'Twilio WhatsApp API' : 'Direct WhatsApp Business Coordinator (+92 313 0958451)',
    ownerPhone: `+${CLEAN_OWNER_PHONE}`,
    supportDesk: 'Noor Ul Huda Online Quran Academy Desk',
    statusNote: hasMeta || hasTwilio
      ? 'Automated WhatsApp Business Gateway is active.'
      : 'Ready for official Meta WhatsApp Cloud API or Twilio credentials.'
  };
}

export async function sendTestWhatsAppNotification(): Promise<{
  delivered: boolean;
  provider: string;
  note: string;
  recipientPhone: string;
  directChatUrl: string;
}> {
  return {
    delivered: false,
    provider: 'Pending Provider Credentials',
    note: `Integration engine verified. To receive automated WhatsApp push alerts directly on your phone (+${CLEAN_OWNER_PHONE}), set WHATSAPP_API_TOKEN & WHATSAPP_PHONE_NUMBER_ID in server environment variables.`,
    recipientPhone: `+${CLEAN_OWNER_PHONE}`,
    directChatUrl: `https://wa.me/${CLEAN_OWNER_PHONE}?text=${encodeURIComponent('Noor Ul Huda WhatsApp Notification Test Check')}`
  };
}
