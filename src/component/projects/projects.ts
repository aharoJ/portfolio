// ═══════════════════════════════════════════════════════════════
// path: src/component/projects/projects.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both ProjectsDesktop and ProjectsMobile import from here.
//
// What changed:
//   ADDED → `image` field on FeaturedProject. Optional string.
//   The Barbershop screenshot shows the full-stack reality:
//   backend package structure, frontend file tree, running UI,
//   and Hibernate SQL logs. One image communicates "this is a
//   real, working system" better than any bullet point.
//
//   Save the screenshot to: public/projects/barbershop-dashboard.png
//   Optimize it first — aim for under 200KB (sharp, tinypng, or
//   squoosh). The original is likely 1-3MB as a raw screenshot.
//
// ═══════════════════════════════════════════════════════════════

export interface FeaturedProject {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  image?: string;
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
    image: "/project/barbershop.jpg",
    // live: "https://barbershop.aharoj.io",  // uncomment when deployed
  },
];

export const categories: ProjectCategory[] = [
  {
    name: "Full Stack",
    links: [
      { label: "Employee Tracker", href: "https://github.com/aharoJ/EmployeeManagementSystemApp" },
      { label: "Twitter", href: "https://github.com/aharoJ/Twitter" },
      { label: "Apple", href: "https://github.com/aharoJ/Apple" },
      { label: "3D Portfolio", href: "https://github.com/aharoJ/3D-Portfolio" },
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
      { label: "config", href: "https://github.com/aharoJ/config" },
      { label: "tmux", href: "https://github.com/aharoJ/tmux-config" },
      { label: "yabai + skhd", href: "https://github.com/aharoJ/yabai-skhd-config" },
      { label: "alacritty", href: "https://github.com/aharoJ/alacritty-config" },
      { label: "starship", href: "https://github.com/aharoJ/starship-config" },
      { label: "vivaldi", href: "https://github.com/aharoJ/vivaldi-config" },
    ],
  },
];
