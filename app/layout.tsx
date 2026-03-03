import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rackline.ai"),
  title: {
    default: "rackline.ai — AI Deer Scoring App | B&C Score From Any Photo",
    template: "%s | rackline.ai",
  },
  description:
    "Score any whitetail instantly with AI. Get Boone & Crockett estimates, deer age predictions & growth projections from a single photo. Used by 25,000+ hunters. Free on iOS & Android.",
  keywords: [
    "deer scoring app",
    "AI deer scoring",
    "how to score a deer",
    "Boone and Crockett scoring",
    "whitetail deer score",
    "deer antler score",
    "trail cam deer scoring",
    "deer age estimator",
    "score my buck",
  ],
  openGraph: {
    type: "website",
    siteName: "rackline.ai",
    title: "rackline.ai — AI Deer Scoring App",
    description:
      "Score any whitetail instantly with AI. Boone & Crockett estimates from a single photo.",
    url: "https://rackline.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "rackline.ai — AI Deer Scoring App",
    description: "Score any whitetail instantly with AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "rackline.ai",
              url: "https://rackline.ai",
              logo: "https://rackline.ai/logo.png",
              description:
                "AI-powered whitetail deer scoring and age estimation app. Score any buck in seconds from a photo.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "nate@rackline.ai",
                contactType: "customer support",
              },
              sameAs: [
                "https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231",
                "https://play.google.com/store/apps/details?id=com.racklineai.assistant",
              ],
            }),
          }}
        />
        {/* App Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "rackline.ai",
              operatingSystem: "iOS, Android",
              applicationCategory: "SportsApplication",
              description:
                "AI-powered whitetail deer scoring and age estimation. Get Boone & Crockett estimates from any photo.",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              installUrl: [
                "https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231",
                "https://play.google.com/store/apps/details?id=com.racklineai.assistant",
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
