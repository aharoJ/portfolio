import Timeline from "@/components/about/Timeline";
import AboutAnnouncement from "@/components/temp/AboutAnnouncement";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Timeline />
      </div>

      {/* <h1 className="flex container justify-center text-9xl"> DIVIDER </h1> */}
      <AboutAnnouncement/>
    </>
  );
};

export default page;
