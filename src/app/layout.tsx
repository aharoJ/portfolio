// ═══════════════════════════════════════════════════════════════
// src/app/layout.tsx
// ═══════════════════════════════════════════════════════════════
//
// THE ROOT. Every page inherits from this.
//
// THEME TOGGLE — HARDENED (v4):
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
//   FIX G → Removed inline style.colorScheme from blocking script.
//     CSS handles color-scheme entirely through the
//     [data-theme="dark"] { color-scheme: dark } rule in
//     globals.css. The data-theme attribute triggers the CSS rule,
//     which triggers color-scheme — no inline style needed.
//     This eliminates a specificity conflict where the inline
//     style could override CSS in edge cases (forced themes,
//     stale bfcache restores).
//
//   FIX I → (v4) Static <meta name="color-scheme" content="light dark">.
//     The color-scheme meta tag's job is to declare what schemes
//     the page SUPPORTS, not which one is ACTIVE. Setting it
//     statically to "light dark" tells Chrome Auto Dark Mode
//     "I handle both — don't force anything" and lets the CSS
//     rule [data-theme="dark"] { color-scheme: dark } in
//     globals.css drive the active scheme.
//
//     v3 dynamically flipped this meta between "light" and "dark"
//     on every toggle, which required syncColorSchemeMeta() calls
//     in ThemeProvider + a blocking script line. That's gone now.
//     Fewer DOM writes, fewer sync points, more spec-correct.
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
// v4: Simplified — no longer flips color-scheme meta. The static
// <meta name="color-scheme" content="light dark"> in <head>
// declares support for both schemes. CSS drives the active one.
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
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches;var n=(t==='dark'||t==='light')?t:(m?'dark':'light');document.documentElement.setAttribute('data-theme',n)}catch(e){}})();`;
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
        {/* FIX I (v4): Static color-scheme meta — declares support
            for both schemes. Tells Chrome Auto Dark Mode "I handle
            dark mode myself." CSS drives the active scheme via
            [data-theme="dark"] { color-scheme: dark } */}
        <meta name="color-scheme" content="light dark" />
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
