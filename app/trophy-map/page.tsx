import type { Metadata } from "next";
import TrophyMapClient from "./TrophyMapClient";

export const metadata: Metadata = {
  title: "Whitetail Trophy Heatmap — Where Giants Are Harvested | rackline.ai",
  description:
    "Interactive state and county heatmap of whitetail trophy deer harvested across America. See average B&C scores, harvest counts, and top counties by state. Built from 125,000+ rackline.ai scores.",
  openGraph: {
    title: "Whitetail Trophy Heatmap | rackline.ai",
    description: "See where giants are being harvested — interactive state & county trophy data from 125,000+ AI-scored bucks.",
  },
};

export default function TrophyMapPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero */}
      <section className="py-12 px-4 bg-brand-dark border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Public Trophy Room · Live Data
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                Whitetail Trophy Heatmap
              </h1>
              <p className="text-white/60 max-w-xl">
                Where are the giants being harvested? State and county trophy data from 125,000+ bucks scored through rackline.ai. Filter by harvest count or average B&C score.
              </p>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">125,000+</div>
                <div className="text-white/40 text-xs mt-1">Bucks Scored</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">48</div>
                <div className="text-white/40 text-xs mt-1">States Mapped</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange">3,144</div>
                <div className="text-white/40 text-xs mt-1">Counties Tracked</div>
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
