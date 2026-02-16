"use client";
// **********************************
// ORIGINAL RESUME CODE 08.15.2024
// **********************************
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

// Experience Data
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

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface EducationList {
  icon: string;
  title: string;
  description: string;
  items: EducationItem[];
}

// Education Data
const education: EducationList = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "CSUDH ",
      degree: "CS",
      duration: "2023",
    },
  ],
};

interface SkillItem {
  icon: ReactNode;
  name: string;
}

interface SkillList {
  title: string;
  description: string;
  skillList: SkillItem[];
}

const skills: SkillList = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
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
  ],
};

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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold "> {education.title} </h3>
                <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className=" text-primary">{item.duration}</span>
                          <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                            <p className="text-white/60">{item.institution} </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>

            {/* RETURN SKILLS */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold"> {skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
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












