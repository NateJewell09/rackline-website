import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { href: "/download", label: "Download App" },
    { href: "/deer-score-calculator", label: "Free Score Calculator" },
    { href: "/trophy-map", label: "Trophy Heatmap" },
    { href: "/for-outfitters", label: "For Outfitters" },
  ],
  Learn: [
    { href: "/blog", label: "Blog" },
    { href: "/blog/how-to-score-a-deer", label: "How to Score a Deer" },
    { href: "/blog/boone-and-crockett-scoring", label: "B&C Scoring Guide" },
    { href: "/blog/deer-age-estimator", label: "Deer Age Estimator" },
  ],
  Company: [
    { href: "mailto:nate@rackline.ai", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/app-icon.png"
                alt="rackline.ai"
                width={32}
                height={32}
                className="rounded-xl"
              />
              <span className="text-white font-bold text-xl">
                rackline<span className="text-brand-orange">.ai</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              AI-powered whitetail deer scoring and age estimation. Score any buck in seconds — no tape measure needed.
            </p>
            {/* App Badges */}
            <div className="flex flex-col gap-3">
              <a
                href="https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-semibold text-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.racklineai.assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-semibold text-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} rackline.ai — Built by hunters, for hunters.</p>
          <p>25,000+ hunters · 125,000+ bucks scored · 500K+ monthly impressions</p>
        </div>
      </div>
    </footer>
  );
}
