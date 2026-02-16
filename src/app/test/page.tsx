/* eslint-disable @typescript-eslint/no-unused-vars */
// path: @/app/TESTING/page.tsx

import React from "react";

import EducationDesktop from "@/modules/education/EducationDesktop";
import ExperienceDesktop from "@/modules/experience/ExperienceDesktop";
import EducationMobile from "@/modules/education/EducationMobile";
import ExperienceMobile from "@/modules/experience/ExperienceMobile";
import SkillsMobile from "@/modules/skills/SkillsMobile";
import SkillsDesktop from "@/modules/skills/SkillsDesktop";
import TestingggExperienceDesktop from "@/modules/experience/TestingggExperienceDesktop";
import TestingggEducationDesktop from "@/modules/education/TestingggEducationDesktop";
import TestingggSkillsDesktop from "@/modules/skills/TestingggSkillsDesktop";

export default function TestingAboutPage() {
  return (
    <>
      {/* -------------------- Education Section -------------------- */}
      <section title="EDUCATION">
        <div className="hidden lg:block">
          {/* <EducationDesktop /> */}
          <TestingggEducationDesktop />
        </div>
        <div className="block lg:hidden">
          <EducationMobile />
        </div>
      </section>

      {/* -------------------- Experience Section -------------------- */}
      <section title="EXPERIENCE">
        <div className="hidden lg:block">
          {/* <ExperienceDesktop /> */}
          <TestingggExperienceDesktop />
        </div>
        <div className="block lg:hidden">
          <ExperienceMobile />
        </div>
      </section>

      {/* -------------------- Skills Section -------------------- */}
      <section title="ANIMATED STATS">
        <div className="hidden lg:block">
          {/* <SkillsDesktop /> */}
          <TestingggSkillsDesktop />
        </div>
        <div className="block lg:hidden">
          <SkillsMobile />
          {/* <SkillsTestingggMobile /> */}
        </div>
      </section>
      {/* --- --- --- --- ... .... ... --- --- --- --- */}
    </>
  );
}
