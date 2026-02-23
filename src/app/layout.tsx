// ═══════════════════════════════════════════════════════════════
// src/app/layout.tsx
// ═══════════════════════════════════════════════════════════════
//
// THE ROOT. Every page inherits from this.
//
// What changed from the old layout:
//
//   ADDED → `viewport` export (separate from metadata).
//     Since Next.js 14, viewport config is its own export.
//     The old way (inside metadata) is deprecated.
//     https://nextjs.org/docs/app/api-reference/functions/generate-viewport
//
//   ADDED → Structured data (JSON-LD).
//     A Person schema tells Google "this is a person's portfolio."
//     This is manual because Next.js doesn't auto-generate it.
//     Shows up as a rich result in search.
//
//   ADDED → `alternates.canonical` in metadata.
//     Prevents duplicate content issues (www vs non-www, trailing
//     slashes, etc). Lee Robinson's site does this.
//
//   ADDED → `robots` metadata.
//     Explicitly tells crawlers to index and follow.
//     Belt-and-suspenders with the canonical URL.
//
//   KEPT → Geist Sans + Mono (variable fonts, self-hosted).
//     Still the right choice. Lee Robinson uses Inter,
//     but Geist signals "I know the Vercel/Next.js ecosystem."
//
//   REMOVED → Nothing structural. The old layout was correct
//     in what it did — it just wasn't doing enough.
//
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ─── Font Loading ──────────────────────────────────────────────

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// ─── Viewport (separate export since Next.js 14) ──────────────
//
// This generates the <meta name="viewport"> and theme-color tags.
// Keeping it separate from metadata is the current best practice.

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// ─── Metadata ──────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://aharoj.io"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Angel J. Haro — Software Engineer",
    template: "%s | aharoJ",
  },
  description:
    "Software engineer building reliable backend systems and high-quality digital experiences.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Angel J. Haro — Software Engineer",
    description:
      "Software engineer building reliable backend systems and high-quality digital experiences.",
    url: "https://aharoj.io",
    siteName: "aharoJ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile/mugshot.jpg",
        width: 1200,
        height: 630,
        alt: "Angel J. Haro — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel J. Haro — Software Engineer",
    description:
      "Software engineer building reliable backend systems and high-quality digital experiences.",
    creator: "@aharoJ",
    images: ["/profile/mugshot.jpg"],
  },
};

// ─── Structured Data (JSON-LD) ─────────────────────────────────
//
// This tells search engines "this is a person's portfolio."
// Google uses this for rich results (knowledge panels, etc).
// Next.js doesn't generate this — you have to do it manually.

function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Angel J. Haro",
    url: "https://aharoj.io",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/aharoJ",
      "https://linkedin.com/in/aharoj",
      "https://x.com/aharoJ",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Root Layout ───────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
