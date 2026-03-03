import Link from "next/link";

interface AppDownloadCTAProps {
  headline?: string;
  subtext?: string;
  variant?: "orange" | "green" | "dark";
}

const IOS_URL    = "https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.racklineai.assistant";

export default function AppDownloadCTA({
  headline = "Score Your Buck in 30 Seconds",
  subtext  = "Free on iOS and Android. No tape measure needed.",
  variant  = "orange",
}: AppDownloadCTAProps) {
  const bg =
    variant === "orange" ? "bg-brand-orange"
    : variant === "green" ? "bg-brand-green"
    : "bg-brand-dark";

  return (
    <section className={`${bg} py-20 px-4`}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-5xl mb-5">🦌</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{headline}</h2>
        <p className="text-white/80 text-lg mb-8">{subtext}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={IOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-900 transition-colors min-w-[180px]"
          >
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-white/60 leading-none">Download on the</div>
              <div className="text-base font-semibold leading-tight">App Store</div>
            </div>
          </a>

          <a
            href={ANDROID_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-900 transition-colors min-w-[180px]"
          >
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.22.99.14l12.2-7.05-2.55-2.55L3.18 23.76zm16.31-10.03L17.1 12l2.39-1.73-2.18-3.77-2.73 1.57c-.57-.44-1.2-.79-1.88-1.03L12.35 4h-4.3l-.35 3.04c-.68.24-1.31.59-1.88 1.03L3.09 6.5.91 10.27 3.3 12l-2.39 1.73 2.18 3.77 2.73-1.57c.57.44 1.2.79 1.88 1.03L7.95 20h4.3l.35-3.04c.68-.24 1.31-.59 1.88-1.03l2.73 1.57 2.28-3.77zM10.18 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-white/60 leading-none">Get it on</div>
              <div className="text-base font-semibold leading-tight">Google Play</div>
            </div>
          </a>
        </div>

        <p className="mt-6 text-white/50 text-sm">
          Free to download · Used by 25,000+ hunters · 125,000+ bucks scored
        </p>
      </div>
    </section>
  );
}
