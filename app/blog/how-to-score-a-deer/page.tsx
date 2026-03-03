import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "How to Score a Whitetail Deer — Complete B&C Guide",
  description:
    "Learn exactly how to score a whitetail deer using the Boone & Crockett system. Step-by-step measurements, diagrams explained, common mistakes, and how AI scoring works.",
};

const measurements = [
  { label: "A — Main Beam Length",   desc: "Measure along the outer curve of each main beam from the burr to the tip." },
  { label: "B — Tine Length (G1–G4)", desc: "Each normal tine measured from where it meets the main beam to its tip." },
  { label: "C — Abnormal Points",     desc: "Non-typical points deducted in typical scoring, added in non-typical." },
  { label: "D — Inside Spread",       desc: "Widest inside measurement between main beams at right angles to the skull." },
  { label: "E — Total of H Measurements", desc: "Four circumference measurements taken between each tine on each beam." },
];

const faqs = [
  {
    q: "What is a good whitetail deer score?",
    a: "For Boone & Crockett, a typical whitetail needs 170\" to qualify for the all-time records. The minimum for their book entry is 160\" for typical and 185\" for non-typical. Most hunters consider anything over 140\" a trophy-class buck, and 120–130\" a solid mature deer depending on the region.",
  },
  {
    q: "What is the difference between gross score and net score?",
    a: "Gross score adds up all measurements without deductions. Net score subtracts abnormal points and differences between the left and right sides (symmetry deductions). A buck with a very asymmetrical rack can lose 10–20 inches from gross to net score.",
  },
  {
    q: "Can I score a deer from a photo?",
    a: "Yes — with AI. rackline.ai uses computer vision to analyze antler structure from photos and produce a B&C estimate. It's not a replacement for official tape-measure scoring, but it gives you an accurate ballpark for harvest decisions in seconds.",
  },
  {
    q: "How accurate is AI deer scoring vs manual scoring?",
    a: "AI scoring from photos has inherent uncertainty due to camera angle and distance. Most rackline.ai scores come within 5–10% of a hand measurement. For official record book submissions, you'll still need a certified scorer — but for every hunt decision, trail cam review, and pre-season inventory, AI scoring is game-changing.",
  },
];

export default function HowToScoreADeerPage() {
  return (
    <>
      {/* Article Header */}
      <section className="bg-brand-dark py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/blog" className="text-white/50 hover:text-white text-sm transition-colors">
              ← Blog
            </Link>
            <span className="text-white/30">/</span>
            <span className="badge bg-brand-orange text-white">Scoring Guides</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            How to Score a Whitetail Deer —
            <span className="text-brand-orange"> The Complete Boone &amp; Crockett Guide</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Everything you need to know about scoring whitetail deer antlers the right way — from understanding the B&C system to taking accurate field measurements to using AI scoring from trail cam photos.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>10 min read</span>
            <span>·</span>
            <span>March 2026</span>
            <span>·</span>
            <span>By rackline.ai</span>
          </div>
        </div>
      </section>

      {/* App CTA Banner */}
      <div className="bg-brand-orange px-4 py-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-semibold text-sm">
            🦌 Want to skip the tape measure? Score any photo with AI in 30 seconds.
          </p>
          <div className="flex gap-3 shrink-0">
            <a href="https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-orange font-bold text-sm px-4 py-2 rounded-lg hover:bg-brand-cream transition-colors">
              iOS App
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.racklineai.assistant" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-orange font-bold text-sm px-4 py-2 rounded-lg hover:bg-brand-cream transition-colors">
              Android App
            </a>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* TOC */}
        <div className="bg-brand-cream rounded-xl p-6 mb-10 border border-brand-cream-dark">
          <h2 className="font-bold text-brand-green mb-3 text-sm uppercase tracking-wider">In This Guide</h2>
          <ol className="space-y-1">
            {[
              ["#what-is-bc", "What Is Boone & Crockett Scoring?"],
              ["#measurements", "The 5 Key B&C Measurements"],
              ["#typical-vs-nontypical", "Typical vs Non-Typical Whitetail"],
              ["#how-to-score", "Step-by-Step: How to Score a Deer"],
              ["#trophy-minimums", "What Score Is a Trophy Buck?"],
              ["#ai-scoring", "How AI Scoring Changes the Game"],
              ["#faq", "Frequently Asked Questions"],
            ].map(([href, label]) => (
              <li key={href as string}>
                <a href={href as string} className="text-brand-green hover:text-brand-orange text-sm transition-colors">
                  → {label as string}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="prose-content space-y-8 text-brand-dark leading-relaxed">

          <section id="what-is-bc">
            <h2 className="text-2xl font-bold text-brand-green mb-4">What Is Boone &amp; Crockett Scoring?</h2>
            <p className="text-brand-gray mb-4">
              The Boone and Crockett Club scoring system is the gold standard for measuring North American big game antlers. Founded in 1887 by Theodore Roosevelt, the B&C system gives hunters an objective, standardized way to compare whitetail deer across regions, seasons, and years.
            </p>
            <p className="text-brand-gray mb-4">
              The score accounts for antler mass, length, symmetry, and spread — not just how wide or tall a rack looks to the eye. This is why a deer that looks massive in the field sometimes scores lower than expected, and why hunters who understand the system make better harvest decisions.
            </p>
            <p className="text-brand-gray">
              The system produces two numbers: a <strong className="text-brand-green">gross score</strong> (raw total of all measurements) and a <strong className="text-brand-green">net score</strong> (after symmetry deductions). Official record books use the net score.
            </p>
          </section>

          <section id="measurements">
            <h2 className="text-2xl font-bold text-brand-green mb-4">The 5 Key B&C Measurements</h2>
            <p className="text-brand-gray mb-6">
              Every B&C score comes from five categories of measurements. You&apos;ll take these on both sides of the rack, then sum them up with an inside spread credit.
            </p>
            <div className="space-y-4">
              {measurements.map((m) => (
                <div key={m.label} className="flex gap-4 bg-brand-cream rounded-xl p-5">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">
                      {m.label.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-brand-green mb-1">{m.label}</div>
                    <div className="text-brand-gray text-sm">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="typical-vs-nontypical">
            <h2 className="text-2xl font-bold text-brand-green mb-4">Typical vs Non-Typical Whitetail</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-brand-green text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Typical</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  A typical whitetail has matching, symmetrical tine configurations — G1 through G4 (or more) on each side in roughly equal length and position. Clean, classic rack shape.
                </p>
                <p className="text-white/80 text-sm">
                  B&C all-time minimum: <strong className="text-brand-orange">170&quot;</strong> net typical
                </p>
              </div>
              <div className="bg-brand-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Non-Typical</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  A non-typical deer has abnormal points — extras, kickers, drop tines, or sticker points. These points are added rather than deducted in non-typical scoring.
                </p>
                <p className="text-white/80 text-sm">
                  B&C all-time minimum: <strong className="text-brand-orange">195&quot;</strong> net non-typical
                </p>
              </div>
            </div>
          </section>

          <section id="how-to-score">
            <h2 className="text-2xl font-bold text-brand-green mb-4">Step-by-Step: How to Score a Deer</h2>
            <p className="text-brand-gray mb-6">
              Here&apos;s the complete process for manually scoring a whitetail using the Boone &amp; Crockett system. You&apos;ll need a flexible steel tape measure — cloth tapes stretch and produce inaccurate results.
            </p>
            <div className="space-y-5">
              {[
                { n: 1, title: "Measure Inside Spread Credit", body: "Measure the widest inside distance between the main beams, perpendicular to the skull. Record this as your spread credit. Note: it cannot exceed the longest main beam." },
                { n: 2, title: "Measure Both Main Beams (A)", body: "Starting at the burr (base of the antler), follow the outer curve of each main beam to the tip. Record left and right separately." },
                { n: 3, title: "Measure All Normal Tines (G1–G4+)", body: "Measure each tine from where it originates on the main beam to its tip. If a tine is shorter than 1 inch, it does not count. Measure both sides." },
                { n: 4, title: "Take 4 Circumference Measurements (H1–H4)", body: "Measure beam circumference between G1 and G2 (H1), G2 and G3 (H2), G3 and G4 (H3), and between G4 and the next tine (H4). If a G4 is absent, take the H4 halfway between G3 and beam tip." },
                { n: 5, title: "Add Up Your Gross Score", body: "Sum: Inside Spread + both Main Beams + all G measurements (both sides) + all H measurements (both sides). This is your gross B&C score." },
                { n: 6, title: "Calculate Symmetry Deductions", body: "For each measurement (A, G1–G4, H1–H4), subtract the smaller from the larger side. Sum all these differences. This is your total deduction." },
                { n: 7, title: "Subtract Abnormal Points (Typical scoring)", body: "Measure each abnormal or non-typical point. Add them up and subtract from gross for typical scoring. For non-typical scoring, these are added." },
                { n: 8, title: "Calculate Final Net Score", body: "Net Score = Gross Score − Symmetry Deductions − Abnormal Points (typical) OR + Abnormal Points (non-typical). This is your official B&C net score." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="w-9 h-9 bg-brand-orange rounded-full flex items-center justify-center shrink-0 font-bold text-white text-sm mt-0.5">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green mb-1">{s.title}</h3>
                    <p className="text-brand-gray text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="trophy-minimums">
            <h2 className="text-2xl font-bold text-brand-green mb-4">What Score Is a Trophy Buck?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-brand-green text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg">Score Range</th>
                    <th className="text-left px-4 py-3">Classification</th>
                    <th className="text-left px-4 py-3 rounded-tr-lg">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["170\"+ typical", "B&C All-Time Record Book", "Top tier. The best of the best in North America."],
                    ["160–170\" typical", "B&C Entry (typical)", "Record-book eligible. Exceptional deer anywhere."],
                    ["140–160\"", "Trophy Class", "Dream buck for most hunters. Major trophy in most states."],
                    ["125–140\"", "Quality Buck", "Mature 4+ year old deer. Solid trophy in heavily pressured areas."],
                    ["100–125\"", "Average Mature Buck", "Respectable deer, especially in high-pressure states."],
                    ["Under 100\"", "Young / Average", "Let him walk in most management programs."],
                  ].map(([range, cls, note], i) => (
                    <tr key={range as string} className={i % 2 === 0 ? "bg-white" : "bg-brand-cream"}>
                      <td className="px-4 py-3 font-bold text-brand-orange">{range as string}</td>
                      <td className="px-4 py-3 font-semibold text-brand-green">{cls as string}</td>
                      <td className="px-4 py-3 text-brand-gray">{note as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="ai-scoring">
            <h2 className="text-2xl font-bold text-brand-green mb-4">How AI Scoring Changes the Game</h2>
            <p className="text-brand-gray mb-4">
              Until recently, the only way to get a B&C score was to put a tape measure on a dead deer or sketch measurements from a photo. Both methods require expertise, time, and usually physical access to the antlers. That meant most trail cam bucks were scored by eyeball — which is notoriously unreliable, even for experienced hunters.
            </p>
            <p className="text-brand-gray mb-4">
              rackline.ai changes this. Our AI analyzes antler structure directly from photos — measuring beam length, tine geometry, spread estimate, and mass — to produce a B&C estimate in under 30 seconds. You get a gross score estimate, net score estimate, deer age prediction, and growth projection from a single trail cam image.
            </p>
            <div className="bg-brand-dark rounded-xl p-6 text-white mb-4">
              <h3 className="font-bold text-brand-orange mb-3">AI Scoring vs Manual Scoring</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white/50 uppercase tracking-wider text-xs mb-2">Manual B&C Scoring</div>
                  <ul className="space-y-1 text-white/80">
                    <li>✓ Official and certifiable</li>
                    <li>✓ 100% accurate if done correctly</li>
                    <li>✗ Requires tape measure + dead deer</li>
                    <li>✗ 20–30 minutes per buck</li>
                    <li>✗ Useless for live or trail cam bucks</li>
                  </ul>
                </div>
                <div>
                  <div className="text-white/50 uppercase tracking-wider text-xs mb-2">rackline.ai AI Scoring</div>
                  <ul className="space-y-1 text-white/80">
                    <li>✓ Works on any photo — live or dead</li>
                    <li>✓ Results in under 30 seconds</li>
                    <li>✓ Age + growth projection included</li>
                    <li>✓ Score hundreds of trail cam bucks</li>
                    <li>✗ Estimate only (±5–10% typical)</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-brand-gray">
              For record book submission, you&apos;ll still need a certified measurer. For every other decision — let him walk, shoot, or watch another year — AI scoring is faster and often more reliable than eyeball guessing.
            </p>
          </section>

          {/* Mid-article CTA */}
          <div className="bg-brand-orange rounded-2xl p-7 text-white text-center">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-xl font-bold mb-2">Score Any Photo Right Now</h3>
            <p className="text-white/80 text-sm mb-5">
              Drop a trail cam photo into rackline.ai and get your B&C estimate in 30 seconds. Free on iOS and Android.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-orange font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-brand-cream transition-colors">
                Download for iOS
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.racklineai.assistant" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-orange font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-brand-cream transition-colors">
                Download for Android
              </a>
            </div>
          </div>

          <section id="faq">
            <h2 className="text-2xl font-bold text-brand-green mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="card">
                  <h3 className="font-bold text-brand-green mb-2">{faq.q}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <div>
            <h2 className="text-xl font-bold text-brand-green mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/deer-score-calculator", label: "Free B&C Score Calculator", desc: "Calculate your gross and net score online — no app required." },
                { href: "/blog/deer-age-estimator", label: "How to Tell a Deer's Age", desc: "Body characteristics, antler development, and AI age estimation." },
                { href: "/blog/trail-cam-deer-scoring", label: "Scoring Trail Cam Photos", desc: "Use AI to score every trail cam photo before the season." },
                { href: "/blog/gross-score-vs-net-score", label: "Gross Score vs Net Score", desc: "Understand the difference and why symmetry matters." },
              ].map((r) => (
                <Link key={r.href} href={r.href} className="card hover:shadow-md transition-shadow cursor-pointer group">
                  <h3 className="font-bold text-brand-green group-hover:text-brand-orange transition-colors mb-1 text-sm">
                    {r.label} →
                  </h3>
                  <p className="text-brand-gray text-xs">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Email Capture */}
        <div className="mt-16">
          <EmailCapture
            variant="dark"
            headline="More Scoring Tips Every Week"
            subtext="Guides like this one, trail cam strategies, and early feature access — free in your inbox."
          />
        </div>
      </article>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Score a Whitetail Deer Using Boone & Crockett",
            description: "Step-by-step guide to scoring whitetail deer antlers using the official Boone & Crockett scoring system.",
            step: [
              { "@type": "HowToStep", name: "Measure Inside Spread", text: "Measure the widest inside distance between the main beams at right angles to the skull." },
              { "@type": "HowToStep", name: "Measure Both Main Beams", text: "Follow the outer curve of each main beam from the burr to the tip." },
              { "@type": "HowToStep", name: "Measure All Normal Tines", text: "Measure each G-tine from origin to tip on both sides." },
              { "@type": "HowToStep", name: "Take Circumference Measurements", text: "Four circumference measurements (H1–H4) on each side." },
              { "@type": "HowToStep", name: "Add Gross Score", text: "Sum all measurements for your gross B&C score." },
              { "@type": "HowToStep", name: "Calculate Deductions", text: "Subtract symmetry differences and abnormal points for your net score." },
            ],
          }),
        }}
      />
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

      <AppDownloadCTA
        headline="Skip the Tape Measure. Score Any Buck in 30 Seconds."
        subtext="Free on iOS and Android. Join 25,000+ hunters who score smarter with AI."
        variant="dark"
      />
    </>
  );
}
