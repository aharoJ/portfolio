// path: @/app/test/page.tsx

import React from "react";
import ProjectDesktop from "@/modules/projects/ProjectDesktop";
import ProjectMobile from "@/modules/projects/ProjectMobile";

const TestingProjectsPage: React.FC = () => {
  return (
    <>
      <section aria-label="Projects">
        <div className="hidden lg:block">
          <ProjectDesktop/>
        </div>
        <div className="block lg:hidden">
          <ProjectMobile />
        </div>
      </section>
    </>
  );
};

export default TestingProjectsPage;
