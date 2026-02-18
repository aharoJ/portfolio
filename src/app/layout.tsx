// ═══════════════════════════════════════════════════════════════
// src/app/layout.tsx
// ═══════════════════════════════════════════════════════════════
//
// THE ROOT. Every page inherits from this.
//
// What this file does:
//   1. Loads Geist Sans + Geist Mono (self-hosted, zero layout shift)
//   2. Sets CSS variables so Tailwind can use them via @theme
//   3. Defines metadata for SEO + social sharing
//   4. Wraps children — nothing else
//
// What this file does NOT do:
//   - No Navbar (we'll add it when we're ready, not before)
//   - No Footer (same)
//   - No page transitions (no JS animation libraries)
//   - No wrappers, no providers, no context — just HTML
//
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ─── Font Loading ──────────────────────────────────────────────
//
// next/font does three things for you:
//   1. Self-hosts the font files (no external Google Fonts request)
//   2. Generates a unique className that injects the @font-face
//   3. Creates a CSS variable (--font-geist-sans) for Tailwind to consume
//
// `variable` is the key — it creates a CSS custom property on the element
// you apply it to. In globals.css, @theme references these variables.
//
// We load Geist as a variable font (weight: 100-900) so we get
// every weight from thin to black without loading separate files.

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// ─── Metadata ──────────────────────────────────────────────────
//
// Next.js generates <title>, <meta>, and OG tags from this object.
// No need for manual <meta> tags in <head>.
//
// The `metadataBase` tells Next.js the canonical URL so relative
// paths in openGraph.images resolve correctly.

export const metadata: Metadata = {
  metadataBase: new URL("https://aharoj.io"),
  title: {
    default: "Angel J. Haro — Software Engineer",
    template: "%s | aharoJ",
  },
  description: "Software engineer building high-quality digital experiences.",
  openGraph: {
    title: "Angel J. Haro — Software Engineer",
    description: "Software engineer building high-quality digital experiences.",
    url: "https://aharoj.io",
    siteName: "aharoJ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile/aharoJ.png",
        width: 1200,
        height: 630,
        alt: "aharoJ — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel J. Haro — Software Engineer",
    description: "Software engineer building high-quality digital experiences.",
    images: ["/profile/aharoJ.png"],
  },
};

// ─── Root Layout ───────────────────────────────────────────────
//
// This is a React Server Component. No "use client" needed.
// The only job: set up <html> and <body> with fonts, then render children.
//
// The className on <body> does two things:
//   1. Injects the @font-face declarations (geistSans.variable)
//   2. Makes --font-geist-sans and --font-geist-mono available
//      to every descendant element via CSS inheritance
//
// antialiased = -webkit-font-smoothing: antialiased
//               -moz-osx-font-smoothing: grayscale
// This makes text render crisper on macOS/iOS.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
