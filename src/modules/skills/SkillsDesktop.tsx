/* eslint-disable react/display-name */
// path: @/modules/skills/SkillsDesktop.tsx
"use client";

import React, { useState, ReactNode } from "react";

import {
  FaJava,
  FaHtml5,
  FaCss3,
  FaMicrosoft,
  FaProjectDiagram,
  FaCubes,
  FaSitemap,
  FaNetworkWired,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { PiFileCSharpDuotone } from "react-icons/pi";
import {
  SiSpringboot,
  SiPython,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiAxios,
  SiFramer,
  SiTailwindcss,
  SiBootstrap,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiMariadb,
  SiApachecassandra,
  SiGit,
  SiGooglecloud,
  SiApachemaven,
  SiApachetomcat,
  SiPostman,
  SiHomebrew,
  SiVirtualbox,
  SiNginx,
  SiGnubash,
  SiNeovim,
  SiFishshell,
  SiZsh,
  SiYaml,
  SiToml,
  SiLua,
} from "react-icons/si";
import { GiEgyptianBird, GiDwarfFace, GiLoveInjection } from "react-icons/gi";
import { TbH2 } from "react-icons/tb"; // H2 DB
import { BsFiletypeXml } from "react-icons/bs"; // XML
import { BiBarChart } from "react-icons/bi"; // Data Viz libs
import { GrRobot } from "react-icons/gr"; // .NET MAUI

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
interface Skill {
  icon: ReactNode;
  name: string;
}

// Backend
const backendSkills: Skill[] = [
  { icon: <FaJava />, name: "Java" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <GiEgyptianBird />, name: "PiTest" },
  { icon: <GiDwarfFace />, name: "LittleDarwin" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiDjango />, name: "Django" },
  { icon: <SiNumpy />, name: "NumPy" },
  { icon: <SiPandas />, name: "Pandas" },
  { icon: <BiBarChart />, name: "Matplotlib / Seaborn" },
];

// Frontend
const frontendSkills: Skill[] = [
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiAxios />, name: "Axios" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3 />, name: "CSS3" },
];

// Microsoft Stack
const microsoftSkills: Skill[] = [
  { icon: <PiFileCSharpDuotone />, name: "C#" },
  { icon: <SiDotnet />, name: "ASP.NET Core" },
  { icon: <GrRobot />, name: ".NET MAUI" },
  { icon: <FaMicrosoft />, name: "Power Apps" },
  { icon: <FaMicrosoft />, name: "Power Automate" },
  { icon: <FaMicrosoft />, name: "SharePoint" },
  { icon: <VscAzure />, name: "Azure Entra ID" },
  { icon: <VscAzure />, name: "Microsoft Graph" },
  { icon: <VscAzure />, name: "MSAL (OAuth2/OBO)" },
];

// Databases
const databasesSkills: Skill[] = [
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <TbH2 />, name: "H2" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMariadb />, name: "MariaDB" },
  { icon: <SiApachecassandra />, name: "Cassandra" },
  { icon: <BiBarChart />, name: "Data Modeling" },
];

// Cloud
const cloudSkills: Skill[] = [
  { icon: <VscAzure />, name: "Azure" },
  { icon: <SiGooglecloud />, name: "GCP" },
];

// Tooling & DevOps
const toolingSkills: Skill[] = [
  { icon: <SiGit />, name: "Git" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaDocker />, name: "Docker Compose" },
  { icon: <SiApachemaven />, name: "Maven" },
  { icon: <SiApachetomcat />, name: "Apache Tomcat" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaDatabase />, name: "MySQL Workbench" },
  { icon: <FaDatabase />, name: "pgAdmin4" },
  { icon: <SiHomebrew />, name: "Homebrew" },
  { icon: <SiVirtualbox />, name: "VirtualBox" },
  { icon: <SiNginx />, name: "Nginx" },
];

// Configurations & Shells
const configSkills: Skill[] = [
  { icon: <SiGnubash />, name: "Bash" },
  { icon: <SiFishshell />, name: "Fish" },
  { icon: <SiZsh />, name: "Zsh" },
  { icon: <SiNeovim />, name: "Neovim" },
  { icon: <BsFiletypeXml />, name: "XML" },
  { icon: <SiYaml />, name: "YAML" },
  { icon: <SiToml />, name: "TOML" },
  { icon: <SiLua />, name: "Lua" },
];

// Architecture & Patterns
const patternSkills: Skill[] = [
  { icon: <FaProjectDiagram />, name: "Microservices" },
  { icon: <FaCubes />, name: "Monolithic" },
  { icon: <FaSitemap />, name: "MVC / MVT / MVVM" },
  { icon: <FaNetworkWired />, name: "RESTful APIs" },
  { icon: <GiLoveInjection />, name: "Dependency Injection" },
];

/* --- --- --- --- Skills Content --- --- --- --- */
const SkillsContent = React.memo(({ skills }: { skills: Skill[] }) => (
  <div className="grid grid-cols-3 gap-4 p-4 bg-[#232329]">
    {skills.map((sk, i) => (
      <div
        key={i}
        title={sk.name}
        className="flex flex-col items-center p-4 bg-[#1e1e24] rounded-xl hover:bg-primary/40 transition group"
      >
        <div className="text-5xl mb-2 text-white group-hover:text-red-200">
          {sk.icon}
        </div>
        <span className="text-sm text-white transition-colors group-hover:text-red-200">
          {sk.name}
        </span>
      </div>
    ))}
  </div>
));

/* -----------------------------------------------------------------------------
   Main Component
 -----------------------------------------------------------------------------*/
export default function SkillsDesktop() {
  const tabs = [
    "backend",
    "frontend",
    "databases",
    "cloud",
    "microsoft",
    "tooling",
    "configurations",
    "patterns",
  ] as const;
  type Tab = (typeof tabs)[number];
  const [active, setActive] = useState<Tab>("backend");

  const tabContents: Record<Tab, ReactNode> = {
    backend: <SkillsContent skills={backendSkills} />,
    frontend: <SkillsContent skills={frontendSkills} />,
    databases: <SkillsContent skills={databasesSkills} />,
    cloud: <SkillsContent skills={cloudSkills} />,
    microsoft: <SkillsContent skills={microsoftSkills} />,
    tooling: <SkillsContent skills={toolingSkills} />,
    configurations: <SkillsContent skills={configSkills} />,
    patterns: <SkillsContent skills={patternSkills} />,
  };

  return (
    <section className="w-full mx-auto p-12 px-4 bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        {/* tabs */}
        <div className="flex space-x-4 mb-8 border-b border-gray-700 overflow-x-auto scrollbar-hide">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`pb-2 text-sm font-medium whitespace-nowrap ${active === t
                  ? "border-b-2 border-primary text-white"
                  : "text-gray-400 hover:text-gray-200"
                }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="tab-contents">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab-content ${active === tab ? "block" : "hidden"}`}
            >
              {tabContents[tab]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}