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
    const {
      studentName,
      parentName,
      name,
      learnerType,
      courseInterest,
      courseTitle,
      course,
      teacherPreference,
      phoneNumber,
      phone,
      email,
      currentLevel,
      preferredDays,
      preferredTime,
      country,
      timezone,
      notes
    } = data;

    const rawName = studentName || name;
    const rawPhone = phoneNumber || phone;

    if (!rawName || !rawPhone) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, error: 'Student name and phone number are required.' })
      };
    }

    const targetEmail = process.env.EMAIL_TO || 'noorulhudaacademy206@gmail.com';
    const ccEmail = process.env.EMAIL_CC || 'sanaullah4542khan@gmail.com';
    const finalCourse = courseTitle || course || courseInterest || 'Noorani Qaida & Basic Arabic';
    const finalSchedule = preferredTime || preferredDays || 'Flexible';
    const finalLocation = country ? `${country} (${timezone || 'Local'})` : (timezone || 'Local');
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
          subject: `[Noor Ul Huda Website] 🌟 Free Trial Booking: ${rawName} (${finalCourse})`,
          html: `
            <div style="font-family:sans-serif;padding:20px;border-radius:10px;background:#f0fdf4;border:1px solid #bbf7d0;">
              <h2 style="color:#064232;">🌟 New Free 3-Day Trial Booking</h2>
              <p><strong>Student Name:</strong> ${rawName}</p>
              ${parentName ? `<p><strong>Parent / Guardian Name:</strong> ${parentName}</p>` : ''}
              <p><strong>Phone / WhatsApp:</strong> ${rawPhone}</p>
              <p><strong>Email:</strong> ${email || 'Not provided'}</p>
              <p><strong>Learner Category:</strong> ${learnerType || 'Child'}</p>
              <p><strong>Selected Course:</strong> ${finalCourse}</p>
              <p><strong>Teacher Preference:</strong> ${teacherPreference || 'No Preference'}</p>
              <p><strong>Current Level:</strong> ${currentLevel || 'Beginner'}</p>
              <p><strong>Preferred Time / Days:</strong> ${finalSchedule}</p>
              <p><strong>Country / Timezone:</strong> ${finalLocation}</p>
              <p><strong>Notes:</strong> ${notes || 'None'}</p>
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
            message: 'Your 3-day free trial request has been successfully delivered to the admissions office.'
          })
        };
      } catch (smtpErr) {
        console.warn('Netlify SMTP failed for trial, attempting relay fallback:', smtpErr);
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
        _subject: `[Noor Ul Huda Website] Free Trial Booking: ${rawName} (${finalCourse})`,
        _cc: ccEmail,
        _template: 'table',
        _captcha: 'false',
        student_name: rawName,
        parent_guardian_name: parentName || 'N/A',
        phone_whatsapp: rawPhone,
        email_address: email || 'Not provided',
        learner_type: learnerType || 'Child',
        selected_course: finalCourse,
        teacher_preference: teacherPreference || 'No Preference',
        current_level: currentLevel || 'Complete Beginner',
        preferred_time_schedule: finalSchedule,
        country_timezone: finalLocation,
        notes: notes || 'None',
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
        message: 'Your 3-day free trial request has been successfully delivered to the admissions office.'
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
