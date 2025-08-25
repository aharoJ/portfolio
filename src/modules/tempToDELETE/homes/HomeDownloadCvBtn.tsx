import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

const HomeDownloadCvBtn = () => {
  return (
    <a
      href="/path-to-your-pdf-file/angel-haro-cv.pdf" // Change this to the path of your PDF
      target="_blank" // Optional: Opens in a new tab
      rel="noopener noreferrer" // Optional: Adds security for external links
      download // Optional: Forces the file to download
    >
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </a>
  );
};

export default HomeDownloadCvBtn;
