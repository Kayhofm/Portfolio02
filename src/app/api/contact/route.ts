import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Pretend the submission succeeded so bots don't learn what tripped the filter.
const fakeSuccess = () =>
  NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, company, elapsed } = body;

    // Honeypot: real users never see or fill the "company" field.
    if (typeof company === 'string' && company.trim() !== '') {
      return fakeSuccess();
    }

    // Timing: humans take more than a few seconds to fill the form.
    if (typeof elapsed === 'number' && elapsed < 3000) {
      return fakeSuccess();
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic sanity checks on the submitted content.
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    const tooLong = [name, email, subject, message].some(
      (f) => String(f).length > 5000
    );
    // Spam shape: every field is a long token with no spaces (random strings).
    const looksLikeGibberish = [name, subject, message].every(
      (f) => !/\s/.test(String(f).trim()) && String(f).trim().length > 12
    );
    if (!emailLooksValid || tooLong || looksLikeGibberish) {
      return fakeSuccess();
    }

    // Escape user input before embedding it in the email HTML.
    const esc = (s: string) =>
      String(s).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
      }[c] as string));

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain
      to: ['kayhof@outlook.com'],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Subject:</strong> ${esc(subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${esc(message)}</p>

        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 14px;">
          This message was sent from your portfolio contact form.
          Reply directly to this email to respond to ${esc(name)}.
        </p>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}