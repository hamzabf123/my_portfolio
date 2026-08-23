import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { defaultDescription } from "@/lib/metadata";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollButtons from "@/components/ScrollingUpButton";
import MotionProvider from "@/components/MotionProvider";
import ScrollProvider from "@/components/motion/ScrollProvider";
import Preloader from "@/components/motion/Preloader";
import AmbientBackground from "@/components/motion/AmbientBackground";
import LanguageProvider from "@/components/LanguageProvider";
import SkipLink from "@/components/SkipLink";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s`,
  },
  description: defaultDescription,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased page-shell`}
      >
        <LanguageProvider>
          <SkipLink />
          <AmbientBackground />
          <Preloader />
          <MotionProvider>
            <ScrollProvider>
              <Header />
              <ScrollButtons />
              <div id="main-content" className="page-content">
                {children}
              </div>
              <Footer />
            </ScrollProvider>
          </MotionProvider>
        </LanguageProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
