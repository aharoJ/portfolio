// path: @/modules/home/LandingMobile.tsx

import SocialMobile from "@/modules/socials/mobile";
import Image from "next/image";

const LandingMobile = () => {
  return (
    <section aria-label="Landing (mobile)" className="relative">
      <div className="mx-auto max-w-2xl px-5 py-20">
        <div className="flex flex-col items-center gap-8">
          {/* Image first on mobile for instant identity */}
          <div className="relative aspect-square w-44 sm:w-52">
            <Image
              src="/profile/aharoJ.jpeg"
              alt="Portrait of Angel Jair Haro"
              fill
              priority
              sizes="(max-width: 1024px) 13rem, 22rem"
              className="rounded-full object-cover ring-1 ring-white/15 shadow-lg"
            />
          </div>

          {/* Text */}
          <header className="text-center">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight">
              Angel Jair Haro
            </h1>
            <p className="mt-2 flex items-baseline justify-center gap-2">
              <span className="text-lg">Software Engineer</span>
              <span className="text-base italic text-primary/90">/ aharoJ</span>
            </p>
          </header>

          {/* Quote */}
          <figure className="max-w-md text-center">
            <blockquote className="border-l border-white/10 pl-4 text-left text-white/80 text-base leading-relaxed sm:text-center">
              You are a function of what the whole universe is doing in the same
              way that a wave is a function of what the whole ocean is doing.
            </blockquote>
            <figcaption className="mt-3 text-primary italic">
              — Alan Watts
            </figcaption>
          </figure>

          {/* Socials */}
          <div aria-label="Social links" className="mt-2">
            <SocialMobile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMobile;
