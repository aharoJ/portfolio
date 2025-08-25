import { Button } from "@/components/ui/button";
import React from "react";
import { GoProjectSymlink } from "react-icons/go";

const HomeGoToProjectsBtn = () => {
  return (
    <a
      href="https://www.aharoj.io/projects" // Change this to the path of your PDF
      target="_self" // Optional: _blank | _parent | _self | _top
      rel="noopener noreferrer" // Optional: Adds security for external links
    >
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>Visit Projects</span>
        <GoProjectSymlink className="text-xl" />
      </Button>
    </a>
  );
};

export default HomeGoToProjectsBtn;
