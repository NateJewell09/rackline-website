import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// ─── SETUP ────────────────────────────────────────────────────────────────────
// Add these to your Vercel environment variables:
//   STRIPE_SECRET_KEY=sk_live_...   (or sk_test_... for testing)
//
// Stripe dashboard: https://dashboard.stripe.com/apikeys
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    return NextResponse.json(
      { error: "Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2026-02-25.clover" });

  try {
    const body = await req.json();
    const { product, state, mount, finish, hardware, engraving, price } = body;

    // Build line item description
    const description = [
      `State: ${state}`,
      `Mount: ${mount === "euro" ? "Euro Mount" : "Shoulder Mount (+$25)"}`,
      `Finish: ${finish}`,
      `Hardware: ${hardware === "basic" ? "Basic Bracket" : "Metal Swivel (+$10)"}`,
      engraving ? "Custom Engraving (+$20)" : null,
    ]
      .filter(Boolean)
      .join(" | ");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: Math.round(price * 100), // Stripe expects cents
            product_data: {
              name: product ?? "Custom Wooden Plaque",
              description,
              images: [
                "https://rackline.ai/assets/OH_1765828107808-DVhAKF8x.png",
              ],
            },
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      success_url: `${req.nextUrl.origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/shop/custom-plaque`,
      metadata: {
        product: product ?? "Custom Wooden Plaque",
        state,
        mount,
        finish,
        hardware,
        engraving: String(engraving),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Checkout session creation failed";
    console.error("[checkout] Stripe error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
