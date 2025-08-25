// path: @/app/about/page.tsx
import React from "react";

import EducationDesktop from "@/modules/education/EducationDesktop";
import ExperienceDesktop from "@/modules/experience/ExperienceDesktop";
import EducationMobile from "@/modules/education/EducationMobile";
import ExperienceMobile from "@/modules/experience/ExperienceMobile";
import SkillsMobile from "@/modules/skills/SkillsMobile";
import SkillsDesktop from "@/modules/skills/SkillsDesktop";

const About = () => {
  return (
    <>
      {/* -------------------- Education Section -------------------- */}
      <section title="EDUCATION">
        <div className="hidden lg:block">
          <EducationDesktop />
        </div>
        <div className="block lg:hidden">
          <EducationMobile />
        </div>
      </section>

      {/* -------------------- Experience Section -------------------- */}
      <section title="EXPERIENCE">
        <div className="hidden lg:block">
          <ExperienceDesktop />
        </div>
        <div className="block lg:hidden">
          <ExperienceMobile />
        </div>
      </section>

      {/* -------------------- Skills Section -------------------- */}
      <section title="ANIMATED STATS">
        <div className="hidden lg:block">
          <SkillsDesktop />
          {/* <SkillsTestingggDesktop /> */}
        </div>
        <div className="block lg:hidden">
          <SkillsMobile />
          {/* <SkillsTestingggMobile /> */}
        </div>
      </section>
      {/* --- --- --- --- ... .... ... --- --- --- --- */}
    </>
  );
};

export default About;
