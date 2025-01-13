"use client";
import React, { ReactNode } from "react";

import {
  FaJava,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";

import {
  SiSpring,
  SiPostman,
  SiReact,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiApachecassandra,
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiRedux,
  SiFramer,
  SiThreedotjs,
  SiFlask,
  SiDjango,
  SiTypescript,
  SiJavascript,
  SiKubernetes,
  SiGooglecloud,
  SiMicrosoftazure,
  SiAmazonaws,
  SiZsh,
  SiGnubash,
  SiFishshell,
  SiThymeleaf,
  SiApachemaven,
  SiSpringboot,
  SiApachetomcat,
  SiVite,
  SiRust,
  SiTmux,
  // SiYabai,
  SiToml,
  SiLua,
} from "react-icons/si";

import { BsFiletypeXml } from "react-icons/bs";

import { GiEgyptianBird } from "react-icons/gi";

import { DiVim } from "react-icons/di";

import { GiDwarfFace } from "react-icons/gi";

import { FaDocker, FaJenkins } from "react-icons/fa";

import { TbH2 } from "react-icons/tb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

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

// ************** BACKEND SKILLS ********************
interface BackendItem {
  icon: ReactNode;
  icon_name: string;
}

interface BackendList {
  title: string;
  backendList: BackendItem[];
}

const backend: BackendList = {
  title: "Backend Stuff",
  backendList: [
    { icon: <FaJava />, icon_name: "Java" },
    { icon: <SiPython />, icon_name: "Python" },
    { icon: <SiRust />, icon_name: "Rust" },
    { icon: <BsFiletypeXml />, icon_name: "XML" },
    { icon: <SiApachemaven />, icon_name: "Apachemaven" },
    { icon: <GiDwarfFace />, icon_name: "LittleDarwin" },
    { icon: <GiEgyptianBird />, icon_name: "Pitest" },
    { icon: <SiSpring />, icon_name: "Spring" },
    { icon: <SiSpringboot />, icon_name: "Spring Boot" },
    { icon: <SiThymeleaf />, icon_name: "Thymeleaf" },
    { icon: <SiFlask />, icon_name: "Flask" },
    { icon: <SiDjango />, icon_name: "Django" },
    { icon: <SiPostman />, icon_name: "Postman" },
  ],
};
// **********************************

// ************** DATABASE SKILLS ********************
interface DatabaseItem {
  icon: ReactNode;
  icon_name: string;
}

interface DatabaseList {
  title: string;
  databaseList: DatabaseItem[];
}

const database: DatabaseList = {
  title: "Database Stuff",
  databaseList: [
    { icon: <SiPostgresql />, icon_name: "PostgreSQL" },
    { icon: <TbH2 />, icon_name: "H2 Database" },
    { icon: <SiMysql />, icon_name: "MySQL" },
    { icon: <SiApachecassandra />, icon_name: "Apache Cassandra" },
    { icon: <SiMongodb />, icon_name: "MongoDB" },
  ],
};
// **********************************

// ************** DEVOPS SKILLS ********************
interface DevOpsItem {
  icon: ReactNode;
  icon_name: string;
}

interface DevOpsList {
  title: string;
  devopsList: DevOpsItem[];
}

const devops: DevOpsList = {
  title: "DevOps Stuff",
  devopsList: [
    { icon: <SiFishshell />, icon_name: "Fish Shell" },
    { icon: <DiVim />, icon_name: "Nvim / Vim" },
    { icon: <SiGnubash />, icon_name: "Bash" },
    { icon: <SiZsh />, icon_name: "Zsh" },
    { icon: <SiToml />, icon_name: "TOML" },
    { icon: <SiLua />, icon_name: "Nvim / Vim" },
    { icon: <FaDocker />, icon_name: "Docker" },
    { icon: <SiApachetomcat />, icon_name: "Apachetomcat" },
    { icon: <SiKubernetes />, icon_name: "Kubernetes" },
    { icon: <FaJenkins />, icon_name: "Jenkins" },
    { icon: <SiGooglecloud />, icon_name: "Google Cloud Platform" },
    { icon: <SiMicrosoftazure />, icon_name: "Microsoft Azure" },
    { icon: <SiAmazonaws />, icon_name: "AWS" },
    { icon: <SiTmux />, icon_name: "Tmux" },
  ],
};
// **********************************

// ************** FRONTEND SKILLS ********************
interface FrontendItem {
  icon: ReactNode;
  icon_name: string;
}

interface FrontendList {
  title: string;
  frontendList: FrontendItem[];
}

const frontend: FrontendList = {
  title: "Frontend Stuff",
  frontendList: [
    { icon: <SiTypescript />, icon_name: "TypeScript" },
    { icon: <SiJavascript />, icon_name: "JavaScript" },
    { icon: <FaHtml5 />, icon_name: "HTML 5" },
    { icon: <FaCss3 />, icon_name: "CSS 3" },
    { icon: <SiReact />, icon_name: "React" },
    { icon: <SiNextdotjs />, icon_name: "Next.js" },
    { icon: <SiVite />, icon_name: "Vite.js" },
    { icon: <SiTailwindcss />, icon_name: "Tailwind CSS" },
    { icon: <SiBootstrap />, icon_name: "Bootstrap" },
    { icon: <SiRedux />, icon_name: "Redux" },
    { icon: <SiFramer />, icon_name: "Framer Motion" },
    { icon: <SiThreedotjs />, icon_name: "Three.js" },
  ],
};
// **********************************

const Resume = () => {
  return (
    <>
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
            defaultValue="education"
            className="flex flex-col md:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="education"> Education </TabsTrigger>
              <TabsTrigger value="backend"> Backend </TabsTrigger>
              <TabsTrigger value="database"> Database </TabsTrigger>
              <TabsTrigger value="devops"> DevOps </TabsTrigger>
              <TabsTrigger value="frontend"> Frontend </TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full ">
              {/* RETURN EDUCATION */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[10px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {education.title} </h3>
                  <div className="max-w-[1200px] text-white/60 mx-auto ">
                    <ScrollArea className="h-[400px] rounded-xl ">
                      {/* Added ScrollArea */}
                      <div className="bg-[#232329] p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2 mt-2 shadow-lg">
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

              {/* RETURN BACKEND SKILLS */}
              <TabsContent value="backend" className="w-full h-full">
                <div className="flex flex-col gap-[10px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {backend.title} </h3>
                  <div className="max-w-[1200] mx-auto xl:mx-0 mt-2">
                    <ScrollArea className="h-[400px] rounded-xl bg-[#232329] p-6 shadow-lg">
                      <ul className="grid grid-cols-3 gap-[30px] gap-y-14">
                        {backend.backendList.map((backend, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#1e1e24] rounded-xl flex items-center justify-center group">
                                  <div className="text-8xl group-hover:text-primary transition-all duration-300">
                                    {backend.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p> {backend.icon_name} </p>
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

              {/* RETURN DATABASE SKILLS */}
              <TabsContent value="database" className="w-full h-full">
                <div className="flex flex-col gap-[10px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {database.title} </h3>
                  <div className="max-w-[1200] mx-auto xl:mx-0 mt-2">
                    <ScrollArea className="h-[400px] rounded-xl bg-[#232329] p-6 shadow-lg">
                      <ul className="grid grid-cols-3 gap-[30px] gap-y-14">
                        {database.databaseList.map((database, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#1e1e24] rounded-xl flex items-center justify-center group">
                                  <div className="text-8xl group-hover:text-primary transition-all duration-300">
                                    {database.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p> {database.icon_name} </p>
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

              {/* RETURN DEVOPS SKILLS */}
              <TabsContent value="devops" className="w-full h-full">
                <div className="flex flex-col gap-[10px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {devops.title} </h3>
                  <div className="max-w-[1200] mx-auto xl:mx-0 mt-2">
                    <ScrollArea className="h-[400px] rounded-xl bg-[#232329] p-6 shadow-lg">
                      <ul className="grid grid-cols-3 gap-[30px] gap-y-14">
                        {devops.devopsList.map((devopsItem, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#1e1e24] rounded-xl flex items-center justify-center group">
                                  <div className="text-8xl group-hover:text-primary transition-all duration-300">
                                    {devopsItem.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p> {devopsItem.icon_name} </p>
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

              {/* RETURN FRONTEND SKILLS */}
              <TabsContent value="frontend" className="w-full h-full">
                <div className="flex flex-col gap-[10px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {frontend.title} </h3>
                  <div className="max-w-[1200] mx-auto xl:mx-0 mt-2">
                    <ScrollArea className="h-[400px] rounded-xl bg-[#232329] p-6 shadow-lg">
                      <ul className="grid grid-cols-3 gap-[30px] gap-y-14">
                        {frontend.frontendList.map((frontend, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#1e1e24] rounded-xl flex items-center justify-center group">
                                  <div className="text-8xl group-hover:text-primary transition-all duration-300">
                                    {frontend.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p> {frontend.icon_name} </p>
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
            </div>
          </Tabs>
        </div>
      </motion.div>
      <h1 className="text-5xl justify-center"> LALALA</h1>
    </>
  );
};

export default Resume;
