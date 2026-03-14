// ═══════════════════════════════════════════════════════════════
// src/component/education/education.ts — Education data.
// Single source of truth for EducationDesktop and EducationMobile.
// ═══════════════════════════════════════════════════════════════

export interface EducationData {
  degree: string;
  school: string;
  achievements: string[];
}

export const education: EducationData = {
  degree: "Bachelor of Science in Computer Science",
  school: "California State University, Dominguez Hills",
  achievements: [
    "Google Scholar ($3K)",
    "GMiS 2nd Place (300+ contestants)",
    "Mutation Research Funding ($1.5K)",
    "Robotics Program Lead",
  ],
};
