// ═══════════════════════════════════════════════════════════════
// src/app/layout.tsx
// ═══════════════════════════════════════════════════════════════
//
// THE ROOT. Every page inherits from this.
//
// THEME TOGGLE — HARDENED:
//
//   BUG #1 → suppressHydrationWarning on <html>.
//     The blocking script sets data-theme before React hydrates,
//     which creates a server/client mismatch on that element.
//     suppressHydrationWarning tells React this is intentional.
//     It only applies one level deep — won't mask real bugs in
//     child components. Every next-themes implementation does this.
//
//   BUG #2 → Blocking script now checks system preference.
//     Previous version only read localStorage. First-time visitors
//     with OS dark mode got light mode — wrong for ~50% of users.
//     Now: localStorage → matchMedia fallback → light default.
//
// React Server Component (layout itself is RSC).
// ThemeProvider is the only client boundary.
//
// ═══════════════════════════════════════════════════════════════

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/component/theme/ThemeProvider";

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

// ─── Viewport ──────────────────────────────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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

// ─── Blocking Theme Script ─────────────────────────────────────
//
// Runs synchronously BEFORE React hydrates.
//
// Decision cascade:
//   1. localStorage has explicit user choice → use it
//   2. No stored choice → check prefers-color-scheme → use OS pref
//   3. matchMedia unavailable → default to light
//
// Readable version:
//
//   (function() {
//     try {
//       var t = localStorage.getItem('theme');
//       var m = window.matchMedia &&
//               window.matchMedia('(prefers-color-scheme: dark)').matches;
//       var n = (t === 'dark' || t === 'light')
//             ? t
//             : (m ? 'dark' : 'light');
//       document.documentElement.setAttribute('data-theme', n);
//     } catch (e) {}
//   })();
//
// try/catch handles SSR, incognito mode, and disabled storage.

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches;var n=(t==='dark'||t==='light')?t:(m?'dark':'light');document.documentElement.setAttribute('data-theme',n);document.documentElement.style.colorScheme=n}catch(e){}})();`;

// ─── Structured Data (JSON-LD) ─────────────────────────────────

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Blocking script — sets data-theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <PersonSchema />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
