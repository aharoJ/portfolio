"use client";
import React, { ReactNode } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiNextui } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

// ************** EXPERIENCE ********************
interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

interface ExperienceList {
  icon: string;
  title: string;
  description: string;
  items: ExperienceItem[];
}

const experience: ExperienceList = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Unity Backend Dev",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Discord Mod ",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },

    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Unity Backend Dev",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Discord Mod ",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ],
};
// **********************************

// ************** EDUCATION ********************
interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  gpa?: string;
  details: string[];
}

interface EducationList {
  icon: string;
  title: string;
  items: EducationItem[];
}

const education: EducationList = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  items: [
    {
      institution: "California State University, Dominguez Hills",
      degree: "Bachelor of Science in Computer Science (CSUDH)",
      location: "Carson, California",
      gpa: "3.4", // Add your GPA here
      details: [
        "Google Scholarship: Awarded a scholarship under the mentorship of Dr. Tang as a Google Explorer.",
        "GMiS Conference: Achieved 2nd place out of 300+ contestants, competed in a hackathon and placed 5th place.",
        "Research for LREU: Received funding for Mutation Research.",
        "Summer Cord: Led a competitive robotics summer course, engaging over 40 students in advanced problem-solving, coding and designed a maze challenge, which students navigated using robots programmed with JavaScript and Swift.",
        "T-Mobile Regional Best Seller: Recognized as the most influential M-expert & shadow Trainer for the East Los Angeles Region.",
        "Awards: Latinos for Engineering Class Scholarship – Latinos for Engineering Class Scholarship | Honors Society within the Universities club to receive external benefits.",
        "Technical Coursework: Intro to CS and Programming (I, II, III), Software Development, Assembly, Discrete Structures, Applied Data Structures, Data Structures, Computer Organization, Machine Learning, Analysis of Algorithms, Relational Database, Senior Design.",
      ],
    },
  ],
};

// **********************************

// ************** SKILLS ********************
interface SkillItem {
  icon: ReactNode;
  name: string;
}

interface SkillList {
  title: string;
  skillList: SkillItem[];
}

const skills: SkillList = {
  title: "My skills",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiNextui />, name: "NextUI" },

    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiNextui />, name: "NextUI" },
  ],
};
// **********************************

// ************** ABOUT ********************
interface AboutItem {
  fieldName: string;
  fieldValue: string;
}

interface AboutList {
  title: string;
  description: string;
  info: AboutItem[];
}

const about: AboutList = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  info: [
    { fieldName: "Name", fieldValue: "Angel J Haro" },
    { fieldName: "Phone", fieldValue: "+1 (562) 000 - 0000" },
    { fieldName: "Experience", fieldValue: "2+ years" },
    { fieldName: "Email", fieldValue: "hehe@gmail.com" },
  ],
};
// **********************************

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experience </TabsTrigger>
            <TabsTrigger value="education"> Education </TabsTrigger>
            <TabsTrigger value="skills"> Skills </TabsTrigger>
            <TabsTrigger value="about"> About me </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full ">
            {/* RETURN EXPERIENCE */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold "> {experience.title} </h3>
                <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className=" text-primary">{item.duration}</span>
                          <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-primary">
                              {" "}
                            </span>
                            <p className="text-white/60"> {item.company} </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>

            {/* RETURN EDUCATION */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[10px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {education.title} </h3>
                <div className="max-w-[1200px] text-white/60 mx-auto ">
                  <ScrollArea className="h-[400px] rounded-xl ">
                    {" "}
                    {/* Added ScrollArea */}
                    <div className="bg-[#232329] p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2 mt-8 shadow-lg">
                      <div className="flex justify-between w-full">
                        <span className="text-white/60 text-lg font-semibold">
                          {education.items[0].location}
                        </span>
                        <span className="text-white/60 text-lg font-semibold">
                          GPA: {education.items[0].gpa}
                        </span>
                      </div>
                      <h3 className="text-2xl font-normal text-center lg:text-left ">
                        {education.items[0].degree}
                      </h3>
                      <div className="text-primary tracking-wide text-xl">
                        {education.items[0].institution}
                      </div>
                      {/* Bullet Points Inside the Background */}
                      <ul className="list-disc pl-6 mt-4 space-y-2 text-white/60">
                        {education.items[0].details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>

            {/* RETURN SKILLS */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[10px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {skills.title} </h3>
                <div className="max-w-[1200] mx-auto xl:mx-0 mt-8">
                  <ScrollArea className="h-[400px] rounded-xl bg-[#232329] p-6 shadow-lg">
                    <ul className="grid grid-cols-3 gap-[30px] gap-y-14">
                      {skills.skillList.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#1e1e24] rounded-xl flex items-center justify-center group">
                                <div className="text-8xl group-hover:text-primary transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p> {skill.name} </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
            {/* RETURN ABOUT */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold "> {about.title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                  mx-auto"
                >
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60"> {item.fieldName}</span>
                      <span className=" text-xl"> {item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
