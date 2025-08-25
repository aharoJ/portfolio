// /Users/aharo/desk/repository/portfolio/src/components/clean/project/GithubStandardIcon.tsx

import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface SocialProps {
  path: string;
}

const ProjectsGithubIcon: React.FC<SocialProps> = ({ path }) => {
  return (
    <div className="flex space-x-4 lg:space-x-8">
      <Link
        href={path}
        className="lg:w-7 lg:h-7 w-6 h-6  rounded-full flex justify-center items-center  
        text-xl hover:bg-soft-moss/40  hover:transition-all duration-500"
        target="_blank"
      >
        <FaGithub className="text-3xl text-creamy-sage " />
      </Link>
    </div>
  );
};
export default ProjectsGithubIcon;
