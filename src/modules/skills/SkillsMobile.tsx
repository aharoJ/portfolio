// @/modules/skills/SkillsMobile.tsx
"use client";

import { useMemo, useState, ReactNode, memo } from "react";
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
import { TbH2 } from "react-icons/tb";
import { BsFiletypeXml } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { GrRobot } from "react-icons/gr";

// -----------------------------------------------------------------------------
// Types & Data
// -----------------------------------------------------------------------------
interface Skill {
  icon: ReactNode;
  name: string;
}

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

const microsoftSkills: Skill[] = [
  { icon: <PiFileCSharpDuotone />, name: "C#" },
  { icon: <SiDotnet />, name: "ASP.NET Core" },
  { icon: <GrRobot />, name: ".NET MAUI" },
  { icon: <FaMicrosoft />, name: "Power Apps" },
  { icon: <FaMicrosoft />, name: "Power Automate" },
  { icon: <FaMicrosoft />, name: "SharePoint" },
  { icon: <VscAzure />, name: "Azure Entra ID" },
  { icon: <VscAzure />, name: "Microsoft Graph" },
  { icon: <VscAzure />, name: "MSAL (OAuth2/OBO)" },
];

const databasesSkills: Skill[] = [
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <TbH2 />, name: "H2" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMariadb />, name: "MariaDB" },
  { icon: <SiApachecassandra />, name: "Cassandra" },
  { icon: <BiBarChart />, name: "Data Modeling" },
];

const cloudSkills: Skill[] = [
  { icon: <VscAzure />, name: "Azure" },
  { icon: <SiGooglecloud />, name: "GCP" },
];

const toolingSkills: Skill[] = [
  { icon: <SiGit />, name: "Git" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaDocker />, name: "Docker Compose" },
  { icon: <SiApachemaven />, name: "Maven" },
  { icon: <SiApachetomcat />, name: "Apache Tomcat" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaDatabase />, name: "MySQL Workbench" },
  { icon: <FaDatabase />, name: "pgAdmin4" },
  { icon: <SiHomebrew />, name: "Homebrew" },
  { icon: <SiVirtualbox />, name: "VirtualBox" },
  { icon: <SiNginx />, name: "Nginx" },
];

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

const patternSkills: Skill[] = [
  { icon: <FaProjectDiagram />, name: "Microservices" },
  { icon: <FaCubes />, name: "Monolithic" },
  { icon: <FaSitemap />, name: "MVC / MVT / MVVM" },
  { icon: <FaNetworkWired />, name: "RESTful APIs" },
  { icon: <GiLoveInjection />, name: "Dependency Injection" },
];

// -----------------------------------------------------------------------------
// Grid: exactly 3 visible rows. If >9 items -> scroll INSIDE card only.
// Tiles are fixed height so nothing jiggles.
// -----------------------------------------------------------------------------
const TILE_H = 80; // px
const GAP = 12; // px (gap-3)
const GRID_H = TILE_H * 3 + GAP * 2; // 264px

const SkillsGrid = memo(({ skills }: { skills: Skill[] }) => {
  const hasOverflow = skills.length > 9;

  return (
    <div
      className={[
        // fixed 3-row viewport height
        "px-4",
        hasOverflow ? "overflow-y-auto" : "overflow-hidden",
      ].join(" ")}
      style={{ height: GRID_H }}
    >
      {/* hide scrollbar but keep scrollability when overflowing */}
      <style jsx global>{`
        div[style*="height: ${GRID_H}px"]::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      `}</style>

      <div className="grid grid-cols-3 gap-3">
        {skills.map((sk, i) => (
          <div
            key={i}
            title={sk.name}
            className="group flex h-[80px] flex-col items-center justify-center rounded-xl bg-soft-moss p-3 transition-colors hover:bg-soft-moss/70"
          >
            <div className="mb-1 text-2xl text-creamy-ivory group-hover:text-creamy-white">
              {sk.icon}
            </div>
            <span className="text-center text-[11px] leading-tight text-creamy-ivory group-hover:text-creamy-bone line-clamp-2">
              {sk.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});
SkillsGrid.displayName = "SkillsGrid";

// -----------------------------------------------------------------------------
// Main (mobile) — tight outer spacing so the section doesn't add extra scroll
// -----------------------------------------------------------------------------
export default function SkillsMobile() {
  const tabs = [
    "backend",
    "frontend",
    "databases",
    "cloud",
    "microsoft",
    "tooling",
    "config",
    "patterns",
  ] as const;
  type Tab = (typeof tabs)[number];

  const [active, setActive] = useState<Tab>("backend");

  const tabMap: Record<Tab, Skill[]> = useMemo(
    () => ({
      backend: backendSkills,
      frontend: frontendSkills,
      databases: databasesSkills,
      cloud: cloudSkills,
      microsoft: microsoftSkills,
      tooling: toolingSkills,
      config: configSkills,
      patterns: patternSkills,
    }),
    [],
  );

  return (
    <section aria-label="Skills (mobile)" className="bg-neon-default">
      <div className="mx-auto max-w-2xl px-5 pt-8 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {/* Heading */}
        <header className="mb-5 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-creamy-white">
            SKILLS
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 bg-soft-moss" />
        </header>

        {/* Tabs — chips */}
        <nav
          aria-label="Skill categories"
          className="-mx-5 mb-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          <style jsx global>{`
            nav[aria-label="Skill categories"]::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {tabs.map((t) => {
            const on = t === active;
            const label = t.charAt(0).toUpperCase() + t.slice(1);
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={[
                  "snap-start shrink-0 rounded-full border px-3 py-1.5 text-sm font-medium",
                  on
                    ? "border-soft-moss bg-soft-moss text-creamy-white"
                    : "border-soft-moss bg-creamy-bone text-soft-slate hover:text-soft-moss hover:bg-creamy-ivory",
                ].join(" ")}
                aria-pressed={on}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Card — fixed height grid inside. No page scroll added below. */}
        <article className="rounded-3xl border-2 border-creamy-bone bg-neon-one py-3">
          <SkillsGrid skills={tabMap[active]} />
        </article>
      </div>
    </section>
  );
}
