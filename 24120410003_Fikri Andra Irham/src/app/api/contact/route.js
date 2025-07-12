// src/app/api/contact/route.js
import 'server-only';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SENDER_EMAIL = 'Your Portfolio <contact@fai.my.id>';
const RECIPIENT_EMAIL = 'fikri.andrhm@gmail.com';

const resend = new Resend(RESEND_API_KEY);

function validateContactData(data) {
  const { fullName, email, subject, message } = data;

  if (!fullName || !email || !subject || !message) {
    return { isValid: false, message: 'Missing required fields: Full Name, Email, Subject, and Message are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Invalid email address format.' };
  }

  return { isValid: true };
}

async function sendContactEmail(emailDetails) {
  const { fullName, email, subject, message } = emailDetails;

  const emailContent = `
    <p>You received a new message from your portfolio contact form:</p>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const emailSubject = `New Contact Form from ${fullName}: ${subject}`;

  const { data, error } = await resend.emails.send({
    from: SENDER_EMAIL,
    to: RECIPIENT_EMAIL,
    subject: emailSubject,
    html: emailContent,
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message || 'Unknown error'}`);
  }

  return data;
}

export async function POST(request) {
  try {
    const requestData = await request.json();

    const validationResult = validateContactData(requestData);
    if (!validationResult.isValid) {
      return NextResponse.json({ message: validationResult.message }, { status: 400 });
    }

    await sendContactEmail(requestData);

    return NextResponse.json(
      { message: 'Message sent successfully! Thank you for reaching out.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { message: error.message || 'An unexpected server error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}