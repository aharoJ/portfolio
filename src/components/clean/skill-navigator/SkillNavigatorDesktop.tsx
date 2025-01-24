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

import {
  GiEgyptianBird,
  GiDwarfFace,
  GiSewingNeedle, //  Dependency Injection
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


// 1) Define a Type for a single skill icon
interface SkillIcon {
  icon: ReactNode;
  icon_name: string;
}

// 2) Define a Type for a skill category
interface SkillCategory {
  value: string; // for the TabsTrigger (e.g. "backend")
  label: string; // for the tab label (e.g. "Backend")
  title: string; // for the section heading (e.g. "Backend")
  skills: SkillIcon[]; // array of icons inside that category
}

// 3) All your icon data in one place
//    Instead of separate variables, we combine them into skillCategories
const skillCategories: SkillCategory[] = [
  {
    value: "languages",
    label: "Languages",
    title: "Languages",
    skills: [
      { icon: <FaJava />, icon_name: "Java" },
      { icon: <SiPython />, icon_name: "Python" },
      { icon: <SiTypescript />, icon_name: "TypeScript" },
      { icon: <SiJavascript />, icon_name: "JavaScript" },
      { icon: <FaHtml5 />, icon_name: "HTML" },
      { icon: <FaCss3 />, icon_name: "CSS" },
      { icon: <SiLua />, icon_name: "Lua" },
    ],
  },
  {
    value: "backend",
    label: "Backend",
    title: "Backend",
    skills: [
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
  },
  {
    value: "database",
    label: "Database",
    title: "Database",
    skills: [
      { icon: <SiPostgresql />, icon_name: "PostgreSQL" },
      { icon: <TbH2 />, icon_name: "H2 Database" },
      { icon: <SiMysql />, icon_name: "MySQL" },
      { icon: <SiApachecassandra />, icon_name: "Apache Cassandra" },
    ],
  },
  {
    value: "devops",
    label: "DevOps",
    title: "DevOps",
    skills: [
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
      { icon: <SiTmux />, icon_name: "Tmux (duplicate)" },
      { icon: <SiHomebrew />, icon_name: "Homebrew" },
      { icon: <SiVirtualbox />, icon_name: "Virtualbox" },
      { icon: <SiYabai />, icon_name: "Yabai" },
      { icon: <SiGit />, icon_name: "Git" },
    ],
  },
  {
    value: "frontend",
    label: "Frontend",
    title: "Frontend",
    skills: [
      { icon: <SiReact />, icon_name: "React" },
      { icon: <SiNextdotjs />, icon_name: "Next.js" },
      { icon: <SiVite />, icon_name: "Vite.js" },
      { icon: <SiTailwindcss />, icon_name: "Tailwind CSS" },
      { icon: <SiBootstrap />, icon_name: "Bootstrap" },
      { icon: <SiRedux />, icon_name: "Redux" },
      { icon: <SiFramer />, icon_name: "Framer Motion" },
      { icon: <SiThreedotjs />, icon_name: "Three.js" },
    ],
  },
];

// 4) A reusable component that takes any SkillCategory and
//    renders the heading + scrollable grid
const SkillGridDesktop: React.FC<{ data: SkillCategory }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-6 text-center">
      <h3 className="text-6xl font-bold"> {data.title} </h3>
      <div className="max-w-[1200px] mx-auto">
        <ScrollArea className="h-[300px] rounded-xl bg-[#232329] p-6 shadow-lg">
          <ul className="grid grid-cols-4 gap-x-12 gap-y-14">
            {data.skills.map((skill, i) => (
              <li key={i}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-full bg-[#1e1e24] p-5 rounded-xl flex items-center justify-center group">
                      <div className="text-8xl group-hover:text-primary transition-all duration-300">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.icon_name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  );
};

const SkillNavigatorDesktop: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[40vh] flex items-center justify-center py-12 container"
      >
        <div className="container mx-auto">
          {/* 5) Use the first category’s value as your default tab */}
          <Tabs
            defaultValue={skillCategories[0].value}
            className="flex flex-row gap-6"
          >
            {/* 6) Dynamically render the tab triggers */}
            <TabsList className="flex flex-col w-full max-w-[300px] mx-auto gap-y-5">
              {skillCategories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* 7) Dynamically render the tab content */}
            <div className="min-h-[40vh] w-full">
              {skillCategories.map((cat) => (
                <TabsContent
                  key={cat.value}
                  value={cat.value}
                  className="w-full h-full"
                >
                  <SkillGridDesktop data={cat} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default SkillNavigatorDesktop;