// ═══════════════════════════════════════════════════════════════
// path: src/component/skills/skills.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both SkillsDesktop and SkillsMobile import from here.
//
// These categories and skills mirror the resume EXACTLY.
// If it's not on the resume, it doesn't belong here.
// If you add something here, add it to the resume too.
//
// ═══════════════════════════════════════════════════════════════

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: ["Java", "Spring Boot", "Python", "Django"],
  },
  {
    name: "Auth & Security",
    skills: [
      "Azure Entra ID",
      "OAuth2",
      "MSAL",
      "OBO Flow",
      "JWT (RS256)",
      "SSO",
      "RBAC",
    ],
  },
  {
    name: "Databases",
    skills: ["MySQL", "MariaDB", "PostgreSQL", "Flyway Migrations"],
  },
  {
    name: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Infrastructure",
    skills: [
      "Docker",
      "CI/CD",
      "Maven",
      "Git",
      "Postman",
      "Power Automate",
      "Graph API",
    ],
  },
  {
    name: "config",
    skills: ["Fish", "Bash", "Zsh", "Neovim", "XML", "YAML", "TOML", "Lua"],
  },
  {
    name: "patterns",
    skills: [
      "Monolithic",
      "MVC / MVT / MVVM",
      "RESTful APIs",
      "Dependency Injection",
    ],
  },
];
