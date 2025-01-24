import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface SocialProps {
  path: string;
}

const GithubStandardIcon: React.FC<SocialProps> = ({ path }) => {
  return (
    <div className="flex space-x-4 lg:space-x-8">
      <Link
        href={path}
        className="lg:w-7 lg:h-7 w-6 h-6 border border-primary rounded-full flex justify-center items-center text-primary 
        text-xl hover:bg-primary hover:text-red-600 hover:transition-all duration-500"
        target="_blank"
      >
        <FaGithub className="text-3xl text-gray-400 hover:text-black" />
      </Link>
    </div>
  );
};

export default GithubStandardIcon;
