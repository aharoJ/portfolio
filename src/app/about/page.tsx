/* eslint-disable @typescript-eslint/no-unused-vars */
// path: @/app/about/page.tsx

import React from "react";

import SkillOverview from "@/components/clean/skill-navigator/SkillNavigatorDesktop";
import EducationDesktop from "@/modules/education/EducationDesktop";
import ExperienceDesktop from "@/modules/experience/ExperienceDesktop";
import SkillsDesktop from "@/modules/skills/SkillsDesktop";

const About = () => {
  return (
    <>
      {/* -------------------- Education Section -------------------- */}
      <section title="EDUCATION">
        <div className="hidden lg:block">
          {/* <EducationDesktop /> */}
          <EducationDesktop />
        </div>
        <div className="block lg:hidden">
          <h1 className="text-2xl mx-auto text-wrap flex text-center justify-center mt-24"> UPDATE COMING SOON</h1>
          {/* <EducationMobile /> */}
        </div>
      </section>

      {/* -------------------- Experience Section -------------------- */}
      <section title="EXPERIENCE">
        <div className="hidden lg:block">
          <ExperienceDesktop />
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

export default About;
