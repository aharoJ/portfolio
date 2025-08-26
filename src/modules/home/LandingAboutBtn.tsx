// @/modules/home/LandingAboutBtn.tsx
"use client";

import Link from "next/link";
import { GoProjectSymlink } from "react-icons/go";

export default function LandingAboutBtn() {
  return (
    <Link
      href="/about"
      aria-label="Go to About Me"
      className="
        group inline-flex items-center gap-2
        rounded-full px-5 py-2 text-sm font-semibold
        text-creamy-bone
        ring-1 ring-creamy-sage/70
        bg-neon-one backdrop-blur
        transition-[background,color,transform,ring] duration-150
        hover:bg-neon-two hover:text-creamy-bone hover:ring-creamy-sage
        active:scale-[0.98] focus:outline-none
        focus-visible:ring-2 focus-visible:ring-soft-moss
        will-change-transform
      "
    >
      <span>About&nbsp;Me</span>
      <GoProjectSymlink
        className="text-[18px] transition-transform duration-150 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
