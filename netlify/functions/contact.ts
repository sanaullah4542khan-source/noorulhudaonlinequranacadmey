import nodemailer from 'nodemailer';

export async function handler(event: any) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, phone, course, message } = data;

    if (!name || !phone) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, error: 'Name and phone are required.' })
      };
    }

    const targetEmail = process.env.EMAIL_TO || 'noorulhudaacademy206@gmail.com';
    const ccEmail = process.env.EMAIL_CC || 'sanaullah4542khan@gmail.com';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Check if real SMTP credentials are provided
    if (
      smtpUser &&
      smtpPass &&
      smtpPass !== 'your_16_character_app_password' &&
      smtpPass !== 'your_16_character_gmail_app_password' &&
      smtpPass.length >= 8
    ) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '465', 10),
          secure: process.env.SMTP_SECURE === 'true' || true,
          auth: { user: smtpUser, pass: smtpPass }
        });

        await transporter.sendMail({
          from: `"Noor Ul Huda Admissions" <${smtpUser}>`,
          to: targetEmail,
          cc: ccEmail,
          replyTo: email || undefined,
          subject: `[Noor Ul Huda Website] Contact Inquiry: ${name} (${course || 'General'})`,
          html: `
            <div style="font-family:sans-serif;padding:20px;border-radius:10px;background:#f0fdf4;border:1px solid #bbf7d0;">
              <h2 style="color:#064232;">New Contact Inquiry Received</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email || 'Not provided'}</p>
              <p><strong>Course:</strong> ${course || 'General'}</p>
              <p><strong>Message:</strong> ${message || 'No additional message'}</p>
            </div>
          `
        });

        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: true,
            deliveryMethod: 'smtp',
            recipient: targetEmail,
            message: 'Your inquiry has been successfully delivered to Noor Ul Huda Academy admissions.'
          })
        };
      } catch (smtpErr) {
        console.warn('Netlify SMTP failed, attempting relay fallback:', smtpErr);
      }
    }

    // Fallback: Dispatch directly to target email via verified relay with proper origin
    const origin = process.env.URL || 'https://noorulhudaacademy.netlify.app';
    const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'NoorUlHuda-Netlify-Function/1.0',
        'Referer': origin,
        'Origin': origin
      },
      body: JSON.stringify({
        _subject: `[Noor Ul Huda Website] Contact Inquiry: ${name} (${course || 'General'})`,
        _cc: ccEmail,
        _template: 'table',
        _captcha: 'false',
        sender_name: name,
        phone_number: phone,
        email_address: email || 'Not provided',
        course_interest: course || 'Quran Studies',
        message: message || 'N/A',
        submitted_at: new Date().toISOString()
      })
    });

    if (!res.ok) {
      throw new Error(`Relay service returned status ${res.status}`);
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        deliveryMethod: 'relay_service',
        recipient: targetEmail,
        message: 'Your inquiry has been successfully delivered to Noor Ul Huda Academy admissions.'
      })
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, error: error.message || 'Internal Server Error' })
    };
  }
}
