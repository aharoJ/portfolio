"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const path = usePathname();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    // { label: "Resume", href: "/resume" }, -- I DONT USE IN PROD
    // { label: "Contact", href: "/contact" }, -- dont think we shud use it no more
  ];

  return (
    <header className="bg-black/20 text-white sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl">
          aharoJ
        </Link>
        <div className="flex space-x-4">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-sm transition-colors",
                path === href
                  ? "font-semibold text-primary"
                  : "text-gray-300 hover:text-primary",
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
