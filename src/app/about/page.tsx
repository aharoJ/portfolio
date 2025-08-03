/* eslint-disable @typescript-eslint/no-unused-vars */
// path: @/app/about/page.tsx

import SkillOverview from "@/components/clean/skill-navigator/SkillNavigatorDesktop";
import TimelineDesktop from "@/modules/abouts/experience/ExperienceTimelineDesktop";

import EducationDesktop from "@/modules/abouts/education/EducationDesktop";
import React from "react";
import EducationMobile from "@/modules/abouts/education/EducationMobile";
import TimelineMobile from "@/modules/abouts/experience/ExperienceTimelineMobile";

const About = () => {
  return (
    <>
      {/* <div> */}
      {/*   <SkillOverview /> */}
      {/* </div> */}

      <section title="EDUCATION">
        <div className="hidden lg:block">
          <EducationDesktop />
        </div>
        <div className="block lg:hidden">
          <EducationMobile />
        </div>
      </section>

      <section title="EXPERIENCE">
        <div className="hidden lg:block">
          <TimelineDesktop />
        </div>
        <div className="block lg:hidden">
          <TimelineMobile />
        </div>
      </section>

      {/* <h1 className="flex container justify-center text-9xl"> DIVIDER </h1> */}
    </>
  );
};

export default About;
