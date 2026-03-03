import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Download rackline.ai — Free AI Deer Scoring App for iOS & Android",
  description:
    "Download rackline.ai free on iOS and Android. Score any whitetail deer from a photo in under 30 seconds. Boone & Crockett estimates, age predictions, and growth projections.",
};

const IOS_URL     = "https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.racklineai.assistant";

export default function DownloadPage() {
  return (
    <>
      <section className="bg-brand-dark py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-dark to-black opacity-90" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-6">🦌</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Download rackline.ai
            <span className="text-brand-orange block">Free on iOS &amp; Android</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Score any whitetail deer from a photo in under 30 seconds. Join 25,000+ hunters who score smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            {/* iOS */}
            <a
              href={IOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white text-brand-dark rounded-2xl px-8 py-5 hover:bg-brand-cream transition-colors shadow-xl min-w-[220px] justify-center"
            >
              <svg className="w-10 h-10 text-brand-dark shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500 leading-none">Download on the</div>
                <div className="text-xl font-bold leading-tight">App Store</div>
              </div>
            </a>

            {/* Android */}
            <a
              href={ANDROID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white text-brand-dark rounded-2xl px-8 py-5 hover:bg-brand-cream transition-colors shadow-xl min-w-[220px] justify-center"
            >
              <svg className="w-10 h-10 text-brand-dark shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.22.99.14l12.2-7.05-2.55-2.55L3.18 23.76zm16.31-10.03L17.1 12l2.39-1.73-2.18-3.77-2.73 1.57c-.57-.44-1.2-.79-1.88-1.03L12.35 4h-4.3l-.35 3.04c-.68.24-1.31.59-1.88 1.03L3.09 6.5.91 10.27 3.3 12l-2.39 1.73 2.18 3.77 2.73-1.57c.57.44 1.2.79 1.88 1.03L7.95 20h4.3l.35-3.04c.68-.24 1.31-.59 1.88-1.03l2.73 1.57 2.28-3.77zM10.18 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500 leading-none">Get it on</div>
                <div className="text-xl font-bold leading-tight">Google Play</div>
              </div>
            </a>
          </div>

          <p className="text-white/40 text-sm">Free to download · No credit card required</p>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-12">What You Get With rackline.ai</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📸", title: "AI Photo Scoring", desc: "Any photo — trail cam, live, velvet, shed. Score it all instantly." },
              { icon: "🎯", title: "B&C Score Estimate", desc: "Gross and net Boone & Crockett score in under 30 seconds." },
              { icon: "📅", title: "Deer Age Prediction", desc: "Know if he's a 2-year-old or a 5-year-old before pulling the trigger." },
              { icon: "📈", title: "Growth Projections", desc: "See what he could score next season. Make smarter let-him-walk decisions." },
              { icon: "💾", title: "Save Every Buck", desc: "Your personal deer history. Every buck you've ever scored, saved forever." },
              { icon: "🤝", title: "Community Feed", desc: "Share your best scores. See what other hunters are scoring across the country." },
            ].map((f) => (
              <div key={f.title} className="card text-center">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-brand-green mb-2">{f.title}</h3>
                <p className="text-brand-gray text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-xl mx-auto">
          <EmailCapture
            variant="dark"
            headline="Not Ready to Download Yet?"
            subtext="Get weekly deer scoring tips + early access to new features. Join free."
          />
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-green mb-8">Learn More Before You Download</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <Link href="/blog/how-to-score-a-deer" className="card hover:shadow-md transition-shadow cursor-pointer text-left">
              <div className="text-2xl mb-2">📖</div>
              <h3 className="font-bold text-brand-green mb-1 text-sm">How to Score a Deer</h3>
              <p className="text-gray-400 text-xs">Complete B&C guide</p>
            </Link>
            <Link href="/deer-score-calculator" className="card hover:shadow-md transition-shadow cursor-pointer text-left">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-bold text-brand-green mb-1 text-sm">Free Score Calculator</h3>
              <p className="text-gray-400 text-xs">Enter measurements manually</p>
            </Link>
            <Link href="/for-outfitters" className="card hover:shadow-md transition-shadow cursor-pointer text-left">
              <div className="text-2xl mb-2">🏕️</div>
              <h3 className="font-bold text-brand-green mb-1 text-sm">For Outfitters</h3>
              <p className="text-gray-400 text-xs">Score clients' deer at camp</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
