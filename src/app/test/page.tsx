/* eslint-disable @typescript-eslint/no-unused-vars */
// @/TEST/(home)/page.tsx

import LandingAnimatedStatsDesktop from "@/modules/home/LandingAnimatedStatsDesktop";
import LandingAnimatedStatsMobile from "@/modules/home/LandingAnimatedStatsMobile";
import LandingAnimatedStatsSwipeMobile from "@/modules/home/LandingAnimatedStatsSwipeMobile";
import LandingDesktop from "@/modules/home/LandingDesktop";
import LandingMobile from "@/modules/home/LandingMobile";
import SkillsDesktop from "@/modules/home/SkillsDesktop";
import AnimateStatsDesktop from "@/modules/tempToDELETE/homes/AnimateStatsDesktop";

const Test = () => {
  return (
    <>
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
            <LandingAnimatedStatsSwipeMobile/>
          </div>
        </section>
        {/* --- --- --- --- ... .... ... --- --- --- --- */}
      </main>
    </>
  );
};

export default Test;
