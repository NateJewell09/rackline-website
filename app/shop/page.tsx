import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop — Custom Hunting Memorabilia | rackline.ai",
  description:
    "Handcrafted hunting memorabilia built by hunters, for hunters. State-shaped wooden plaques, mini mount replicas, and more.",
};

const PRODUCTS = [
  {
    slug: "custom-plaque",
    category: "Handcrafted State Plaques",
    name: "Custom Wooden Plaque",
    description:
      "Mount your euro or shoulder mount on a handcrafted state-shaped plaque. Cut from premium 12\"×16\" pine boards with your choice of finish.",
    includes: [
      "State-shaped pine plaque",
      "Mounting hardware included",
      "Optional custom engraving",
    ],
    price: "$79.00",
    priceNote: "+ options",
    image: "https://rackline.ai/assets/OH_1765828107808-DVhAKF8x.png",
    cta: "View Options",
    soldOut: false,
  },
  {
    slug: "mini-mount",
    category: "Your Trophy, Miniaturized",
    name: "Mini Mount Replica",
    description:
      "Turn your trophy into a stunning 3D-printed miniature replica. Each piece is meticulously crafted to match your deer's unique rack and hand-painted for lifelike detail. The ultimate keepsake for your desk, shelf, or trophy room.",
    includes: [
      "Custom 3D-printed replica from your photos",
      "Hand-painted realistic finish",
      "Full body, shoulder, or euro mount style",
      "Display stand included",
    ],
    price: "$69.99",
    priceNote: "+ options",
    image: "https://rackline.ai/assets/3714919565277484524_1765831139008-BF5xKQiC.jpg",
    cta: "Get Notified",
    soldOut: true,
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero */}
      <section className="bg-brand-green py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Shop Our Gear</h1>
          <p className="text-white/70 text-lg">Quality memorabilia built by hunters, for hunters.</p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-white/30 text-sm">Showing {PRODUCTS.length} products</p>

          {PRODUCTS.map((product) => (
            <div
              key={product.slug}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-white/20 transition-colors"
            >
              {/* Image */}
              <div className="relative w-full md:w-64 lg:w-80 shrink-0 bg-white/5">
                {product.soldOut && (
                  <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Sold Out
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">
                  {product.category}
                </span>
                <h2 className="text-white text-2xl font-bold mb-3">{product.name}</h2>
                <p className="text-white/60 text-sm mb-5">{product.description}</p>

                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <p className="text-white/50 text-xs font-bold uppercase tracking-wide mb-3">Includes:</p>
                  <ul className="space-y-1.5">
                    {product.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                        <span className="text-brand-orange mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <span className="text-white text-xl font-bold">{product.price}</span>
                    <span className="text-white/40 text-sm ml-1">{product.priceNote}</span>
                  </div>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl px-6 py-2.5 text-sm transition-colors"
                  >
                    {product.cta} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
