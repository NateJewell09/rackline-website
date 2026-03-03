"use client";
import { useState } from "react";
import Link from "next/link";

// Single product photo from rackline.ai — shows all three replica styles
const GALLERY = [
  "https://rackline.ai/assets/Gemini_Generated_Image_ojp0usojp0usojp0_copy_1765833655753-7v7A3wAp.png",
];

type MountStyle = "euro" | "shoulder" | "full";
type SizeOption = "desktop" | "shelf" | "display";

const MOUNT_STYLES: { id: MountStyle; label: string; price: number; desc: string }[] = [
  { id: "euro",     label: "Euro Mount",     price: 0,  desc: "Skull plate and antlers only" },
  { id: "shoulder", label: "Shoulder Mount", price: 5,  desc: "Head and shoulder detail with full rack" },
  { id: "full",     label: "Full Body",      price: 10, desc: "Complete deer replica with body, legs, and rack" },
];

const SIZES: { id: SizeOption; label: string; inches: string; price: number }[] = [
  { id: "desktop", label: "Desktop", inches: '4"', price: 69.99 },
  { id: "shelf",   label: "Shelf",   inches: '6"', price: 99 },
  { id: "display", label: "Display", inches: '8"', price: 119 },
];

const HOW_IT_WORKS = [
  { step: "1", text: "Use the rackline.ai app to capture a 3D scan of your buck" },
  { step: "2", text: "Our artists create a custom 3D model matching your buck's unique rack" },
  { step: "3", text: "We 3D print and hand-paint your replica with lifelike detail" },
  { step: "4", text: "Your miniature trophy ships in 2–3 weeks with a display stand" },
];

export default function MiniMountClient() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [mountStyle, setMountStyle] = useState<MountStyle>("euro");
  const [size, setSize] = useState<SizeOption>("desktop");
  const [notifyName, setNotifyName] = useState("");
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyPhone, setNotifyPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const basePrice = SIZES.find((s) => s.id === size)!.price;
  const styleAdd  = MOUNT_STYLES.find((m) => m.id === mountStyle)!.price;
  const total     = (basePrice + styleAdd + 9.95).toFixed(2);

  function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    // In production this would POST to a waitlist API
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Back nav */}
      <div className="border-b border-white/10 px-4 py-3">
        <div className="max-w-6xl mx-auto">
          <Link href="/shop" className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Sold Out Banner */}
      <div className="bg-red-600/15 border-b border-red-500/30 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
          <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Sold Out
          </div>
          <p className="text-white/70 text-sm">
            This product is currently unavailable — join the waitlist below to be notified when it's back.
          </p>
        </div>
      </div>

      {/* How It Works strip */}
      <div className="border-b border-white/10 bg-white/3 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest text-center mb-5">How It Works</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center shrink-0">
                  <span className="text-brand-orange text-xs font-bold">{item.step}</span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── LEFT: Gallery ── */}
          <div>
            <div className="hidden lg:block mb-4">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Your Trophy, Miniaturized</span>
              <h1 className="text-3xl font-bold text-white mt-1">Mini Mount Replica</h1>
              <p className="text-white/50 text-sm mt-2">
                Turn your trophy into a stunning 3D-printed miniature replica. Each piece is meticulously crafted to match your deer&apos;s unique rack and hand-painted by skilled artists for lifelike detail. The ultimate keepsake for your desk, shelf, or trophy room.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-square mb-3 relative">
              <img
                src={GALLERY[activePhoto]}
                alt="Mini mount replica"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                Sold Out
              </div>
            </div>

            {/* Only show thumbnail strip when there are multiple photos */}
            {GALLERY.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {GALLERY.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`rounded-lg overflow-hidden border-2 transition-all aspect-square ${
                      activePhoto === i ? "border-brand-orange" : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img src={src} alt={`View ${i+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Config + Waitlist ── */}
          <div>
            <div className="lg:hidden mb-6">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Your Trophy, Miniaturized</span>
              <h1 className="text-2xl font-bold text-white mt-1">Mini Mount Replica</h1>
              <p className="text-white/50 text-sm mt-1">
                Turn your trophy into a stunning 3D-printed miniature replica, hand-painted for lifelike detail.
              </p>
            </div>

            {/* Options (shown greyed-out since sold out) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6 opacity-60 pointer-events-none mb-6">
              <h2 className="text-white font-bold text-lg">Mount Style</h2>
              <div className="space-y-3">
                {MOUNT_STYLES.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMountStyle(m.id)}
                    className={`w-full flex items-center justify-between rounded-xl border-2 px-4 py-3 text-sm transition-all ${
                      mountStyle === m.id
                        ? "border-brand-orange bg-brand-orange/10 text-white"
                        : "border-white/15 text-white/50"
                    }`}
                  >
                    <div className="text-left">
                      <span className="font-semibold">{m.label}</span>
                      <span className="block text-xs text-white/40 mt-0.5">{m.desc}</span>
                    </div>
                    <span className={`font-bold text-sm shrink-0 ml-4 ${mountStyle === m.id ? "text-brand-orange" : "text-white/40"}`}>
                      {m.price === 0 ? "Included" : `+$${m.price}`}
                    </span>
                  </button>
                ))}
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {SIZES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSize(s.id)}
                      className={`flex flex-col items-center rounded-xl border-2 px-3 py-3 text-sm transition-all ${
                        size === s.id
                          ? "border-brand-orange bg-brand-orange/10 text-white"
                          : "border-white/15 text-white/50"
                      }`}
                    >
                      <span className="font-bold text-base">{s.inches}</span>
                      <span className="font-semibold text-xs mt-0.5">{s.label}</span>
                      <span className={`text-xs mt-1 ${size === s.id ? "text-brand-orange" : "text-white/30"}`}>${s.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-white/60">
                  <span>{SIZES.find(s => s.id === size)!.label} ({SIZES.find(s => s.id === size)!.inches})</span>
                  <span>${basePrice}</span>
                </div>
                {styleAdd > 0 && (
                  <div className="flex justify-between text-sm text-white/60">
                    <span>{MOUNT_STYLES.find(m => m.id === mountStyle)!.label} Upgrade</span>
                    <span>+${styleAdd}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-white/60">
                  <span>Shipping</span>
                  <span>$9.95</span>
                </div>
                <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-1">Get Notified When Available</h3>
              <p className="text-white/40 text-sm mb-5">Be the first to know when Mini Mounts come back in stock.</p>

              {submitted ? (
                <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl px-5 py-4 text-center">
                  <div className="text-brand-orange text-2xl mb-2">✓</div>
                  <p className="text-white font-semibold">You&apos;re on the list!</p>
                  <p className="text-white/50 text-sm mt-1">We&apos;ll email you as soon as Mini Mounts are back in stock.</p>
                </div>
              ) : (
                <form onSubmit={handleNotify} className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Name <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={notifyName}
                      onChange={(e) => setNotifyName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Email <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={notifyPhone}
                      onChange={(e) => setNotifyPhone(e.target.value)}
                      placeholder="Optional — for SMS alerts"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl py-3.5 text-sm transition-colors"
                  >
                    Notify Me When Available →
                  </button>
                </form>
              )}
            </div>

            {/* What's Included */}
            <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">What&apos;s Included</p>
              <ul className="space-y-2">
                {[
                  "Custom 3D-printed replica from your photos",
                  "Hand-painted realistic finish",
                  "Premium display stand",
                  "Protective gift box packaging",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="text-brand-orange text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
