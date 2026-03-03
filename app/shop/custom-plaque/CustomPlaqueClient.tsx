"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

// ─── STATE → PHOTO MAPPING ────────────────────────────────────────────────────
// Photos hosted on rackline.ai/assets — use state-specific when available,
// fall back to the Ohio generic for all others.
const STATE_PHOTOS: Record<string, string> = {
  "Kentucky":       "https://rackline.ai/assets/KY-6XDSNhV0.png",
  "Ohio":           "https://rackline.ai/assets/OH_1765828107808-DVhAKF8x.png",
  "Texas":          "https://rackline.ai/assets/Texas_1765828107808-Bp-qiWSz.png",
  "United States":  "https://rackline.ai/assets/United_States_1765828107807-ChLLZRJg.png",
  "Tattered Flag":  "https://rackline.ai/assets/Flag_1765828107808-DNjIkCTx.png",
};
const DEFAULT_PHOTO = "https://rackline.ai/assets/OH_1765828107808-DVhAKF8x.png";

// Lifestyle gallery photos (shown as secondary thumbnails)
const GALLERY_PHOTOS = [
  { src: "https://rackline.ai/assets/KY-6XDSNhV0.png",                              label: "Kentucky" },
  { src: "https://rackline.ai/assets/United_States_1765828107807-ChLLZRJg.png",      label: "United States" },
  { src: "https://rackline.ai/assets/Texas_1765828107808-Bp-qiWSz.png",              label: "Texas" },
  { src: "https://rackline.ai/assets/OH_1765828107808-DVhAKF8x.png",                 label: "Ohio" },
  { src: "https://rackline.ai/assets/Flag_1765828107808-DNjIkCTx.png",               label: "Flag" },
  { src: "https://rackline.ai/assets/3714919565277484524_1765831139008-BF5xKQiC.jpg", label: "Lifestyle 1" },
  { src: "https://rackline.ai/assets/3185433670372043149_1765831267805-DbcsWNQx.jpg", label: "Lifestyle 2" },
  { src: "https://rackline.ai/assets/3960944527855219634_1765831279549-BeXfKxYs.jpg", label: "Lifestyle 3" },
  { src: "https://rackline.ai/assets/8823482900351479239_1765831282915-DNUjdKM9.jpg", label: "Lifestyle 4" },
  { src: "https://rackline.ai/assets/1953692906623179131_1765831264223-CQK9jJ6j.jpg", label: "Lifestyle 5" },
];

const STATES = [
  "United States", "Tattered Flag",
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Michigan + UP",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
  "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
  "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

const FINISHES = ["American Flag (Pine)"];

type MountType = "euro" | "shoulder";
type HardwareType = "basic" | "swivel";

export default function CustomPlaqueClient() {
  const [selectedState, setSelectedState] = useState<string>("");
  const [mount, setMount] = useState<MountType>("euro");
  const [finish, setFinish] = useState<string>("");
  const [hardware, setHardware] = useState<HardwareType>("basic");
  const [engraving, setEngraving] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dynamic main photo: follows state selection, otherwise gallery index
  const statePhoto = selectedState
    ? (STATE_PHOTOS[selectedState] ?? DEFAULT_PHOTO)
    : null;

  const currentPhoto = statePhoto ?? GALLERY_PHOTOS[activePhoto].src;

  // Price calc
  const price = useMemo(() => {
    let total = 79;
    if (mount === "shoulder") total += 25;
    if (hardware === "swivel") total += 10;
    if (engraving) total += 20;
    return total;
  }, [mount, hardware, engraving]);

  const canCheckout = selectedState !== "" && finish !== "";

  async function handleCheckout() {
    if (!canCheckout) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: "Custom Wooden Plaque",
          state: selectedState,
          mount,
          finish,
          hardware,
          engraving,
          price,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to connect to checkout. Please try again.");
    } finally {
      setLoading(false);
    }
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

      {/* Product Details Banner */}
      <div className="bg-brand-green/20 border-b border-white/10 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
            <p className="text-white font-semibold text-sm">Product Details</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <span className="text-brand-orange shrink-0 mt-0.5">✓</span>
                Plaques are cut from 12"×16" pine boards. Finished sizes vary based on the shape of the state you select.
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <span className="text-brand-orange shrink-0 mt-0.5">✓</span>
                Kit includes: plaque, (2) 3" screws, and a metal bracket. Some assembly required!
              </li>
              <li className="flex items-start gap-2 text-amber-400 text-sm">
                <span className="shrink-0 mt-0.5">⚠</span>
                Michigan orders: Select "Michigan + UP" if you want the Upper Peninsula included. Selecting "Michigan" only will ship WITHOUT the UP!
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── LEFT: Image Gallery ── */}
          <div>
            {/* Category + title above image on mobile */}
            <div className="mb-4 lg:hidden">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Custom State Plaques</span>
              <h1 className="text-2xl font-bold text-white mt-1">Custom Wooden Plaque</h1>
              <p className="text-white/50 text-sm mt-1">
                You scored it. You saved it. You shared it. Now preserve it forever with a handcrafted wooden plaque laser-cut to your state's silhouette.
              </p>
            </div>

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-square mb-3">
              <img
                src={currentPhoto}
                alt={selectedState ? `${selectedState} plaque` : "Custom state plaque"}
                className="w-full h-full object-contain p-4"
              />
              {selectedState && (
                <div className="absolute bottom-3 left-3 bg-black/70 border border-white/10 rounded-lg px-2.5 py-1">
                  <span className="text-white/70 text-xs">{selectedState}</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2">
              {GALLERY_PHOTOS.slice(0, 10).map((photo, i) => (
                <button
                  key={i}
                  onClick={() => { setActivePhoto(i); setSelectedState(""); }}
                  className={`rounded-lg overflow-hidden border-2 transition-all aspect-square ${
                    !statePhoto && activePhoto === i
                      ? "border-brand-orange"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <img src={photo.src} alt={photo.label} className="w-full h-full object-contain bg-white/5 p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Product Config + Checkout ── */}
          <div>
            {/* Title (desktop) */}
            <div className="hidden lg:block mb-6">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Custom State Plaques</span>
              <h1 className="text-3xl font-bold text-white mt-1">Custom Wooden Plaque</h1>
              <p className="text-white/50 text-sm mt-2">
                You scored it. You saved it. You shared it. Now preserve it forever with a handcrafted wooden plaque laser-cut to your state's silhouette.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
              <h2 className="text-white font-bold text-lg">Customize Your Plaque</h2>

              {/* State */}
              <div>
                <label className="block text-white/70 text-sm font-semibold mb-2">
                  State <span className="text-brand-orange">*</span>
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-brand-orange transition-colors"
                >
                  <option value="" disabled className="bg-brand-dark">Select a state</option>
                  {STATES.map((s) => (
                    <option key={s} value={s} className="bg-brand-dark">{s}</option>
                  ))}
                </select>
                {selectedState && STATE_PHOTOS[selectedState] && (
                  <p className="text-brand-orange text-xs mt-1.5 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Preview updated →
                  </p>
                )}
              </div>

              {/* Size / Mount Type */}
              <div>
                <label className="block text-white/70 text-sm font-semibold mb-2">
                  Size <span className="text-brand-orange">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {([ ["euro", "Euro Mount", "$79.00"], ["shoulder", "Shoulder Mount", "+$25"] ] as const).map(([val, label, note]) => (
                    <button
                      key={val}
                      onClick={() => setMount(val)}
                      className={`flex flex-col items-center gap-1 rounded-xl border-2 px-4 py-3 transition-all text-sm font-semibold ${
                        mount === val
                          ? "border-brand-orange bg-brand-orange/10 text-white"
                          : "border-white/15 bg-white/5 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {label}
                      <span className={`text-xs font-normal ${mount === val ? "text-brand-orange" : "text-white/40"}`}>{note}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish */}
              <div>
                <label className="block text-white/70 text-sm font-semibold mb-2">
                  Finish <span className="text-brand-orange">*</span>
                </label>
                <select
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-brand-orange transition-colors"
                >
                  <option value="" disabled className="bg-brand-dark">Select a finish</option>
                  {FINISHES.map((f) => (
                    <option key={f} value={f} className="bg-brand-dark">{f}</option>
                  ))}
                </select>
              </div>

              {/* Hardware */}
              <div>
                <label className="block text-white/70 text-sm font-semibold mb-2">
                  Hardware <span className="text-brand-orange">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {([ ["basic", "Basic Bracket", "Included"], ["swivel", "Metal Swivel", "+$10"] ] as const).map(([val, label, note]) => (
                    <button
                      key={val}
                      onClick={() => setHardware(val)}
                      className={`flex flex-col items-center gap-1 rounded-xl border-2 px-4 py-3 transition-all text-sm font-semibold ${
                        hardware === val
                          ? "border-brand-orange bg-brand-orange/10 text-white"
                          : "border-white/15 bg-white/5 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {label}
                      <span className={`text-xs font-normal ${hardware === val ? "text-brand-orange" : "text-white/40"}`}>{note}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Engraving toggle */}
              <div className="flex items-center justify-between py-3 border-t border-white/10">
                <div>
                  <p className="text-white/80 text-sm font-semibold">Custom Engraving</p>
                  <p className="text-white/40 text-xs mt-0.5">Add personalized details (+$20)</p>
                </div>
                <button
                  onClick={() => setEngraving(!engraving)}
                  className={`relative w-11 h-6 rounded-full transition-colors focus:outline-none ${engraving ? "bg-brand-orange" : "bg-white/20"}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${engraving ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>

              {/* Price summary */}
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-white/60">
                  <span>Base Price ({mount === "euro" ? "Euro Mount" : "Shoulder Mount"})</span>
                  <span>${mount === "euro" ? "79.00" : "104.00"}</span>
                </div>
                {hardware === "swivel" && (
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Metal Swivel Upgrade</span>
                    <span>$10.00</span>
                  </div>
                )}
                {engraving && (
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Custom Engraving</span>
                    <span>$20.00</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-white/60">
                  <span>Shipping</span>
                  <span className="text-brand-orange font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span>${price}.00</span>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* CTA */}
              <button
                onClick={handleCheckout}
                disabled={!canCheckout || loading}
                className={`w-full flex items-center justify-center gap-2 rounded-xl py-4 font-bold text-sm transition-all ${
                  canCheckout && !loading
                    ? "bg-brand-orange hover:bg-brand-orange/90 text-white cursor-pointer"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Redirecting to checkout...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    {canCheckout ? "Proceed to Checkout" : "Select State & Finish to Continue"}
                  </>
                )}
              </button>

              <p className="text-center text-white/30 text-xs flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                Secure Checkout · Powered by Stripe
              </p>
            </div>

            {/* Handcrafted quality note */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: "🪵", label: "Handcrafted", sub: "Premium pine boards" },
                { icon: "🚚", label: "Free Shipping", sub: "Every order" },
                { icon: "⭐", label: "Made in USA", sub: "Hunter-owned" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-xl mb-1">{item.icon}</div>
                  <div className="text-white text-xs font-semibold">{item.label}</div>
                  <div className="text-white/40 text-xs mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
