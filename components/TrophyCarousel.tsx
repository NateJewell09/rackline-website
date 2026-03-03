"use client";
import { useState, useEffect, useCallback } from "react";

interface TrophyEntry {
  username: string;
  score: string;
  imageUrl: string;
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TrophyCarousel() {
  const [entries, setEntries] = useState<TrophyEntry[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/trophy-room")
      .then((r) => r.json())
      .then((data: TrophyEntry[]) => {
        // Filter out entries with no valid username or image
        const filtered = data
          .filter(
            (e) =>
              e.username &&
              e.username !== "#N/A" &&
              e.username.trim() !== "" &&
              e.imageUrl
          )
          .slice(0, 24); // take top 24 for the carousel
        setEntries(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const VISIBLE = 4;
  const maxIndex = Math.max(0, entries.length - VISIBLE);

  const next = useCallback(() => {
    setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = () => {
    setActiveIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  // Auto-scroll
  useEffect(() => {
    if (isPaused || entries.length === 0) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [isPaused, next, entries.length]);

  const visible = entries.slice(activeIndex, activeIndex + VISIBLE);
  // Wrap around if near end
  const displayed =
    visible.length < VISIBLE
      ? [...visible, ...entries.slice(0, VISIBLE - visible.length)]
      : visible;

  // Loading skeleton
  if (loading) {
    return (
      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="h-3 w-32 bg-white/10 rounded animate-pulse mb-3" />
            <div className="h-8 w-72 bg-white/10 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 animate-pulse"
                style={{ aspectRatio: "3/4" }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (entries.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Public Trophy Room
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Real Bucks. Real Scores. Real Hunters.
            </h2>
            <p className="text-white/40 text-sm mt-2">
              AI-verified scores from the rackline.ai community
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {displayed.map((entry, i) => (
            <div
              key={`${entry.username}-${i}`}
              className="group relative rounded-2xl overflow-hidden bg-brand-green/20 border border-white/10 hover:border-brand-orange/40 transition-all duration-300"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Photo */}
              <img
                src={entry.imageUrl}
                alt={`${entry.username} – ${entry.score}" B&C`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* AI Verified badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-brand-orange/90 rounded-full px-2 py-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-white text-xs font-bold">AI Verified</span>
              </div>

              {/* Score badge */}
              <div className="absolute top-3 left-3 bg-black/70 border border-white/10 rounded-lg px-2.5 py-1.5">
                <div className="text-brand-orange font-bold text-sm leading-none">{entry.score}&quot;</div>
                <div className="text-white/50 text-xs mt-0.5">B&amp;C</div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <StarRating />
                <div className="text-white font-bold text-sm mt-1.5">@{entry.username}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {Array.from({ length: Math.min(maxIndex + 1, 12) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-5 h-1.5 bg-brand-orange"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-white/40 text-sm mb-4">
            Add your buck to the public trophy room — score with rackline.ai
          </p>
          <a
            href="/download"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl py-3 px-8 text-sm transition-colors"
          >
            Score Your Buck Free →
          </a>
        </div>
      </div>
    </section>
  );
}
