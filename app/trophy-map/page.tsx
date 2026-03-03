import type { Metadata } from "next";
import TrophyMapClient from "./TrophyMapClient";

export const metadata: Metadata = {
  title: "Whitetail Trophy Heatmap — Where Giants Are Harvested | rackline.ai",
  description:
    "Interactive state and county heatmap of whitetail trophy deer harvested across America. See average B&C scores, harvest counts, and top counties by state. Full live data available in the rackline.ai app.",
  openGraph: {
    title: "Whitetail Trophy Heatmap | rackline.ai",
    description: "See where giants are being harvested — interactive state & county trophy heatmap. Full live data in the rackline.ai app.",
  },
};

export default function TrophyMapPage() {
  return (
    <div className="min-h-screen bg-brand-dark">

      {/* ── PREVIEW DATA BANNER ── */}
      <div className="bg-brand-orange/15 border-b border-brand-orange/30 px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-3 py-1">
              <svg className="w-3.5 h-3.5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wide">Preview Data</span>
            </div>
            <p className="text-white/60 text-sm">
              This map uses <span className="text-white font-semibold">illustrative data</span> — the full interactive map with live scores is in the app.
            </p>
          </div>
          <a
            href="/download"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white text-xs font-bold rounded-lg px-4 py-2 transition-colors whitespace-nowrap"
          >
            See live map in the app →
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-4 bg-brand-dark border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Public Trophy Room · Live in the App
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                Whitetail Trophy Heatmap
              </h1>
              <p className="text-white/60 max-w-xl">
                Where are the giants being harvested? The full map is live in the rackline.ai app — explore real B&amp;C scores by state and county from our community. The web preview below uses illustrative data.
              </p>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange">48</div>
                <div className="text-white/30 text-xs mt-1">States Covered</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3,000+</div>
                <div className="text-white/30 text-xs mt-1">Counties Mapped</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange">Live</div>
                <div className="text-white/30 text-xs mt-1">in the App</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <TrophyMapClient />
    </div>
  );
}
