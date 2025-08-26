// path: @/modules/home/LandingMobile.tsx

import Image from "next/image";
import SocialMobile from "@/modules/socials/mobile";
import LandingAboutBtn from "./LandingAboutBtn";

export default function LandingMobile() {
  return (
    <section aria-label="Landing (Mobile)" className="relative">
      <div className="mx-auto w-full px-5 py-8">
        {/* --- Portrait --- */}
        <div className="mx-auto mb-5 grid place-items-center">
          <div className="relative h-36 w-36">
            <Image
              src="/profile/aharoJ.jpeg"
              alt="Portrait of Angel Jair Haro"
              fill
              priority
              sizes="(max-width: 1023px) 9rem"
              className="rounded-full object-cover ring-1 ring-white/15 shadow-lg"
            />
          </div>
        </div>

        {/* --- Headline --- */}
        <header className="text-center">
          <h1 className="text-[32px] leading-tight font-semibold tracking-tight text-creamy-ivory">
            Angel Jair Haro
          </h1>
          <p className="mt-1 flex items-center justify-center gap-2">
            <span className="text-[15px] text-creamy-ivory">
              Software Engineer
            </span>
            <span className="text-[14px] italic text-creamy-sage">
              / aharoJ
            </span>
          </p>
        </header>

        {/* --- Quote --- */}
        <figure className="mx-auto mt-4 max-w-md">
          <blockquote className="border-l border-white/10 pl-3 text-creamy-bone text-[15px] leading-relaxed">
            You are a function of what the whole universe is doing in the same
            way that a wave is a function of what the whole ocean is doing.
          </blockquote>
          <figcaption className="mt-2 text-creamy-sage italic text-[13px]">
            — Alan Watts
          </figcaption>
        </figure>

        {/* --- CTA + Socials --- */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <LandingAboutBtn />
          <SocialMobile />
        </div>
      </div>
    </section>
  );
}
