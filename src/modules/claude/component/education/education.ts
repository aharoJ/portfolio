// ═══════════════════════════════════════════════════════════════
// src/modules/claude/component/education/education.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both EducationDesktop and EducationMobile import from here.
//
// What changed from the old education.ts:
//   OLD → bgColor and textColor per achievement (colored badges)
//   NEW → Plain strings. Achievements are just labels.
//         The component decides styling — and it's monochrome
//         border-only tags, same as Experience tech tags.
//
// Dropped the image fields — the new design doesn't use a
// university photo. The degree, achievements, and coursework
// speak for themselves. Same logic as Experience dropping
// company photos.
//
// ═══════════════════════════════════════════════════════════════

export interface EducationData {
  degree: string;
  school: string;
  location: string;
  gpa: string;
  date: string;
  achievements: string[];
  coursework: string[];
}

export const education: EducationData = {
  degree: "Bachelor of Science in Computer Science",
  school: "California State University, Dominguez Hills",
  location: "Carson, CA",
  gpa: "3.4",
  date: "Aug 2019 — May 2024",
  achievements: [
    "Google Scholar ($3K)",
    "GMiS 2nd Place (300+ contestants)",
    "Research Funding ($1.5K)",
    "Robotics Program Lead",
  ],
  coursework: [
    "Machine Learning",
    "Data Structures",
    "Software Development",
    "Algorithm Analysis",
    "Database Systems",
    "Senior Design",
  ],
};
