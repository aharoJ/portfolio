// ═══════════════════════════════════════════════════════════════
// src/modules/claude/component/projects/projects.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both ProjectsDesktop and ProjectsMobile import from here.
//
// Structure:
//   1. Featured — full description, highlights, tech tags
//   2. Categories — labeled rows of links, grouped by domain
//
// ═══════════════════════════════════════════════════════════════

export interface FeaturedProject {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectCategory {
  name: string;
  links: ProjectLink[];
}

export const featured: FeaturedProject[] = [
  {
    title: "Barbershop Application",
    description:
      "Full-stack scheduling and management platform with multi-role access control for shop owners, barbers, and customers.",
    highlights: [
      "Enforced 25+ RBAC rules across owner/barber/customer roles with stateless JWT and refresh-token rotation.",
      "Modeled 11 domains with JPA; implemented transactional boundaries, Bean Validation, and cursor-based pagination.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JWT Auth",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
    ],
    github: "https://github.com/aharoJ",
    // live: "https://barbershop.aharoj.io",  // uncomment when deployed
  },
];

export const categories: ProjectCategory[] = [
  {
    name: "Full Stack",
    links: [
      { label: "Twitter Clone", href: "https://github.com/aharoJ/Twitter" },
      { label: "Employee Tracker", href: "https://github.com/aharoJ/EmployeeManagementSystemApp" },
    ],
  },
  {
    name: "Machine Learning",
    links: [
      { label: "Quantum Annealing", href: "https://github.com/aharoJ/QuantumAnnealing" },
      { label: "ML Notebooks", href: "https://github.com/aharoJ/opensource/tree/main/machine-learning" },
    ],
  },
  {
    name: "Tooling & Configs",
    links: [
      { label: "tmux", href: "https://github.com/aharoJ/tmux-config" },
      { label: "yabai + skhd", href: "https://github.com/aharoJ/yabai-skhd-config" },
      { label: "alacritty", href: "https://github.com/aharoJ/alacritty-config" },
      { label: "starship", href: "https://github.com/aharoJ/starship-config" },
      { label: "lf", href: "https://github.com/aharoJ/lf-config" },
      { label: "vivaldi", href: "https://github.com/aharoJ/vivaldi-config" },
    ],
  },
];
