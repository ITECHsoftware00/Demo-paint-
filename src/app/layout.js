import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../lib/siteConfig";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://demopaint.com"
  ),
  title: "DEMO Paint — Finishing studio in Osogbo",
  description:
    "Painting, stucco, Travertino and screeding for homes and workspaces across Osogbo. One crew from first inspection to final walkthrough.",
  keywords: [
    "DEMO Paint",
    "painting contractor Nigeria",
    "house painting Osogbo",
    "Travertino finish",
    "Travertino screeding",
    "POP ceiling design",
    "stucco wall finish",
    "3D wall panels",
    "screeding contractor",
    "interior and exterior painter",
  ],
  openGraph: {
    title: "DEMO Paint — Finishing studio in Osogbo",
    description: siteConfig.subheadline,
    url: "https://demopaint.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Project Showcase`,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  // JSON-LD structured data for LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description: siteConfig.subheadline,
    image: "https://demopaint.com/images/hero.jpg",
    telephone: siteConfig.phones[0].raw,
    email: siteConfig.email,
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: "₦₦",
    contactPoint: siteConfig.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: `+${p.intl}`,
      contactType: "customer service",
      availableLanguage: "en",
    })),
  };

  return (
    <html lang="en" className={interTight.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Scroll reveals are CSS-driven; without script the content stays visible. */}
        <noscript>
          <style>{`.reveal,.reveal-mask__inner{opacity:1!important;transform:none!important}.reveal-mask{overflow:visible}.reveal-clip{clip-path:none!important}`}</style>
        </noscript>
      </head>
      <body className="bg-cream text-espresso antialiased">{children}</body>
    </html>
  );
}
