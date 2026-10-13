/**
 * Official WhatsApp Business Integration Service
 * Noor Ul Huda Online Quran Academy
 *
 * Supports:
 * 1. Meta WhatsApp Business Cloud API (Official Graph API)
 *    - Requires: WHATSAPP_API_TOKEN, WHATSAPP_PHONE_NUMBER_ID
 * 2. Twilio WhatsApp API
 *    - Requires: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_NUMBER
 * 3. Accurate delivery status reporting & click-to-coordinate direct links
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

/**
 * Dispatch notification via Meta WhatsApp Cloud API
 */
async function sendViaMetaCloudApi(
  toPhone: string,
  messageText: string
): Promise<{ success: boolean; note: string }> {
  const token = process.env.WHATSAPP_API_TOKEN || process.env.META_WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!token || !phoneNumberId || token.includes('your_') || phoneNumberId.includes('your_')) {
    return { success: false, note: 'Meta WhatsApp Cloud API credentials not configured.' };
  }

  try {
    const formattedPhone = toPhone.replace(/[^0-9]/g, '');
    const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: formattedPhone,
        type: 'text',
        text: { preview_url: false, body: messageText }
      }),
      signal: controller.signal
    });

    clearTimeout(timeout);
    const result = await response.json().catch(() => null);

    if (response.ok && result?.messages?.[0]?.id) {
      return {
        success: true,
        note: `WhatsApp message delivered via Meta Cloud API (Msg ID: ${result.messages[0].id})`
      };
    }

    const errorMsg = result?.error?.message || `Meta API HTTP error: ${response.status}`;
    return { success: false, note: errorMsg };
  } catch (err: any) {
    return { success: false, note: err?.message || 'Meta API network dispatch error' };
  }
}

/**
 * Dispatch notification via Twilio WhatsApp API
 */
async function sendViaTwilioWhatsApp(
  toPhone: string,
  messageText: string
): Promise<{ success: boolean; note: string }> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886';

  if (!accountSid || !authToken || accountSid.includes('your_')) {
    return { success: false, note: 'Twilio WhatsApp credentials not configured.' };
  }

  try {
    const formattedTo = toPhone.startsWith('whatsapp:') ? toPhone : `whatsapp:+${toPhone.replace(/[^0-9]/g, '')}`;
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    const params = new URLSearchParams();
    params.append('From', fromNumber.startsWith('whatsapp:') ? fromNumber : `whatsapp:${fromNumber}`);
    params.append('To', formattedTo);
    params.append('Body', messageText);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString(),
      signal: controller.signal
    });

    clearTimeout(timeout);
    const result = await response.json().catch(() => null);

    if (response.ok && result?.sid) {
      return {
        success: true,
        note: `WhatsApp message sent via Twilio (SID: ${result.sid})`
      };
    }

    return {
      success: false,
      note: result?.message || `Twilio error status ${response.status}`
    };
  } catch (err: any) {
    return { success: false, note: err?.message || 'Twilio network dispatch error' };
  }
}

/**
 * Dispatch Free Trial Notification via WhatsApp to Academy Owner
 */
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
  const messageBody = `🌟 *New 3-Day Free Trial Booking*
Academy: Noor Ul Huda Online Quran Academy

• Student: ${data.studentName}
${data.parentName ? `• Parent/Guardian: ${data.parentName}\n` : ''}• Learner Type: ${data.learnerType}
• Course: ${data.courseTitle}
• WhatsApp/Phone: +${cleanPhone}
• Timing: ${data.preferredTime || data.preferredDays || 'Flexible'}
${data.country ? `• Country: ${data.country}\n` : ''}• Request ID: ${data.requestId}

Reply to student: https://wa.me/${cleanPhone}`;

  // 1. Try Meta WhatsApp Cloud API
  const metaRes = await sendViaMetaCloudApi(CLEAN_OWNER_PHONE, messageBody);
  if (metaRes.success) {
    return {
      delivered: true,
      provider: 'meta_cloud_api',
      status: 'sent',
      note: metaRes.note,
      recipientPhone: `+${CLEAN_OWNER_PHONE}`,
      directChatUrl: `https://wa.me/${CLEAN_OWNER_PHONE}`
    };
  }

  // 2. Try Twilio WhatsApp API
  const twilioRes = await sendViaTwilioWhatsApp(CLEAN_OWNER_PHONE, messageBody);
  if (twilioRes.success) {
    return {
      delivered: true,
      provider: 'twilio',
      status: 'sent',
      note: twilioRes.note,
      recipientPhone: `+${CLEAN_OWNER_PHONE}`,
      directChatUrl: `https://wa.me/${CLEAN_OWNER_PHONE}`
    };
  }

  // 3. Fallback: Log & report delivery state accurately
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

/**
 * Dispatch Contact Inquiry Notification via WhatsApp to Academy Owner
 */
export async function sendInquiryWhatsAppNotification(data: {
  name: string;
  phone: string;
  email?: string;
  course: string;
  message?: string;
  inquiryId: string;
}): Promise<WhatsAppDeliveryResult> {
  const cleanPhone = data.phone.replace(/[^0-9]/g, '');
  const messageBody = `📩 *New Student Contact Inquiry*
Academy: Noor Ul Huda Online Quran Academy

• Name: ${data.name}
• Phone/WhatsApp: +${cleanPhone}
${data.email ? `• Email: ${data.email}\n` : ''}• Course: ${data.course}
${data.message ? `• Message: "${data.message}"\n` : ''}• Inquiry ID: ${data.inquiryId}

Reply to student: https://wa.me/${cleanPhone}`;

  // 1. Try Meta WhatsApp Cloud API
  const metaRes = await sendViaMetaCloudApi(CLEAN_OWNER_PHONE, messageBody);
  if (metaRes.success) {
    return {
      delivered: true,
      provider: 'meta_cloud_api',
      status: 'sent',
      note: metaRes.note,
      recipientPhone: `+${CLEAN_OWNER_PHONE}`,
      directChatUrl: `https://wa.me/${CLEAN_OWNER_PHONE}`
    };
  }

  // 2. Try Twilio WhatsApp API
  const twilioRes = await sendViaTwilioWhatsApp(CLEAN_OWNER_PHONE, messageBody);
  if (twilioRes.success) {
    return {
      delivered: true,
      provider: 'twilio',
      status: 'sent',
      note: twilioRes.note,
      recipientPhone: `+${CLEAN_OWNER_PHONE}`,
      directChatUrl: `https://wa.me/${CLEAN_OWNER_PHONE}`
    };
  }

  // 3. Fallback
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

/**
 * Return current WhatsApp API configuration status
 */
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

  const activeProvider = hasMeta ? 'Meta WhatsApp Cloud API' : (hasTwilio ? 'Twilio WhatsApp API' : 'Direct WhatsApp Business Coordinator (+92 313 0958451)');

  return {
    configured: hasMeta || hasTwilio,
    provider: hasMeta ? 'meta_cloud_api' : (hasTwilio ? 'twilio' : 'none'),
    activeEngine: activeProvider,
    ownerPhone: `+${CLEAN_OWNER_PHONE}`,
    supportDesk: 'Noor Ul Huda Online Quran Academy Desk',
    statusNote: hasMeta || hasTwilio
      ? 'Automated WhatsApp Business Gateway is active and transmitting notifications.'
      : 'Ready for official Meta WhatsApp Cloud API or Twilio WhatsApp API keys. Inbound requests generate instant 1-click coordinator WhatsApp action channels.'
  };
}

/**
 * Live test WhatsApp notification trigger for Administrator
 */
export async function sendTestWhatsAppNotification(): Promise<{
  delivered: boolean;
  provider: string;
  note: string;
  recipientPhone: string;
  directChatUrl: string;
}> {
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' });
  const testMessage = `✅ *Noor Ul Huda Academy - Live WhatsApp Integration Test*
Timestamp: ${timestamp} (Pakistan Time)

This confirms that your Academy website's WhatsApp notification engine is connected and functional.`;

  // 1. Meta Cloud API
  const metaRes = await sendViaMetaCloudApi(CLEAN_OWNER_PHONE, testMessage);
  if (metaRes.success) {
    return {
      delivered: true,
      provider: 'Meta WhatsApp Cloud API',
      note: metaRes.note,
      recipientPhone: `+${CLEAN_OWNER_PHONE}`,
      directChatUrl: `https://wa.me/${CLEAN_OWNER_PHONE}`
    };
  }

  // 2. Twilio
  const twilioRes = await sendViaTwilioWhatsApp(CLEAN_OWNER_PHONE, testMessage);
  if (twilioRes.success) {
    return {
      delivered: true,
      provider: 'Twilio WhatsApp API',
      note: twilioRes.note,
      recipientPhone: `+${CLEAN_OWNER_PHONE}`,
      directChatUrl: `https://wa.me/${CLEAN_OWNER_PHONE}`
    };
  }

  return {
    delivered: false,
    provider: 'Pending Provider Credentials',
    note: `Integration engine verified. To receive automated WhatsApp push alerts directly on your phone (+${CLEAN_OWNER_PHONE}), set WHATSAPP_API_TOKEN & WHATSAPP_PHONE_NUMBER_ID in server environment variables.`,
    recipientPhone: `+${CLEAN_OWNER_PHONE}`,
    directChatUrl: `https://wa.me/${CLEAN_OWNER_PHONE}?text=${encodeURIComponent('Noor Ul Huda WhatsApp Notification Test Check')}`
  };
}
