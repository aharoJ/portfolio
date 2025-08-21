// @(home)/page.tsx

import LandingAnimatedStatsDesktop from "@/modules/home/LandingAnimatedStatsDesktop";
import LandingAnimatedStatsSwipeMobile from "@/modules/home/LandingAnimatedStatsSwipeMobile";
import LandingDesktop from "@/modules/home/LandingDesktop";
import LandingMobile from "@/modules/home/LandingMobile";

export default function Home() {
  return (
    <main>
      {/* --- --- --- --- HERO PAGE --- --- --- --- */}
      <section aria-label="SOCIAL ICONS">
        <div className="hidden lg:block">
          <LandingDesktop />
        </div>
        <div className="block lg:hidden">
          <LandingMobile />
        </div>
      </section>
      {/* --- --- --- --- ... .... ... --- --- --- --- */}

      {/* -------------------- animate stats -------------------- */}
      <section aria-label="ANIMATED STATS">
        <div className="hidden lg:block">
          <LandingAnimatedStatsDesktop />
        </div>
        <div className="block lg:hidden">
          {/* <LandingAnimatedStatsMobile /> */}
          <LandingAnimatedStatsSwipeMobile />
        </div>
      </section>
      {/* --- --- --- --- ... .... ... --- --- --- --- */}
    </main>
  );
}
