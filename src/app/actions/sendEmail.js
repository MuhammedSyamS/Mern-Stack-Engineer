'use server'

import nodemailer from 'nodemailer';
import dns from 'dns';

// Force Node.js to prefer IPv4 over IPv6 (as seen in original server.js)
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

export async function sendEmail(formData) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.error('[NODEMAILER] Missing EMAIL_USER or EMAIL_PASS in environment variables.');
    return { error: 'Email service is not configured. Please contact directly via email.' };
  }

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { error: 'Missing required fields' };
  }

  // Create transporter with same settings as server.js
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use STARTTLS
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    family: 4, // Force IPv4
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 20000
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailUser,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #7c3aed;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    console.log('[SUCCESS] Email sent successfully');
    return { success: true, message: 'Your message has been sent successfully. I will get back to you soon!' };
  } catch (err) {
    console.error('[RUNTIME_ERROR] Nodemailer failed:', err);
    return { error: 'Failed to send email. Please try again later or contact me directly.' };
  }
}
