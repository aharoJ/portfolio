// path: @/modules/home/LandingDesktop.tsx

import SocialDesktop from "@/modules/socials/desktop";
import Image from "next/image";
import LandingAboutBtn from "./LandingAboutBtn";

const LandingDesktop = () => {
  return (
    <section aria-label="Landing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-12 items-center gap-12">
          {/* ---------------- Text Column ---------------- */}
          <div className="col-span-7">
            <header className="mb-7">
              <h1 className="text-6xl font-semibold leading-tight tracking-tight text-creamy-ivory">
                Angel Jair Haro
              </h1>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-xl text-creamy-ivory">
                  Software Engineer
                </span>
                <span className="text-lg italic text-creamy-sage">
                  / aharoJ
                </span>
              </p>
            </header>

            <figure className="max-w-xl">
              <blockquote className="border-l border-white/10 pl-4 text-creamy-bone text-lg leading-relaxed">
                You are a function of what the whole universe is doing in the
                same way that a wave is a function of what the whole ocean is
                doing.
              </blockquote>
              <figcaption className="mt-3 text-creamy-sage italic">
                — Alan Watts
              </figcaption>
            </figure>

            {/* Socials */}
            {/* <div className="flex flex-row gap-8 items-center" aria-label="Social links"> */}
            <div
              className="mt-4 flex items-center gap-8"
              aria-label="Social links"
            >
              <LandingAboutBtn />
              <SocialDesktop />
            </div>
          </div>

          {/* ---------------- Image Column ---------------- */}
          <div className="col-span-5 justify-self-center">
            <div className="relative aspect-square w-[22rem] max-w-full">
              <Image
                src="/profile/aharoJ.jpeg"
                alt="Portrait of Angel Jair Haro"
                fill
                priority
                sizes="(min-width: 1024px) 22rem, 50vw"
                className="rounded-full object-cover ring-1 ring-white/15 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingDesktop;
