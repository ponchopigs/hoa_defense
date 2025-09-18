import { NextResponse } from "next/server";

const EMAIL_REGEX = /[^\s@]+@[^\s@]+\.[^\s@]+/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const name = typeof body?.name === "string" ? body.name.trim() : undefined;

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { message: "Provide a valid email address." },
      { status: 400 }
    );
  }

  console.info("[Deck Defense] New interest form submission", {
    email,
    name: name || null,
    receivedAt: new Date().toISOString(),
  });

  // TODO: Replace this console-based stub with your email platform integration.
  // Options include: Mailchimp, ConvertKit, Beehiiv, SendGrid, or a Google Sheet webhook.

  return NextResponse.json({
    message: "Got it! We’ll follow up with next steps once the coalition list is live.",
  });
}
