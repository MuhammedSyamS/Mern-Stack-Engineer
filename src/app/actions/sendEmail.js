'use server'

import { Resend } from 'resend';

export async function sendEmail(formData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { error: 'Missing required fields' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'shamsaifudheen@gmail.com',
      replyTo: email,
      subject: `New Message from ${name}`,
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

    if (error) {
      console.error('[RESEND ERROR]', error);
      return { error: 'Failed to send email via Resend.' };
    }

    return { success: true, message: 'Your message has been sent successfully. I will get back to you soon!' };
  } catch (err) {
    console.error('[RUNTIME ERROR]', err);
    return { error: 'An unexpected error occurred.' };
  }
}