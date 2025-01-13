import React from "react";
import StandardGridDesktop from "@/components/projecto/standard/grid/StandardGridDesktop";
import StandardGridMobile from "@/components/projecto/standard/grid/StandardGridMobile";

const Projects: React.FC = () => {
  return (
    <>
      {/* <h1 className="h1 flex justify-center mb-24"> Featured Desktop </h1> */}
      <StandardGridDesktop />

      {/* <h1 className="h1 flex justify-center mb-24">Standard Desktop Project</h1> */}
      <StandardGridMobile />

      {/* <h1 className="h1 flex justify-center mb-24"> Standard Mobile Project </h1> */}
      {/* <LandingStandardMobile/> */}
    </>
  );
};

export default Projects;
