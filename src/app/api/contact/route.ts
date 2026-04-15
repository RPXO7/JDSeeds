import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z.string().trim().optional().default(''),
  message: z.string().trim().min(1),
});

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function getSmtpConfig() {
  const host = getRequiredEnv('SMTP_HOST');
  const port = Number(getRequiredEnv('SMTP_PORT'));
  const secure = (process.env.SMTP_SECURE ?? 'false').toLowerCase() === 'true';
  const user = getRequiredEnv('SMTP_USER');
  const pass = getRequiredEnv('SMTP_PASS');

  if (!Number.isFinite(port)) {
    throw new Error('SMTP_PORT must be a number');
  }

  return { host, port, secure, auth: { user, pass } };
}

function getContactConfig() {
  const to = getRequiredEnv('CONTACT_TO_EMAIL');
  const from = getRequiredEnv('CONTACT_FROM_EMAIL');
  const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX?.trim() || '';
  return { to, from, subjectPrefix };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const { name, email, phone, message } = parsed.data;

    const smtp = getSmtpConfig();
    const contact = getContactConfig();

    const transporter = nodemailer.createTransport(smtp);

    const subject = `${contact.subjectPrefix ? `${contact.subjectPrefix} ` : ''}Contact form: ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    await transporter.sendMail({
      to: contact.to,
      from: contact.from,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

