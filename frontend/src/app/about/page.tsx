import SkillOverview from "@/components/acerca/SkillOverview";
import Timeline from "@/components/acerca/Timeline";
import AboutAnnouncement from "@/components/temp/AboutAnnouncement";
import React from "react";

const About = () => {
  return (
    <>
      <div>
        <SkillOverview />
      </div>

      <div>
        <Timeline />
      </div>

      {/* <h1 className="flex container justify-center text-9xl"> DIVIDER </h1> */}
      <AboutAnnouncement />
    </>
  );
};

export default About;
