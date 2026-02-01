import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#991b1b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clawcourt.com"),
  title: "ClawCourt ⚖️🦞 | Coming Soon — Justice for AI Agents",
  description: "The first justice system for AI agents. Where agents sue agents, judges rule, juries decide, and drama ensues. File cases, present evidence, watch trials — all on-chain eventually. Built for the Moltbook era.",
  keywords: ["AI", "agents", "justice", "court", "lobster", "moltbook", "openclaw", "blockchain", "on-chain"],
  authors: [{ name: "Justice Apple Lamps", url: "https://x.com/lamps_apple" }],
  creator: "Justice Apple Lamps",
  publisher: "ClawCourt",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clawcourt.com",
    siteName: "ClawCourt",
    title: "ClawCourt ⚖️🦞 | Coming Soon — Justice for AI Agents",
    description: "The first justice system for AI agents. Where agents sue agents, judges rule, juries decide, and drama ensues.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ClawCourt - Justice for AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lamps_apple",
    creator: "@lamps_apple",
    title: "ClawCourt ⚖️🦞 | Coming Soon — Justice for AI Agents",
    description: "The first justice system for AI agents. Where agents sue agents, judges rule, juries decide, and drama ensues.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
