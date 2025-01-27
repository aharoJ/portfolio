
import React from "react";
import portfolio from "../../../public/projects/portfolio.png";
import DesktopFeaturedProject from "../clean/project/DesktopFeaturedProject";

const LandingDesktopProject: React.FC = () => {
  return (
    <main className="container mx-auto my-24 flex w-full">
      <DesktopFeaturedProject
        title="Portfolio"
        img={portfolio}
        description="View the portfolio codebase. Along with a variety of projects, including backend, frontend, full-stack, machine learning, devops, 
            and open-source contributions."
        github="https://github.com/aharoJ/portfolio"
        link="https://github.com/aharoJ/portfolio"
        hashtags={["Typescript", "Next.js 14 ", "TailwindCSS", "Framer Motion"]}
      />
    </main>
  );
};

export default LandingDesktopProject;
