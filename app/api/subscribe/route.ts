import { NextRequest, NextResponse } from "next/server";

// ─── BREVO CONFIGURATION ───────────────────────────────────────────────────
// To enable email capture:
// 1. Go to app.brevo.com → Settings → API Keys → Generate a new key
// 2. Add it to your Vercel environment variables as BREVO_API_KEY
// 3. Set BREVO_LIST_ID to the ID of your newsletter list (found in Contacts → Lists)
// 4. Redeploy on Vercel — email capture will work automatically
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID
  ? parseInt(process.env.BREVO_LIST_ID)
  : null;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // If Brevo is not yet configured, return success anyway (dev mode)
    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      console.log(`[subscribe] Email collected (Brevo not configured): ${email}`);
      return NextResponse.json({ success: true });
    }

    // Add contact to Brevo list
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Accept":       "application/json",
        "Content-Type": "application/json",
        "api-key":      BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
        attributes: {
          SOURCE: "website",
        },
      }),
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      // 400 with "Contact already exist" is fine — they're already subscribed
      if ((errBody as { code?: string }).code === "duplicate_parameter") {
        return NextResponse.json({ success: true });
      }
      console.error("[subscribe] Brevo error:", errBody);
      return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
