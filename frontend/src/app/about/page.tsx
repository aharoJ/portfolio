import SkillOverview from "@/components/clean/SkillNavigator";
import Timeline from "@/components/clean/Timeline";

import Education from "@/components/clean/education/Education";
import AboutAnnouncement from "@/components/temp/AboutAnnouncement";
import React from "react";

const About = () => {
  return (
    <>
      {/* <div>
        <SkillOverview />
      </div> */}

      <section>
        <Education />
      </section>

      <section>
        <Timeline />
      </section>

      {/* <h1 className="flex container justify-center text-9xl"> DIVIDER </h1> */}
      <AboutAnnouncement />
    </>
  );
};

export default About;
