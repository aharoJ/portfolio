// ═══════════════════════════════════════════════════════════════
// src/modules/claude/data/education.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both EducationDesktop and EducationMobile import from here.
// Update your GPA, add an achievement, fix a typo — do it once.
// ═══════════════════════════════════════════════════════════════

export interface Achievement {
  label: string;
  bgColor: string;   // tailwind bg class
  textColor: string;  // tailwind text class
}

export interface EducationData {
  degree: string;
  school: string;
  location: string;
  gpa: string;
  image: string;
  imageAlt: string;
  achievements: Achievement[];
  coursework: string[];
}

export const education: EducationData = {
  degree: "Bachelor of Science in Computer Science",
  school: "California State University, Dominguez Hills",
  location: "Carson, CA",
  gpa: "3.4",
  image: "/education/grad.jpg",
  imageAlt: "CSUDH",
  achievements: [
    {
      label: "Google Scholar ($3K)",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
    },
    {
      label: "GMiS 2nd Place (300+ contestants)",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
    },
    {
      label: "Research Funding ($1.5K)",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
    },
    {
      label: "Robotics Program Lead",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
    },
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
