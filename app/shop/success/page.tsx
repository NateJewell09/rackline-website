import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Confirmed | rackline.ai",
};

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>

        <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
          Order Confirmed
        </span>
        <h1 className="text-3xl font-bold text-white mb-3">Your plaque is on its way!</h1>
        <p className="text-white/50 text-sm mb-8">
          Thanks for your order. You'll receive an email confirmation shortly. Your handcrafted plaque will ship within 5–7 business days.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 text-left space-y-3">
          {[
            { icon: "📬", text: "Order confirmation sent to your email" },
            { icon: "🪵", text: "Plaque handcrafted and ships in 5–7 days" },
            { icon: "📦", text: "Free shipping — tracking info emailed when shipped" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 text-sm text-white/70">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/shop"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl py-3 text-sm transition-colors"
          >
            Back to Shop
          </Link>
          <Link
            href="/download"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl py-3 text-sm transition-colors"
          >
            Download rackline.ai →
          </Link>
        </div>
      </div>
    </div>
  );
}
