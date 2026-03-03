import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import EmailCapture from "@/components/EmailCapture";
import TrophyCarousel from "@/components/TrophyCarousel";

export const metadata: Metadata = {
  title: "rackline.ai — AI Whitetail Deer Scoring App | Score Any Buck From a Photo",
  description:
    "Score any whitetail instantly with AI. Get Boone & Crockett estimates, deer age predictions & growth projections from a single photo. Used by 25,000+ hunters. Free on iOS & Android.",
};

// ─── SVG ICON SET ────────────────────────────────────────────────────────────
const Icon = {
  Camera: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  ),
  Brain: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  Calendar: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  TrendUp: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  Trophy: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  ),
  Share: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  ),
  Map: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
  Wood: () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  Apple: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  ),
  Android: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341a.5.5 0 01-.5.5H6.977a.5.5 0 01-.5-.5V9.5a.5.5 0 01.5-.5h10.046a.5.5 0 01.5.5v5.841zm-9.046-8.5a.5.5 0 110-1 .5.5 0 010 1zm5.046 0a.5.5 0 110-1 .5.5 0 010 1zM4.5 9a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3A.5.5 0 004.5 9zm15 0a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zM8.08 5.5L6.77 3.24a.25.25 0 01.43-.25L8.55 5.29A7.5 7.5 0 0112 4.5c1.26 0 2.44.31 3.45.84l1.35-2.35a.25.25 0 01.43.25L15.92 5.5A7.5 7.5 0 0119.5 12h-15A7.5 7.5 0 018.08 5.5z"/>
    </svg>
  ),
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const features = [
  {
    Icon: Icon.Camera,
    title: "Snap or Upload Any Photo",
    description:
      "Trail cam image, live buck on the hoof, or trophy photo — rackline.ai scores them all. No special setup required.",
  },
  {
    Icon: Icon.Brain,
    title: "Instant AI Buck Scoring",
    description:
      "Get a Boone & Crockett estimate in seconds. Our AI measures antler spread, tine length, beam circumference and more from a single image.",
  },
  {
    Icon: Icon.Calendar,
    title: "Age Estimation",
    description:
      "Know if the deer is a shooter before you pull the trigger. AI-powered age estimates from body characteristics and antler development.",
  },
  {
    Icon: Icon.TrendUp,
    title: "Growth Projections",
    description:
      "See what a buck could score next season. Understand his full potential before making a harvest decision.",
  },
  {
    Icon: Icon.Trophy,
    title: "Save & Track Every Buck",
    description:
      "Build your personal trophy room. Every buck you score is saved with its score, age, and photo in your history.",
  },
  {
    Icon: Icon.Map,
    title: "Trophy Heatmap",
    description:
      "See where giants are being harvested. State and county trophy maps built from 125,000+ real rackline.ai scores.",
  },
];

const stats = [
  { value: "25,000+",  label: "Hunters Using rackline" },
  { value: "125,000+", label: "Bucks Scored" },
  { value: "500K+",    label: "Monthly Impressions" },
  { value: "< 30 sec", label: "Average Score Time" },
];

const steps = [
  { step: "01", title: "Open the app", description: "Free on iOS and Android. No account required to try your first score." },
  { step: "02", title: "Upload or snap a photo", description: "Any clear photo works — trail cam, binoculars, phone camera, or a photo on your wall." },
  { step: "03", title: "Get your B&C score", description: "AI analyzes antler structure in seconds and returns a Boone & Crockett estimate with age and growth projection." },
];

const testimonials = [
  {
    quote: "Finally an app that actually measures the rack instead of just guessing. Saved me from passing on a 140\" deer thinking he was only 120\".",
    author: "Tyler M.",
    detail: "Iowa whitetail hunter",
  },
  {
    quote: "I use it on every trail cam pic before making any harvest decisions. My buck management program has never been better.",
    author: "Jason K.",
    detail: "Texas Hill Country rancher",
  },
  {
    quote: "The age estimator is scary accurate. Helped me let a 2.5-year-old walk that grew into a 160\" buck two seasons later.",
    author: "Derek S.",
    detail: "Wisconsin deer manager",
  },
];

const faqs = [
  {
    q: "How accurate is the AI deer scoring?",
    a: "rackline.ai uses computer vision trained on thousands of scored whitetail deer. Results are estimates — scoring from photos always has some variance — but most users find our AI scores within 5-10% of a professional hand measurement. It's the fastest way to get a ballpark B&C score from any photo.",
  },
  {
    q: "Does it work with trail cam photos?",
    a: "Yes. Trail cam photos are one of the most common use cases. For best results, use a clear broadside or 3/4 face-on photo where both antlers are visible. Nighttime infrared images work but may have slightly lower accuracy.",
  },
  {
    q: "Is rackline.ai free?",
    a: "The app is free to download and includes a set number of free scores to get started. A Pro subscription unlocks unlimited scoring, priority processing, and advanced growth projection features.",
  },
  {
    q: "What scoring system does rackline.ai use?",
    a: "rackline.ai estimates Boone & Crockett (B&C) scores — the most widely recognized whitetail scoring system in North America. It measures typical and non-typical antler characteristics including main beam length, tine lengths, spread, and mass measurements.",
  },
  {
    q: "Can I use it to score shed antlers?",
    a: "Yes — place the shed on a flat surface with a reference object (like a standard tape measure) for the most accurate result. The AI will estimate the score for that side and provide a projected full-rack score.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-dark to-black opacity-90" />
        {/* Subtle terrain texture overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #D4521A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1B4332 0%, transparent 50%)" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              AI Deer Scoring · Free to Try
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              AI Whitetail Deer Scoring —
              <span className="text-brand-orange"> B&C Score From Any Photo</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              Upload any deer photo and get an instant Boone &amp; Crockett score estimate, deer age prediction, and growth projection. No tape measure. No guessing. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-brand-dark font-bold rounded-xl py-4 px-8 hover:bg-brand-cream transition-colors"
              >
                <Icon.Apple />
                <span>
                  <span className="text-xs font-normal block leading-none opacity-70">Download on the</span>
                  App Store
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.racklineai.assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl py-4 px-8 hover:bg-white/20 transition-colors"
              >
                <Icon.Android />
                <span>
                  <span className="text-xs font-normal block leading-none opacity-70">Get it on</span>
                  Google Play
                </span>
              </a>
            </div>
            {/* Social proof strip */}
            <div className="flex items-center gap-6 text-white/40 text-sm">
              <span>Trusted by 25,000+ hunters</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>125,000+ bucks scored</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Free to start</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-brand-orange">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-white/80 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TROPHY CAROUSEL ── */}
      <TrophyCarousel />

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">How It Works</span>
            <h2 className="section-heading mb-4">Score Any Deer in Under 30 Seconds</h2>
            <p className="section-subheading">
              No tape measure. No scoring sheets. Just snap a photo and let our AI do the work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {steps.map((s) => (
              <div key={s.step} className="card group hover:border-brand-orange/30 transition-colors">
                <div className="text-5xl font-bold text-brand-green/10 group-hover:text-brand-orange/20 transition-colors mb-3 font-mono">
                  {s.step}
                </div>
                <h3 className="font-bold text-brand-green text-lg mb-2">{s.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          {/* Calculator CTA */}
          <div className="bg-brand-cream rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-brand-cream-dark">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">Free Tool</span>
              <h3 className="text-2xl font-bold text-brand-green mb-3">The Free B&C Score Calculator</h3>
              <p className="text-brand-gray leading-relaxed mb-5">
                Not ready for the app yet? Try our free online Boone &amp; Crockett scoring calculator. Enter measurements manually and get a gross and net score instantly.
              </p>
              <Link href="/deer-score-calculator" className="btn-primary">
                Try the Free Calculator →
              </Link>
            </div>
            <div className="w-24 h-24 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
              <Icon.Trophy />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Score Smarter</h2>
            <p className="text-white/60">
              rackline.ai isn&apos;t just a scoring app — it&apos;s your complete whitetail intelligence tool.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-brand-orange/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-brand-green/30 text-brand-orange flex items-center justify-center mb-5 group-hover:bg-brand-orange/20 transition-colors">
                  <f.Icon />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TROPHY MAP TEASER ── */}
      <section className="py-20 px-4 bg-brand-green">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">New Feature</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Where Are the Giants Being Harvested?
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                125,000+ bucks scored through rackline.ai — now visualized on an interactive state and county heatmap. See which states are producing the most trophy deer, average B&C scores by county, and where the best hunting ground in America really is.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                All data sourced from verified public trophy room entries. Updated in real time as hunters score their bucks.
              </p>
              <Link href="/trophy-map" className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold rounded-xl py-4 px-8 hover:bg-brand-orange/90 transition-colors">
                <Icon.Map />
                Explore the Trophy Map
              </Link>
            </div>
            {/* Map preview mockup */}
            <div className="bg-brand-dark/60 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-5">
                <span className="text-white font-semibold text-sm">Trophy Heatmap — USA</span>
                <span className="text-brand-orange text-xs font-semibold uppercase tracking-wide">Live Data</span>
              </div>
              {/* Simplified US map mockup */}
              <div className="relative bg-brand-dark rounded-xl p-4 mb-4 overflow-hidden">
                <svg viewBox="0 0 400 240" className="w-full opacity-90">
                  {/* Background */}
                  <rect width="400" height="240" fill="#0D1B0F" />
                  {/* Simplified state blocks - purely decorative representation */}
                  {[
                    { x:40,y:40,w:55,h:40,o:0.3 },{ x:100,y:35,w:50,h:45,o:0.5 },{ x:155,y:30,w:55,h:50,o:0.8 },{ x:215,y:25,w:50,h:55,o:0.6 },{ x:270,y:30,w:60,h:45,o:0.4 },
                    { x:35,y:85,w:60,h:40,o:0.4 },{ x:100,y:85,w:50,h:40,o:0.7 },{ x:155,y:85,w:55,h:40,o:1.0 },{ x:215,y:85,w:50,h:40,o:0.9 },{ x:270,y:78,w:60,h:42,o:0.5 },
                    { x:35,y:130,w:60,h:38,o:0.2 },{ x:100,y:130,w:50,h:38,o:0.6 },{ x:155,y:130,w:55,h:38,o:0.8 },{ x:215,y:130,w:50,h:38,o:0.7 },{ x:270,y:125,w:60,h:38,o:0.3 },
                    { x:50,y:173,w:55,h:35,o:0.1 },{ x:110,y:173,w:50,h:35,o:0.4 },{ x:165,y:173,w:55,h:35,o:0.6 },{ x:225,y:173,w:50,h:35,o:0.5 },{ x:280,y:168,w:55,h:35,o:0.2 },
                  ].map((r, i) => (
                    <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} rx="3"
                      fill={`rgba(212,82,26,${r.o})`} stroke="rgba(13,27,15,0.8)" strokeWidth="1.5" />
                  ))}
                </svg>
                {/* Legend */}
                <div className="absolute bottom-6 right-6 flex items-center gap-1">
                  <span className="text-white/40 text-xs mr-1">Low</span>
                  {[0.1,0.3,0.5,0.7,1.0].map((o, i) => (
                    <div key={i} className="w-4 h-4 rounded" style={{ backgroundColor: `rgba(212,82,26,${o})` }} />
                  ))}
                  <span className="text-white/40 text-xs ml-1">High</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Iowa", score: "164.2\"", count: "2,841" },
                  { label: "Illinois", score: "158.7\"", count: "2,214" },
                  { label: "Kansas", score: "162.1\"", count: "1,987" },
                ].map((d) => (
                  <div key={d.label} className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-sm">{d.label}</div>
                    <div className="text-brand-orange text-xs font-semibold">{d.score} avg</div>
                    <div className="text-white/40 text-xs">{d.count} bucks</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAIL CAM ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Trail Cam Scoring</span>
              <h2 className="section-heading mb-4">Score Trail Cam Photos Instantly</h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                You get hundreds of trail cam photos every season. rackline.ai lets you score every one of them — no setup, no spreadsheets, no tape measure. Just drop the photo in and know if he&apos;s a shooter before the season opens.
              </p>
              <p className="text-brand-gray leading-relaxed mb-6">
                Night photos, daytime photos, velvet, hard horn — our AI handles them all. Make smarter harvest decisions with actual data instead of gut feelings.
              </p>
              <Link href="/blog" className="text-brand-green font-semibold hover:text-brand-orange transition-colors text-sm">
                Learn how trail cam scoring works →
              </Link>
            </div>
            <div className="bg-brand-dark rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-green/30 text-brand-orange flex items-center justify-center">
                  <Icon.Camera />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Trail Cam Photo</div>
                  <div className="text-white/40 text-xs">Processing complete</div>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              </div>
              <div className="bg-brand-green/20 border border-brand-green/30 rounded-xl p-5">
                <div className="text-white/50 text-xs uppercase tracking-wider mb-4 font-semibold">AI Score Results</div>
                <div className="space-y-3">
                  {[
                    { label: "Gross B&C Score", value: "148 4/8\"", highlight: true },
                    { label: "Net Score (est.)", value: "144 2/8\"" },
                    { label: "Estimated Age", value: "4.5 years" },
                    { label: "Next Season Projection", value: "157–165\"", highlight: true },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">{row.label}</span>
                      <span className={`font-bold text-sm ${row.highlight ? "text-brand-orange" : "text-white"}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-4 bg-brand-green">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What Hunters Are Saying</h2>
            <p className="text-white/60">25,000+ hunters trust rackline.ai to make smarter deer management decisions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-orange/30 transition-colors">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-5 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.author}</div>
                  <div className="text-white/40 text-xs">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-6">Built by Hunters, For Hunters</span>
          <h2 className="section-heading mb-5">The rackline Story</h2>
          <p className="text-brand-gray leading-relaxed mb-5">
            rackline.ai was built because every hunter knows the frustration: you get a trail cam photo of a giant buck and have no idea what he scores. Tape measures, scoring charts, and guesswork — it never felt right for the 21st century.
          </p>
          <p className="text-brand-gray leading-relaxed mb-5">
            So we built the tool we always wanted. A photo in, a score out. AI that actually understands antler structure, not just pixel counts. Deer age from body characteristics. Growth projections based on real whitetail biology.
          </p>
          <p className="text-brand-gray leading-relaxed mb-8 font-semibold text-brand-green">
            125,000 bucks scored later — we think we got it right.
          </p>
          <p className="text-sm text-brand-gray">— Nate Jewell, Founder · rackline.ai</p>
        </div>
      </section>

      {/* ── SHOP CTA ── */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
            <Icon.Wood />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-brand-green mb-2">Memorialize Your Best Buck</h2>
            <p className="text-brand-gray mb-4">
              Custom laser-engraved wooden antler plaques starting at $79. Free shipping. The perfect way to display your biggest score.
            </p>
            <a href="https://rackline.ai/shop" className="btn-primary">Shop Plaques →</a>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ── */}
      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-2xl mx-auto">
          <EmailCapture
            variant="dark"
            headline="Get Weekly Buck Scoring Tips"
            subtext="Season prep, AI scoring tips, and early access to new features. Join 25,000+ hunters."
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">FAQ</span>
            <h2 className="section-heading">Common Questions About rackline.ai</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-100 rounded-2xl p-6 hover:border-brand-green/20 transition-colors">
                <h3 className="font-bold text-brand-green mb-2">{faq.q}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-brand-gray">
            More questions?{" "}
            <a href="mailto:nate@rackline.ai" className="text-brand-green font-semibold hover:underline">Contact us directly</a>
          </p>
        </div>
      </section>

      {/* ── APP DOWNLOAD CTA ── */}
      <AppDownloadCTA
        headline="Ready to Score Your Bucks With AI?"
        subtext="Free on iOS and Android. Join 25,000+ hunters who score smarter."
        variant="green"
      />

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}} />
    </>
  );
}
