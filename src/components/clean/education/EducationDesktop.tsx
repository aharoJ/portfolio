import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

// ************** EDUCATION ********************
interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  gpa?: string;
  achievements: string[];
  awards: string[];
  coursework: string[];
}

interface EducationList {
  title?: string;
  items: EducationItem[];
}

const education: EducationList = {
  title: "Education",
  items: [
    {
      institution: "California State University, Dominguez Hills (CSUDH)",
      degree: "Bachelor of Science in Computer Science",
      location: "Carson, California",
      gpa: "3.4",
      achievements: [
        "Google Scholarship: Awarded a $3,000 scholarship under the mentorship of Dr. Tang as a Google Explorer.",
        "GMiS Conference: Achieved 2nd place out of 300+ contestants, competed in a hackathon, and placed 5th.",
        "Research for LREU: Received $1,500 in funding for Mutation Research.",
        "Summer Cord: Led a competitive robotics summer course, engaging over 40 students in a maze challenge, which students navigated using robots programmed with JavaScript and Swift.",
        "T-Mobile Regional Best Seller: Recognized as the most influential M-expert & shadow Trainer for the East Los Angeles Region.",
      ],
      awards: [
        "Latinos for Engineering Class Scholarship - Fall (2022)",
        "Latinos for Engineering Class Scholarship - Spring (2023), $1,500 scholarship",
        "Accepted into Google program with Googlers and school’s professor to explore various Computer Science fields",
        "Nominated and invited to join the Honors Society within the Universities club to receive external benefits",
      ],
      coursework: [
        // "Intro to CS and Programming (I, II, III)",
        // "Software Development, Assembly, Discrete Structures",
        // "Applied Data Structures, Data Structures",
        // "Computer Organization, Machine Learning",
        // "Analysis of Algorithms, Relational Database, Senior Design",

        "Intro to CS and Programming (I, II, III)",
        "Software Development",
        "Assembly",
        "Discrete Structures",
        "Applied Data Structures",
        "Data Structures",
        "Computer Organization",
        "Machine Learning",
        "Analysis of Algorithms",
        "Relational Database",
        "Senior Design",
      ],
    },
  ],
};

const EducationSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="mt-2 text-start">
    <h4 className="text-white/80 text-xl font-bold mb-2">{title}</h4>
    <ul className="list-disc pl-4 space-y-2 text-xl text-white/60">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const EducationDesktop = () => {
  const {
    degree,
    institution,
    location,
    gpa,
    achievements,
    awards,
    coursework,
  } = education.items[0];

  return (
    <div className="flex flex-col text-center ">
      <h3 className="text-7xl font-bold my-12">{education.title}</h3>
      <div className="max-w-[1200px] text-white/60 mx-auto">
        <ScrollArea className="h-[400px] rounded-xl">
          {/* Main content container */}
          <div className="bg-[#232329] p-6 rounded-xl flex flex-col gap-1 mt-2 shadow-lg">
            {/* Row 1: Degree and Institution */}
            <div className="flex justify-between w-full text-white/60 text-xl font-semibold">
              <span>{degree}</span>
              <span>{location}</span>
            </div>
            {/* Row 2: Location and GPA */}
            <div className="flex justify-between w-full text-white/60 text-xl font-semibold">
              <span className="text-primary">{institution}</span>
              <span>GPA: {gpa}</span>
            </div>
            {/* Sections */}
            <EducationSection title="Achievements" items={achievements} />
            <EducationSection title="Awards" items={awards} />
            <EducationSection title="Technical Coursework" items={coursework} />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default EducationDesktop;