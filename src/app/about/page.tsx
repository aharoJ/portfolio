/* eslint-disable @typescript-eslint/no-unused-vars */
// path: @/app/test/page.tsx

import SkillsDesktop from "@/modules/skills/SkillsDesktop";
import React from "react";

import SkillOverview from "@/components/clean/skill-navigator/SkillNavigatorDesktop";
import TimelineDesktop from "@/modules/abouts/experience/ExperienceTimelineDesktop";
import EducationDesktop from "@/modules/education/EducationDesktop";
import EducationMobile from "@/modules/abouts/education/EducationMobile";
import TimelineMobile from "@/modules/abouts/experience/ExperienceTimelineMobile";
import ExperienceTimelineDesktop from "@/modules/experience/ExperienceDesktop";

const Test = () => {
  return (
    <>
      {/* -------------------- Education Section -------------------- */}
      <section title="EDUCATION">
        <div className="hidden lg:block">
          {/* <EducationDesktop /> */}
          <EducationDesktop />
        </div>
        <div className="block lg:hidden">{/* <EducationMobile /> */}</div>
      </section>

      {/* -------------------- Experience Section -------------------- */}
      <section title="EXPERIENCE">
        <div className="hidden lg:block">
          <ExperienceTimelineDesktop />
        </div>
        <div className="block lg:hidden">{/* <TimelineMobile /> */}</div>
      </section>

      {/* -------------------- Skills Section -------------------- */}
      <section title="ANIMATED STATS">
        <div className="hidden lg:block">
          <SkillsDesktop />
        </div>
        <div className="block lg:hidden">{/* <SkillsMobile /> */}</div>
      </section>
      {/* --- --- --- --- ... .... ... --- --- --- --- */}
    </>
  );
};

export default Test;
