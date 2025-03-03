// @/app/layout.tsx
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Head from "next/head";
import ScrollToTopButton from "@/components/clean/ScrollToTopButton";
import EndOfPageMessage from "@/modules/layouts/EndOfPageMessage";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  // 𒌐  <--- Berserk ICON
  title: "aharoJ",
  description: "Welcome to my portfolio!",
  openGraph: {
    title: "aharoJ",
    description: "Welcome to my portfolio!",
    url: "https://aharoJ.io",
    images: [
      {
        // url: "https://aharoJ.io/profile/aharoJBackgroundRemoved.png",
        url: "https://aharoJ.io/profile/aharoJ.png",
        width: 1200,
        height: 630,
        alt: "Profile preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "aharoJ",
    description: "My personal portfolio",
    // images: ["https://aharoJ.io/profile/aharoJBackgroundRemoved.png"],
    images: ["https://aharoJ.io/profile/aharoJ.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta property="og:url" content="https://aharoj.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="aharoJ - Software Engineer" />
        <meta property="og:description" content="Angel Jair Haro's portfolio" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <EndOfPageMessage />
        {/* <ScrollToTopButton /> */}
      </body>
    </html>
  );
}
