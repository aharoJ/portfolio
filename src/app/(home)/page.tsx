// @(home)/page.tsx

import AnimateStatsDesktop from "@/modules/homes/AnimateStatsDesktop";
import SocialDesktop from "@/modules/socials/desktop";
import SocialMobile from "@/modules/socials/mobile";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="py-24 flex items-start">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
          {/* -------------------- Text Section -------------------- */}
          <section className="flex-1 order-2 md:order-none text-center md:text-left">
            <header className="mb-6">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                Angel Jair Haro
              </h1>
              <div className="mt-2 flex justify-center md:justify-start items-baseline gap-2">
                <span className="text-lg md:text-xl">
                  Software Engineer
                </span>
                <span className="italic text-primary/90 text-base md:text-lg">
                  / aharoJ
                </span>
              </div>
            </header>

            <blockquote className="max-w-lg mx-auto md:mx-0 text-white/80 text-base md:text-lg leading-relaxed">
              You are a function of what the whole universe is doing in the same
              way that a wave is a function of what the whole ocean is doing.
              <footer className="block mt-3 text-primary italic">
                — Alan Watts
              </footer>
            </blockquote>

            {/* --- --- --- --- SOCIAL ICONS --- --- --- --- */}
            <section title="SOCIAL ICONS">
              <div className="hidden lg:block">
                <SocialDesktop />
              </div>
              <div className="block lg:hidden">
                <SocialMobile />
              </div>
            </section>
            {/* --- --- --- --- ... .... ... --- --- --- --- */}
          </section>

          {/* -------------------- Profile Image -------------------- */}
          <section className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/profile/r.png"
                // src="/profile/aharoJ.png"
                alt="Angel Jair Haro"
                fill
                priority
                className="rounded-full object-cover"
              />
            </div>
          </section>
          {/* --- --- --- --- ... .... ... --- --- --- --- */}
        </div>
      </div>
      {/* -------------------- animate stats -------------------- */}
      <section title="ANIMATED STATS">
        <div className="hidden lg:block">
          <AnimateStatsDesktop />
        </div>
        <div className="block lg:hidden">{/* <LandingStatsMobile /> */}</div>
      </section>
      {/* --- --- --- --- ... .... ... --- --- --- --- */}
    </>
  );
}
