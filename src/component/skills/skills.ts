// ═══════════════════════════════════════════════════════════════
// src/modules/claude/component/skills/skills.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both SkillsDesktop and SkillsMobile import from here.
//
// What changed from the old Skills section:
//   OLD → 50+ react-icons imports, "use client", useState tabs,
//         colored tile grids, 8 separate tab views
//   NEW → Plain strings. No icons. No React. No interactivity.
//         Everything visible at once — no hiding behind tabs.
//
// Design rationale:
//   A recruiter scanning your page shouldn't click through 8 tabs
//   to understand your stack. Show everything. Let the categories
//   and the visual rhythm of the tags do the organizing.
//
//   The tech tags in Experience and Projects already established
//   the visual language — border-only monochrome pills. Skills
//   uses the exact same pattern, just more comprehensive.
//
// ═══════════════════════════════════════════════════════════════

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      "Java 21",
      "Spring Boot",
      "Python",
      "Django",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "C#",
      "ASP.NET Core",
    ],
  },
  {
    name: "Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    name: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "H2",
      "Cassandra",
    ],
  },
  {
    name: "Cloud & Identity",
    skills: [
      "Azure",
      "Azure Entra ID",
      "OAuth2 / OBO",
      "GCP",
      "Microsoft Graph",
      "MSAL",
    ],
  },
  {
    name: "DevOps & Tooling",
    skills: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "Git",
      "Maven",
      "Postman",
      "Homebrew",
    ],
  },
  {
    name: "Architecture",
    skills: [
      "Microservices",
      "Monolithic",
      "MVC / MVVM",
      "RESTful APIs",
      "Dependency Injection",
      "RBAC",
    ],
  },
  {
    name: "Shell & Config",
    skills: [
      "Bash",
      "Fish",
      "Zsh",
      "Neovim",
      "Lua",
      "YAML",
      "TOML",
    ],
  },
];
