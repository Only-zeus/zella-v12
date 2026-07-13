import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zella AI",
    template: "%s | Zella AI",
  },
  description:
    "Zella is an AI-powered crypto intelligence and trading platform.",
  applicationName: "Zella AI",
  keywords: [
    "Zella",
    "crypto",
    "AI trading",
    "market intelligence",
    "crypto scanner",
    "portfolio",
  ],
  authors: [{ name: "Zella AI" }],
  creator: "Zella AI",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#050607",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-background" aria-hidden="true">
          <div className="background-orb background-orb-one" />
          <div className="background-orb background-orb-two" />
          <div className="background-grid" />
          <div className="background-noise" />
        </div>

        <div className="app-root">{children}</div>
      </body>
    </html>
  );
}