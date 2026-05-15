'use server'

import nodemailer from 'nodemailer';
import dns from 'dns';

// Force Node.js to prefer IPv4 over IPv6 to prevent ENETUNREACH errors on Render
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

  console.log(`[DEBUG] Attempting to send email via: ${emailUser}`);

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { error: 'Missing required fields' };
  }

  // Hybrid config: Proven 'service: gmail' + Force IPv4 for Render
  // Use JSDoc to bypass strict type checking for the transport options
  /** @type {any} */
  const transportOptions = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    // Aggressive network settings for Render
    family: 4, 
    connectionTimeout: 40000,
    greetingTimeout: 40000,
    socketTimeout: 40000
  };

  const transporter = nodemailer.createTransport(transportOptions);

  try {
    await transporter.verify();
    console.log('[NODEMAILER] Transporter verified successfully');

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailUser,
      replyTo: email,
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
    return { error: 'Failed to send email. Please ensure your Gmail App Password is correct.' };
  }
}