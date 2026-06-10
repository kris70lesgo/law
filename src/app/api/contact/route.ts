import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Resend is not configured on the server." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const payload = (await request.json()) as ContactPayload;

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const subject = clean(payload.subject);
  const message = clean(payload.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "goel.taxpert@gmail.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ||
    "Goel & Associates <onboarding@resend.dev>";

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `Website contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2 style="margin: 0 0 16px; color: #003366;">New Website Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <div style="margin-top: 20px;">
          <strong>Message:</strong>
          <p style="white-space: normal;">${safeMessage}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
