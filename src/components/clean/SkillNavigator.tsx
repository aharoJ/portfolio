"use client";
import React, { ReactNode } from "react";

import {
  SiSpring,
  SiPostman,
  SiReact,
  SiPython,
  SiPostgresql,
  SiMysql,
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
  SiYabai,
  SiToml,
  SiLua,
  SiSpringsecurity,
  SiGit,
  SiHomebrew,
  SiVirtualbox,
  SiYaml,
  SiNeovim,
} from "react-icons/si";

import {
  FaKey,
  FaAws,
  FaDocker,
  FaJenkins,
  FaJava,
  FaHtml5,
  FaCss3,
  FaCubes, // microservices
  FaCube, // monolithic
  FaProjectDiagram, // MVC 
} from "react-icons/fa";

import { BsFiletypeXml } from "react-icons/bs";

import { GiEgyptianBird, GiDwarfFace, 
  GiSewingNeedle //  Dependency Injection
  } from "react-icons/gi";

import { DiVim } from "react-icons/di";

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
      institution: "California State University, Dominguez Hills (CSUDH)",
      degree: "Bachelor of Science in Computer Science",
      location: "Carson, California",
      gpa: "3.4",
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

// ************** LANGUAGES SKILLS ********************
interface LanguageItem {
  icon: ReactNode;
  icon_name: string;
}

interface LanguageList {
  title: string;
  languageList: LanguageItem[];
}

const language: LanguageList = {
  title: "Languages",
  languageList: [
    { icon: <FaJava />, icon_name: "Java" },
    { icon: <SiPython />, icon_name: "Python" },
    { icon: <SiRust />, icon_name: "Rust" },
    { icon: <SiTypescript />, icon_name: "TypeScript" },
    { icon: <SiJavascript />, icon_name: "JavaScript" },
    { icon: <FaHtml5 />, icon_name: "HTML" },
    { icon: <FaCss3 />, icon_name: "CSS" },
    { icon: <SiLua />, icon_name: "Lua" },
  ],
};

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
  title: "Backend",
  backendList: [
    { icon: <SiSpring />, icon_name: "Spring" },
    { icon: <SiSpringboot />, icon_name: "Spring Boot" },
    { icon: <FaKey />, icon_name: "JWT Security" },
    { icon: <SiSpringsecurity />, icon_name: "Spring Security" },
    { icon: <FaCube />, icon_name: "Monolithic" },
    { icon: <GiSewingNeedle />, icon_name: "Dependency Injection" },
    { icon: <FaProjectDiagram />, icon_name: "MVC Pattern" },
    { icon: <FaCubes />, icon_name: "Microservices" },
    { icon: <BsFiletypeXml />, icon_name: "XML" },
    { icon: <SiApachemaven />, icon_name: "Apachemaven" },
    { icon: <SiThymeleaf />, icon_name: "Thymeleaf" },
    { icon: <GiDwarfFace />, icon_name: "LittleDarwin" },
    { icon: <GiEgyptianBird />, icon_name: "Pitest" },
    { icon: <SiFlask />, icon_name: "Flask" },
    { icon: <SiDjango />, icon_name: "Django" },
    { icon: <SiPostman />, icon_name: "Postman" },
  ],
};

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
  title: "Database",
  databaseList: [
    { icon: <SiPostgresql />, icon_name: "PostgreSQL" },
    { icon: <TbH2 />, icon_name: "H2 Database" },
    { icon: <SiMysql />, icon_name: "MySQL" },
    { icon: <SiApachecassandra />, icon_name: "Apache Cassandra" },
  ],
};

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
  title: "DevOps",
  devopsList: [
    { icon: <SiGnubash />, icon_name: "Bash" },
    { icon: <SiZsh />, icon_name: "Zsh" },
    { icon: <SiFishshell />, icon_name: "Fish Shell" },
    { icon: <SiNeovim />, icon_name: "Neovim" },
    { icon: <SiToml />, icon_name: "TOML" },
    { icon: <SiYaml />, icon_name: "YAML" },
    { icon: <FaDocker />, icon_name: "Docker" },
    { icon: <SiApachetomcat />, icon_name: "Apachetomcat" },
    { icon: <SiKubernetes />, icon_name: "Kubernetes" },
    { icon: <FaJenkins />, icon_name: "Jenkins" },
    { icon: <SiGooglecloud />, icon_name: "Google Cloud Platform" },
    { icon: <FaAws />, icon_name: "AWS" },
    { icon: <SiTmux />, icon_name: "Tmux" },

    { icon: <SiTmux />, icon_name: "Tmux" },
    { icon: <SiHomebrew />, icon_name: "Homebrew" },
    { icon: <SiVirtualbox />, icon_name: "Virtualbox" },
    { icon: <SiYabai />, icon_name: "Yabai" },
    { icon: <SiGit />, icon_name: "Git" },
  ],
};

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
  title: "Frontend",
  frontendList: [
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

const SkillNavigator: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[40vh] flex items-center justify-center py-12 xl:py-0 container"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="languages"
            className="flex flex-col md:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              {/* <TabsTrigger value="education"> Education </TabsTrigger> */}
              <TabsTrigger value="languages"> Languages </TabsTrigger>
              <TabsTrigger value="backend"> Backend </TabsTrigger>
              <TabsTrigger value="database"> Database </TabsTrigger>
              <TabsTrigger value="devops"> DevOps </TabsTrigger>
              <TabsTrigger value="frontend"> Frontend </TabsTrigger>
            </TabsList>

            <div className="min-h-[40vh] w-full">
              {/* RETURN LANGUAGES SKILLS */}
              <TabsContent value="languages" className="w-full h-full">
                <div className="flex flex-col gap-[10px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {language.title} </h3>
                  <div className="max-w-[1200] mx-auto xl:mx-0 mt-2">
                    <ScrollArea className="h-[400px] rounded-xl bg-[#232329] p-6 shadow-lg">
                      <ul className="grid grid-cols-2 md:grid-cols-3 gap-[30px] gap-y-14">
                        {language.languageList.map((lang, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-auto h-auto md:w-full md:h-auto bg-[#1e1e24] p-0 md:p-8 rounded-xl flex items-center justify-center group">
                                  <div className="text-8xl group-hover:text-primary transition-all duration-300">
                                    {lang.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p> {lang.icon_name} </p>
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

              {/* RETURN BACKEND SKILLS */}
              <TabsContent value="backend" className="w-full h-full">
                <div className="flex flex-col gap-[10px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {backend.title} </h3>
                  <div className="max-w-[1200] mx-auto xl:mx-0 mt-2">
                    <ScrollArea className="h-[400px] rounded-xl bg-[#232329] p-6 shadow-lg">
                      <ul className="grid grid-cols-2 md:grid-cols-3 gap-[30px] gap-y-14">
                        {backend.backendList.map((item, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-auto h-auto md:w-full md:h-auto bg-[#1e1e24] p-0 md:p-8 rounded-xl flex items-center justify-center group">
                                  <div className="text-8xl group-hover:text-primary transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p> {item.icon_name} </p>
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
                      <ul className="grid grid-cols-2 md:grid-cols-3 gap-[30px] gap-y-14">
                        {database.databaseList.map((db, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-auto h-auto md:w-full md:h-auto bg-[#1e1e24] p-0 md:p-8 rounded-xl flex items-center justify-center group">
                                  <div className="text-8xl group-hover:text-primary transition-all duration-300">
                                    {db.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p> {db.icon_name} </p>
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
                    <ScrollArea className="h-[400px]  rounded-xl bg-[#232329] p-6 shadow-lg">
                      <ul className="grid grid-cols-2 md:grid-cols-3 gap-[30px] gap-y-14">
                        {devops.devopsList.map((devopsItem, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-auto h-auto md:w-full md:h-auto bg-[#1e1e24] p-0 md:p-8 rounded-xl flex items-center justify-center group">
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
                      <ul className="grid grid-cols-2 md:grid-cols-3 gap-[30px] gap-y-14">
                        {frontend.frontendList.map((front, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-auto h-auto md:w-full md:h-auto bg-[#1e1e24] p-0 md:p-8 rounded-xl flex items-center justify-center group">
                                  <div className="text-8xl group-hover:text-primary transition-all duration-300">
                                    {front.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p> {front.icon_name} </p>
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
    </>
  );
};

export default SkillNavigator;
