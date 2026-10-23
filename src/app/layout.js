import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jb",
  display: "swap",
});

// Applies the saved (or system) theme before paint to avoid a flash of light UI.
const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem("demo-paint-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "DEMO Paint – Quality Finishes, Lasting Impressions",
  description:
    "Premium painting & finishing contractor. House painting, false ceilings, POP designs, 3D wall panels, textured stucco, luxury wallpaper, and screeding.",
  keywords: [
    "DEMO Paint",
    "painting contractor",
    "house painting",
    "POP ceiling",
    "3D wall panels",
    "stucco finish",
    "screeding contractor",
    "Armstrong partner",
    "Slikcoat partner",
  ],
  openGraph: {
    title: "DEMO Paint – Quality Finishes, Lasting Impressions",
    description:
      "Transform your space with DEMO Paint. Premium interior & exterior finishes, ceilings, 3D walls & screeding.",
    images: ["/assets/images/duplex-finished.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
