import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "rackline.ai — AI Whitetail Deer Scoring App | Score Any Buck From a Photo",
  description:
    "Score any whitetail instantly with AI. Get Boone & Crockett estimates, deer age predictions & growth projections from a single photo. Used by 25,000+ hunters. Free on iOS & Android.",
};

const features = [
  {
    icon: "📸",
    title: "Snap or Upload Any Photo",
    description:
      "Trail cam image, live buck on the hoof, or trophy photo — rackline.ai scores them all. No special setup required.",
  },
  {
    icon: "🤖",
    title: "Instant AI Buck Scoring",
    description:
      "Get a Boone & Crockett estimate in seconds. Our AI measures antler spread, tine length, beam circumference and more from a single image.",
  },
  {
    icon: "📅",
    title: "Age Estimation",
    description:
      "Know if the deer is a shooter before you pull the trigger. AI-powered age estimates from body characteristics and antler development.",
  },
  {
    icon: "📈",
    title: "Growth Projections",
    description:
      "See what a buck could score next season. Understand his full potential before making a harvest decision.",
  },
  {
    icon: "🏆",
    title: "Save & Track Every Buck",
    description:
      "Build your personal trophy room. Every buck you score is saved with its score, age, and photo in your history.",
  },
  {
    icon: "📤",
    title: "Share Trophy Scores",
    description:
      "Post to the rackline community feed. Show off your season's best bucks with verified AI scores.",
  },
];

const stats = [
  { value: "25,000+",   label: "Hunters Using rackline" },
  { value: "125,000+",  label: "Bucks Scored" },
  { value: "500K+",     label: "Monthly Impressions" },
  { value: "< 30 sec",  label: "Average Score Time" },
];

const steps = [
  { step: "1", title: "Open the app", description: "Free on iOS and Android. No account required to try your first score." },
  { step: "2", title: "Upload or snap a photo", description: "Any clear photo works — trail cam, binoculars, phone camera, or a photo on your wall." },
  { step: "3", title: "Get your B&C score", description: "AI analyzes antler structure in seconds and returns a Boone & Crockett estimate with age and growth projection." },
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

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-brand-dark overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-dark to-black opacity-90" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="badge bg-brand-orange text-white mb-6">
              AI Deer Scoring · Free to Try
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              AI Whitetail Deer Scoring —
              <span className="text-brand-orange"> B&C Score From Any Photo</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Upload any deer photo and get an instant Boone &amp; Crockett score estimate, deer age prediction, and growth projection. No tape measure. No guessing. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 px-8"
              >
                📱 Download Free — iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.racklineai.assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-base py-4 px-8"
              >
                🤖 Download Free — Android
              </a>
            </div>
            <p className="text-white/40 text-sm">
              Trusted by 25,000+ hunters · 125,000+ bucks scored
            </p>
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

      {/* ── WHAT IS RACKLINE ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="badge bg-brand-cream-dark text-brand-green mb-4">How It Works</span>
            <h2 className="section-heading mb-4">
              Score Any Deer in Under 30 Seconds
            </h2>
            <p className="section-subheading mb-10">
              No tape measure. No scoring sheets. Just snap a photo and let our AI do the work — the same way it&apos;s been done for 25,000 hunters across North America.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {steps.map((s) => (
              <div key={s.step} className="card">
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-brand-green text-lg mb-2">{s.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-cream rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-brand-green mb-3">
                The Free B&C Score Calculator
              </h3>
              <p className="text-brand-gray leading-relaxed mb-5">
                Not ready for the app yet? Try our free online Boone &amp; Crockett scoring calculator. Enter your measurements manually and get a gross and net score instantly.
              </p>
              <Link href="/deer-score-calculator" className="btn-primary">
                Try the Free Calculator →
              </Link>
            </div>
            <div className="text-8xl">🦌</div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge bg-brand-green text-white mb-4">Features</span>
            <h2 className="section-heading">Everything You Need to Score Smarter</h2>
            <p className="section-subheading">
              rackline.ai isn&apos;t just a scoring app — it&apos;s your complete whitetail intelligence tool.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-brand-green text-lg mb-2">{f.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES (TRAIL CAM) ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-brand-cream-dark text-brand-green mb-4">Trail Cam Scoring</span>
              <h2 className="section-heading mb-4">
                Score Trail Cam Photos Instantly
              </h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                You get hundreds of trail cam photos every season. rackline.ai lets you score every one of them — no setup, no spreadsheets, no tape measure. Just drop the photo in and know if he&apos;s a shooter before the season opens.
              </p>
              <p className="text-brand-gray leading-relaxed mb-6">
                Night photos, daytime photos, velvet, hard horn — our AI handles them all. Make smarter harvest decisions with actual data instead of gut feelings.
              </p>
              <Link href="/blog/trail-cam-deer-scoring" className="text-brand-green font-semibold hover:text-brand-orange transition-colors">
                Learn how trail cam scoring works →
              </Link>
            </div>
            <div className="bg-brand-dark rounded-2xl p-10 text-center">
              <div className="text-7xl mb-4">📷</div>
              <div className="text-white font-bold text-2xl mb-2">Trail Cam Photo</div>
              <div className="text-white/60 text-sm mb-6">Drop any trail cam image into rackline.ai</div>
              <div className="bg-brand-green rounded-xl p-5 text-left">
                <div className="text-white/60 text-xs uppercase tracking-wider mb-3">AI Score Results</div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white font-semibold">Gross B&C Score</span>
                  <span className="text-brand-orange font-bold text-2xl">148 4/8&quot;</span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white/70 text-sm">Net Score (est.)</span>
                  <span className="text-white font-semibold">144 2/8&quot;</span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white/70 text-sm">Estimated Age</span>
                  <span className="text-white font-semibold">4.5 years</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/70 text-sm">Next Season Projection</span>
                  <span className="text-brand-orange font-semibold">157–165&quot;</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              What Hunters Are Saying
            </h2>
            <p className="text-white/70">
              25,000+ hunters trust rackline.ai to make smarter deer management decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white/10 border border-white/10 rounded-2xl p-6">
                <div className="text-brand-orange text-3xl mb-4">&ldquo;</div>
                <p className="text-white/90 leading-relaxed mb-5 text-sm">{t.quote}</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.author}</div>
                  <div className="text-white/50 text-xs">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="badge bg-brand-cream-dark text-brand-green mb-6">Built by Hunters, For Hunters</span>
          <h2 className="section-heading mb-5">The rackline Story</h2>
          <p className="text-brand-gray leading-relaxed mb-5">
            rackline.ai was built because every hunter knows the frustration: you get a trail cam photo of a giant buck and have no idea what he scores. Tape measures, scoring charts, and guesswork — it never felt right for the 21st century.
          </p>
          <p className="text-brand-gray leading-relaxed mb-5">
            So we built the tool we always wanted. A photo in, a score out. AI that actually understands antler structure, not just pixel counts. Deer age from body characteristics. Growth projections based on real whitetail biology.
          </p>
          <p className="text-brand-gray leading-relaxed mb-8 font-medium text-brand-green">
            125,000 bucks scored later — we think we got it right.
          </p>
          <p className="text-sm text-brand-gray">— Nate Jewell, Founder · rackline.ai</p>
        </div>
      </section>

      {/* ── SHOP CTA ── */}
      <section className="py-16 px-4 bg-brand-cream-dark">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="text-6xl">🪵</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-brand-green mb-2">
              Memorialize Your Best Buck
            </h2>
            <p className="text-brand-gray mb-4">
              Custom laser-engraved wooden antler plaques starting at $79. Free shipping. The perfect way to display your biggest score.
            </p>
            <a
              href="https://rackline.ai/shop"
              className="btn-primary"
            >
              Shop Plaques →
            </a>
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
            <span className="badge bg-brand-cream-dark text-brand-green mb-4">FAQ</span>
            <h2 className="section-heading">Common Questions About rackline.ai</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card">
                <h3 className="font-bold text-brand-green mb-2">{faq.q}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-brand-gray">
            More questions?{" "}
            <a href="mailto:nate@rackline.ai" className="text-brand-green font-semibold hover:underline">
              Contact us directly
            </a>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
