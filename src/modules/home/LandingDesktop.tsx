// path: @/modules/home/LandingDesktop.tsx

import SocialDesktop from "@/modules/socials/desktop";
import Image from "next/image";

const LandingDesktop = () => {
  return (
    <section aria-label="Landing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-12 items-center gap-12">
          {/* ---------------- Text Column ---------------- */}
          <div className="col-span-7">
            <header className="mb-7">
              <h1 className="text-6xl font-semibold leading-tight tracking-tight">
                Angel Jair Haro
              </h1>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-xl">Software Engineer</span>
                <span className="text-lg italic text-primary/90">/ aharoJ</span>
              </p>
            </header>

            <figure className="max-w-xl">
              <blockquote className="border-l border-white/10 pl-4 text-white/80 text-lg leading-relaxed">
                You are a function of what the whole universe is doing in the
                same way that a wave is a function of what the whole ocean is
                doing.
              </blockquote>
              <figcaption className="mt-3 text-primary italic">
                — Alan Watts
              </figcaption>
            </figure>

            {/* Socials */}
            <div className="mt-8" aria-label="Social links">
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
