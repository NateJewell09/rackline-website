import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Deer Scoring Blog — Whitetail Tips, B&C Guides & AI Scoring",
  description:
    "Learn how to score whitetail deer, understand Boone & Crockett measurements, estimate deer age, and get more from your trail cams. Expert guides for hunters.",
};

const posts = [
  {
    slug: "how-to-score-a-deer",
    title: "How to Score a Whitetail Deer — The Complete Boone & Crockett Guide",
    excerpt:
      "Everything you need to know about scoring whitetail deer antlers. Step-by-step B&C measurements, common mistakes, and how AI is changing the game.",
    category: "Scoring Guides",
    readTime: "10 min read",
    date: "March 2026",
    featured: true,
  },
  {
    slug: "deer-age-estimator",
    title: "How to Tell a Deer's Age — Body Characteristics & Antler Clues",
    excerpt:
      "Age estimation is just as important as score. Learn to read body characteristics, antler development, and how rackline.ai estimates age from photos.",
    category: "Age Estimation",
    readTime: "7 min read",
    date: "March 2026",
    featured: false,
  },
  {
    slug: "trail-cam-deer-scoring",
    title: "How to Score Trail Cam Photos with AI (No Tape Measure Needed)",
    excerpt:
      "Trail cam photos are the best intel you have. Learn how to use AI to score every single one — even nighttime IR images.",
    category: "Trail Cams",
    readTime: "6 min read",
    date: "February 2026",
    featured: false,
  },
  {
    slug: "velvet-antler-scoring",
    title: "Velvet Antler Scoring: What Your Score Means and Why It's Tricky",
    excerpt:
      "Scoring velvet antlers is different from hard horn. Here's what you need to know and why velvet scores can surprise you come fall.",
    category: "Scoring Guides",
    readTime: "5 min read",
    date: "February 2026",
    featured: false,
  },
  {
    slug: "gross-score-vs-net-score",
    title: "Gross Score vs Net Score — What Every Hunter Needs to Know",
    excerpt:
      "Your buck's gross score and net score can differ significantly. Here's what those numbers mean and which one actually matters for record books.",
    category: "Scoring Basics",
    readTime: "4 min read",
    date: "January 2026",
    featured: false,
  },
  {
    slug: "boone-and-crockett-scoring",
    title: "Boone & Crockett Scoring Explained — Measurements, Records & Minimums",
    excerpt:
      "The gold standard for whitetail scoring. Learn every B&C measurement, what qualifies for the record book, and the difference between typical and non-typical.",
    category: "Scoring Guides",
    readTime: "8 min read",
    date: "January 2026",
    featured: false,
  },
];

const categories = ["All", "Scoring Guides", "Age Estimation", "Trail Cams", "Scoring Basics"];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest     = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="bg-brand-green py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <span className="badge bg-brand-orange text-white mb-4">Hunting Intel</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The rackline.ai Deer Scoring Blog
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Boone &amp; Crockett guides, trail cam tips, age estimation, and everything else hunters need to score smarter.
          </p>
        </div>
      </section>

      {/* Category filter (visual only for now) */}
      <div className="bg-brand-cream-dark border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-3 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`shrink-0 text-sm font-medium px-4 py-1.5 rounded-full cursor-pointer transition-colors
                ${cat === "All"
                  ? "bg-brand-green text-white"
                  : "bg-white text-brand-gray hover:bg-brand-green hover:text-white border border-gray-200"
                }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Featured Post */}
        {featured && (
          <div className="mb-14">
            <div className="badge bg-brand-orange text-white mb-4">Featured Guide</div>
            <Link href={`/blog/${featured.slug}`}>
              <div className="card hover:shadow-lg transition-shadow cursor-pointer bg-brand-dark text-white overflow-hidden">
                <div className="p-8 md:p-12">
                  <span className="badge bg-brand-orange text-white mb-4">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-6 max-w-2xl">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-brand-orange font-semibold">Read the full guide →</span>
                    <span className="text-white/40 text-sm">{featured.readTime} · {featured.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Post Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="card h-full hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
                <div className="flex-1">
                  <span className="badge bg-brand-cream-dark text-brand-green mb-3">
                    {post.category}
                  </span>
                  <h2 className="font-bold text-brand-green text-lg mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-brand-gray text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <span className="text-brand-orange text-sm font-semibold">Read more →</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Email Capture */}
        <EmailCapture
          variant="dark"
          headline="Get New Guides Every Week"
          subtext="Scoring tips, trail cam strategies, and deer management intel — free in your inbox."
        />
      </div>
    </>
  );
}
