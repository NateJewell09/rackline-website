import type { Metadata } from "next";
import DeerScoreCalculatorClient from "./DeerScoreCalculatorClient";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Deer Antler Score Calculator — Boone & Crockett B&C Scoring Tool",
  description:
    "Free online Boone & Crockett deer antler score calculator. Enter your measurements and get an instant gross and net B&C score. No app download required.",
};

export default function DeerScoreCalculatorPage() {
  return (
    <>
      <section className="bg-brand-green py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge bg-brand-orange text-white mb-4">Free Tool</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Free Deer Antler Score Calculator
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Enter your Boone &amp; Crockett measurements below and get your gross and net score instantly. No signup required.
          </p>
        </div>
      </section>

      <DeerScoreCalculatorClient />

      {/* Context / how it works */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading mb-4">Want to Skip the Measuring Tape?</h2>
          <p className="text-brand-gray mb-6 leading-relaxed">
            This calculator is great for scoring a deer after harvest when you have the antlers in hand. But for live deer, trail cam photos, or velvet bucks — you need rackline.ai. Our AI scores any photo in under 30 seconds, no measurements required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Score From a Photo — iOS
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.racklineai.assistant" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Score From a Photo — Android
            </a>
          </div>
        </div>
      </section>

      {/* Educational content for SEO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-green mb-6">How This B&C Calculator Works</h2>
          <div className="prose-content space-y-4 text-brand-gray text-sm leading-relaxed">
            <p>
              This free calculator uses the official Boone &amp; Crockett scoring formula for typical whitetail deer. Enter your measurements in inches (fractions as decimals) and the calculator adds them up for your gross score and subtracts symmetry differences for your net score.
            </p>
            <p>
              <strong className="text-brand-green">Gross B&C Score</strong> = Inside Spread Credit + Left Main Beam + Right Main Beam + All G-tines (both sides) + All H circumferences (both sides)
            </p>
            <p>
              <strong className="text-brand-green">Net B&C Score</strong> = Gross Score − Total Symmetry Deductions
            </p>
            <p>
              For official Boone &amp; Crockett record book entry, your deer must be scored by a certified B&C official measurer after a 60-day drying period. This calculator gives you an accurate estimate — for official submission, contact the Boone and Crockett Club directly.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link href="/blog/how-to-score-a-deer" className="text-brand-green font-semibold hover:text-brand-orange transition-colors text-sm">
              → Read the complete guide: How to Score a Whitetail Deer
            </Link>
          </div>
        </div>
      </section>

      <AppDownloadCTA
        headline="Score Any Photo in Under 30 Seconds"
        subtext="No tape measure needed. Free on iOS and Android."
        variant="green"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "rackline.ai Free Boone & Crockett Deer Score Calculator",
            url: "https://rackline.ai/deer-score-calculator",
            description: "Free online calculator for scoring whitetail deer antlers using the Boone & Crockett scoring system.",
            applicationCategory: "UtilitiesApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </>
  );
}
