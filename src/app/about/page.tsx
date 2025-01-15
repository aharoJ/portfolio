import SkillOverview from "@/components/clean/skill-navigator/SkillNavigatorDesktop";
import TimelineDesktop from "@/components/clean/experience/ExperienceTimelineDesktop";

import EducationDesktop from "@/components/clean/education/EducationDesktop";
import React from "react";
import EducationMobile from "@/components/clean/education/EducationMobile";
import TimelineMobile from "@/components/clean/experience/ExperienceTimelineMobile";

const About = () => {
  return (
    <>
      {/* <div>
        <SkillOverview />
      </div> */}

      <section title="EDUCATION">
        <div className="hidden lg:block">
          <EducationDesktop />
        </div>
        <div className="block lg:hidden">
          <EducationMobile/>
        </div>
      </section>
      
      <section title="EXPERIENCE">
        <div className="hidden lg:block">
          <TimelineDesktop />
        </div>
        <div className="block lg:hidden">
          <TimelineMobile/>
        </div>
      </section>


      {/* <h1 className="flex container justify-center text-9xl"> DIVIDER </h1> */}
    </>
  );
};

export default About;
