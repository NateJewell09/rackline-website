import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export const metadata: Metadata = {
  title: "rackline.ai for Hunting Outfitters — AI Deer Scoring for Your Clients",
  description:
    "Score your clients' bucks instantly with AI. Impress hunters with instant B&C estimates, age predictions, and trophy photos. Trusted by outfitters across North America.",
};

const benefits = [
  {
    icon: "📍",
    title: "Get on the Trophy Heatmap",
    description:
      "When hunters browse our interactive state & county trophy map to decide where to book a hunt, your outfitter pin is right there — in the counties with the highest scores and harvest numbers.",
  },
  {
    icon: "⚡",
    title: "Instant Buck Scores at Camp",
    description:
      "Score your client's deer the moment it comes in. Pull out your phone, snap a photo, and hand them a verified B&C estimate before the truck is unloaded.",
  },
  {
    icon: "🏆",
    title: "Add Value to Every Hunt",
    description:
      "Clients remember the outfitters who go above and beyond. A scored, documented trophy with growth projections is a story they'll tell for years.",
  },
  {
    icon: "📊",
    title: "Property Deer Management",
    description:
      "Score every buck on your trail cams before the season. Build a real inventory of your property's deer quality and track bucks year-over-year.",
  },
  {
    icon: "📱",
    title: "Works on Any Device",
    description:
      "iOS and Android. No special equipment, no training required. If you can take a photo, you can score a buck with rackline.ai.",
  },
  {
    icon: "🖨️",
    title: "Custom Trophy Plaques",
    description:
      "Order custom laser-engraved wooden antler plaques for clients right from the app. A branded premium touch that sets you apart.",
  },
  {
    icon: "🔒",
    title: "Private Client Records",
    description:
      "Every scored buck is saved to the hunter's account. Their history stays with them — a permanent record of every deer scored on your property.",
  },
];

const testimonials = [
  {
    quote: "I score every client's deer now before they even leave camp. They love getting a real number instead of just a guess. rackline.ai pays for itself on day one.",
    author: "Randy P.",
    detail: "South Texas deer lease manager",
  },
  {
    quote: "Used it for pre-season trail cam inventory. Scored 200+ bucks in an afternoon. Changed how we manage deer on our 4,000 acres.",
    author: "Bill H.",
    detail: "Kansas outfitter",
  },
];

const faqs = [
  {
    q: "How do I get my outfitter listed on the Trophy Heatmap?",
    a: "Email nate@rackline.ai with your outfitter name, location, and species. We'll drop your pin on the map and build out your listing — including your success rate, acreage, and booking link — so hunters browsing the map can find and contact you directly.",
  },
  {
    q: "Is there a special pricing tier for outfitters?",
    a: "We're actively building an outfitter plan that includes trophy map placement, branded score reports, and multi-user accounts. Contact us at nate@rackline.ai to get early access pricing.",
  },
  {
    q: "Can I score deer for multiple clients from one account?",
    a: "Yes. The app supports scoring and saving multiple bucks. Each scored deer can be tagged, noted, and shared with the individual hunter.",
  },
  {
    q: "How accurate is the AI for outfitter use?",
    a: "Most scores come within 5–10% of a professional tape measure. For outfitter purposes — impressing clients at camp, making harvest decisions, building a deer inventory — this level of accuracy is more than sufficient.",
  },
  {
    q: "Can clients order their own plaques from the app?",
    a: "Yes. Every scored buck can be turned into a custom wooden antler plaque ordered directly through the app. Perfect for a premium client gift or upsell.",
  },
];

export default function ForOutfittersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark overflow-hidden relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-dark to-black opacity-90" />
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className="badge bg-brand-orange text-white mb-6">For Hunting Outfitters</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Score Your Clients&apos; Bucks Instantly —
              <span className="text-brand-orange"> No Tape Measure Needed</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              rackline.ai gives outfitters and hunting operations a professional tool to score deer at camp, manage trail cam inventories, and wow clients with instant B&C estimates and growth projections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:nate@rackline.ai" className="btn-primary text-base py-4 px-8">
                Talk to Us About Outfitter Pricing
              </a>
              <a
                href="https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-base py-4 px-8"
              >
                Try Free Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP VISIBILITY SECTION ── */}
      <section className="py-20 px-4 bg-brand-dark overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
              The Biggest Reason to List
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Put Your Pin Where Hunters Are Already Looking
            </h2>
            <p className="text-white/70 leading-relaxed mb-5">
              Hunters use rackline.ai&apos;s trophy heatmap to research <em>where to hunt</em> before they ever book a trip — browsing which states and counties produce the biggest bucks. Your outfitter pin lives right on that map.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              When a hunter zooms into Boone County Iowa, sees 164" average B&C scores, and spots your pin — that&apos;s a booked hunt you didn&apos;t have to chase. Passive, intent-driven discovery from 25,000+ active hunters.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:nate@rackline.ai" className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl py-3 px-6 text-sm transition-colors">
                Get Your Pin on the Map →
              </a>
              <Link href="/trophy-map" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold rounded-xl py-3 px-6 text-sm transition-colors">
                View the Trophy Map
              </Link>
            </div>
          </div>

          {/* Right: Map mockup */}
          <div className="relative">
            <div className="bg-brand-green/20 border border-white/10 rounded-2xl overflow-hidden">
              {/* Mock map header */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Whitetail Trophy Heatmap</span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-2.5 py-1">
                  <svg className="w-2.5 h-2.5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-brand-orange text-xs font-bold">Outfitters ON</span>
                </div>
              </div>

              {/* Mock map body with heat gradient + pins */}
              <div className="relative h-52 overflow-hidden">
                {/* Heat gradient background representing states */}
                <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <radialGradient id="hot1" cx="45%" cy="40%" r="25%">
                      <stop offset="0%" stopColor="#D4521A" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#D4521A" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="hot2" cx="55%" cy="55%" r="20%">
                      <stop offset="0%" stopColor="#D4521A" stopOpacity="0.7"/>
                      <stop offset="100%" stopColor="#D4521A" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="hot3" cx="35%" cy="60%" r="18%">
                      <stop offset="0%" stopColor="#D4521A" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#D4521A" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <rect width="400" height="200" fill="#0D1B0F"/>
                  {/* State-like rectangles with heat colors */}
                  <rect x="160" y="50" width="60" height="50" rx="2" fill="rgb(180,60,20)" opacity="0.85"/>
                  <rect x="225" y="55" width="55" height="45" rx="2" fill="rgb(160,55,18)" opacity="0.8"/>
                  <rect x="100" y="60" width="55" height="45" rx="2" fill="rgb(140,50,16)" opacity="0.75"/>
                  <rect x="165" y="105" width="55" height="45" rx="2" fill="rgb(120,45,14)" opacity="0.7"/>
                  <rect x="60" y="65" width="35" height="40" rx="2" fill="rgb(100,40,12)" opacity="0.65"/>
                  <rect x="285" y="50" width="50" height="50" rx="2" fill="rgb(90,35,10)" opacity="0.6"/>
                  <rect x="60" y="110" width="100" height="40" rx="2" fill="rgb(70,30,12)" opacity="0.55"/>
                  <rect x="225" y="105" width="55" height="45" rx="2" fill="rgb(60,28,14)" opacity="0.5"/>
                  <rect x="290" y="105" width="60" height="50" rx="2" fill="rgb(50,27,15)" opacity="0.45"/>
                  {/* Radial heat overlays */}
                  <rect width="400" height="200" fill="url(#hot1)" opacity="0.4"/>
                  <rect width="400" height="200" fill="url(#hot2)" opacity="0.3"/>
                  <rect width="400" height="200" fill="url(#hot3)" opacity="0.25"/>
                  {/* Outfitter pins */}
                  {[
                    [182, 72], [246, 68], [128, 78], [192, 118], [78, 80], [302, 68]
                  ].map(([cx, cy], i) => (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r="7" fill="rgba(212,82,26,0.3)"/>
                      <circle cx={cx} cy={cy} r="3.5" fill="#D4521A" stroke="#0D1B0F" strokeWidth="0.8"/>
                      <line x1={cx} y1={cx > 0 ? cy + 3.5 : cy} x2={cx} y2={cy + 7} stroke="#D4521A" strokeWidth="1.2"/>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Mock outfitter card pop-up */}
              <div className="mx-4 mb-4 -mt-2 bg-brand-dark border border-brand-orange/40 rounded-xl p-4 shadow-xl relative z-10">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <div className="text-white font-bold text-sm">Heartland Trophy Hunts</div>
                      <div className="text-white/40 text-xs">Iowa · Whitetail · 2,400 ac</div>
                    </div>
                  </div>
                  <div className="bg-brand-orange text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">
                    Book →
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="text-white/50 text-xs">★ 4.9 (47 reviews)</div>
                  <div className="text-brand-orange text-xs font-semibold">92% success rate</div>
                </div>
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -top-4 -right-4 bg-brand-orange text-white text-xs font-bold rounded-2xl px-4 py-2.5 shadow-xl">
              25,000+ active hunters
              <div className="text-white/70 font-normal text-xs mt-0.5">see this map every week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="badge bg-brand-cream-dark text-brand-green mb-4">Why Outfitters Use rackline</span>
            <h2 className="section-heading">The Tool Professional Outfitters Have Been Waiting For</h2>
            <p className="section-subheading">
              From single-guide operations to large hunting ranches, rackline.ai fits every outfitter workflow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-brand-green text-lg mb-2">{b.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case: Trail Cam Inventory */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-brand-dark rounded-2xl p-8 text-white">
            <div className="text-white/50 uppercase tracking-wider text-xs mb-4">Trail Cam Inventory Report</div>
            <div className="space-y-3">
              {[
                { buck: "Buck #1 — South Feeder", score: "162 3/8\"", age: "5.5 yr", status: "Shooter" },
                { buck: "Buck #2 — Creek Crossing", score: "138 6/8\"", age: "4.5 yr", status: "Let Walk" },
                { buck: "Buck #3 — East Plot", score: "151 2/8\"", age: "4.5 yr", status: "Borderline" },
                { buck: "Buck #4 — North Tower", score: "179 4/8\"", age: "6.5 yr", status: "Trophy" },
              ].map((b) => (
                <div key={b.buck} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm">
                  <div>
                    <div className="text-white font-medium">{b.buck}</div>
                    <div className="text-white/50 text-xs">{b.age}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-brand-orange font-bold">{b.score}</div>
                    <div className={`text-xs font-semibold ${b.status === "Trophy" || b.status === "Shooter" ? "text-green-400" : b.status === "Let Walk" ? "text-white/50" : "text-yellow-400"}`}>
                      {b.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="badge bg-brand-green text-white mb-4">Trail Cam Inventory</span>
            <h2 className="section-heading mb-4">
              Know Every Buck on Your Property Before the Season Opens
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              Stop guessing which bucks to harvest and which to let walk. rackline.ai lets you score your entire trail cam inventory in hours — not days.
            </p>
            <p className="text-brand-gray leading-relaxed mb-6">
              Upload last season&apos;s photos, build a complete deer inventory, set harvest criteria, and know exactly which bucks your clients should be targeting before opening day.
            </p>
            <Link href="/download" className="btn-primary">
              Start Your Inventory →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-brand-green">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Outfitters Already Using rackline.ai
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white/10 border border-white/10 rounded-2xl p-7">
                <div className="text-brand-orange text-3xl mb-4">&ldquo;</div>
                <p className="text-white/90 leading-relaxed mb-5">{t.quote}</p>
                <div>
                  <div className="text-white font-semibold">{t.author}</div>
                  <div className="text-white/50 text-sm">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge bg-brand-orange text-white mb-4">Outfitter Partnership</span>
            <h2 className="section-heading mb-4">
              Get Outfitter Pricing &amp; Early Access
            </h2>
            <p className="section-subheading mb-8">
              Get your pin on the trophy heatmap, access outfitter pricing, and get early access to multi-user accounts, branded score reports, and client management tools.
            </p>
            <a href="mailto:nate@rackline.ai" className="btn-primary text-base py-4 px-8 inline-flex">
              Contact Us: nate@rackline.ai →
            </a>
          </div>

          <div className="mt-12">
            <EmailCapture
              variant="light"
              headline="Get Notified When Outfitter Features Launch"
              subtext="Be first to know about multi-user accounts, branded reports, and outfitter-specific tools."
            />
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-brand-green mb-6">Outfitter FAQ</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="card">
                  <h3 className="font-bold text-brand-green mb-2">{f.q}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AppDownloadCTA
        headline="Start Scoring Your Clients' Bucks Today"
        subtext="Free to try. No credit card. Works on iOS and Android."
        variant="dark"
      />
    </>
  );
}
