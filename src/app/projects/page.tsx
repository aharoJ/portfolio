import React from "react";
import ProjectDesktop from "@/components/clean/project/ProjectDesktop";
import ProjectMobile from "@/components/clean/project/ProjectMobile";

const Projects: React.FC = () => {
  return (
    <>
      {/* <h1 className="h1 flex justify-center mb-24"> Featured Desktop </h1> */}
      {/* <StandardGridDesktop /> */}
      
      <section title="Projects">
        <div className="hidden lg:block">
          {/* <Tim=elineDesktop /> */}
          {/* <StandardGridDesktop /> */}
          <ProjectDesktop />
        </div>
        <div className="block lg:hidden">
          {/* <StandardGridMobile /> */}
          <ProjectMobile/>
        </div>
      </section>

      {/* <h1 className="h1 flex justify-center mb-24"> Standard Mobile Project </h1> */}
      {/* <LandingStandardMobile/> */}
    </>
  );
};

export default Projects;
