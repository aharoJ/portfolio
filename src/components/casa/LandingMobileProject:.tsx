import React from "react";
import portfolio from "../../../public/projects/portfolio.png";
import FeaturedCardMobile from "../projecto/featured/FeaturedCardMobile";

const LandingMobileProject: React.FC = () => {
  return (
    <main className="container mx-auto my-24 flex w-auto">
      <FeaturedCardMobile
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

export default LandingMobileProject;
