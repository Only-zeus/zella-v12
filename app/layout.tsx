import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zella AI",
    template: "%s | Zella AI",
  },

  description:
    "Zella is an adaptive AI-powered cryptocurrency intelligence, research and trading platform.",

  applicationName: "Zella AI",

  keywords: [
    "Zella",
    "Zella AI",
    "crypto intelligence",
    "AI trading assistant",
    "institutional crypto research",
    "crypto scanner",
    "market analysis",
    "portfolio intelligence",
  ],

  authors: [
    {
      name: "Zella AI",
    },
  ],

  creator: "Zella AI",
  publisher: "Zella AI",

  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover",

  themeColor: "#030405",

  openGraph: {
    title: "Zella AI",
    description:
      "Adaptive market intelligence, institutional research and AI-powered crypto analysis.",
    type: "website",
    siteName: "Zella AI",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zella AI",
    description:
      "Adaptive market intelligence, institutional research and AI-powered crypto analysis.",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="zella-environment" aria-hidden="true">
          <div className="zella-grid" />

          <div className="zella-orb zella-orb-blue" />
          <div className="zella-orb zella-orb-purple" />
          <div className="zella-orb zella-orb-cyan" />

          <div className="zella-vignette" />
          <div className="zella-noise" />
        </div>

        <div className="zella-application">
          {children}
        </div>
      </body>
    </html>
  );
}