// ═══════════════════════════════════════════════════════════════
// path: src/component/experience/experience.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both ExperienceDesktop and ExperienceMobile import from here.
//
// 5 roles. Real content from resume. No lorem ipsum.
// Ordered by recency (most recent first).
//
// `shortName` — used as tab label on desktop. Full company names
// are too long for a sidebar tab list. These are the recognizable
// short versions a reader can scan instantly.
//
// Update a bullet point, add a tech tag, fix a date — do it here.
// ═══════════════════════════════════════════════════════════════

export interface Role {
  title: string;
  company: string;
  shortName: string;
  location: string;
  date: string;
  highlights: string[];
  tech: string[];
}

export const roles: Role[] = [
  {
    title: "Software Engineer",
    company: "College of Veterinary Medicine",
    shortName: "Western University",
    location: "Pomona, CA",
    date: "Dec 2024 — Present",
    highlights: [
      "Sole engineer and primary owner of CVMApp (Spring Boot, React, MySQL) serving 580+ users across 4 student cohorts plus staff and faculty.",
      "Replaced third-party vendor with in-house Spring Boot REST API, saving $50,000/year (90% cost reduction) and enabling faster feature delivery.",
      "Implemented Azure Entra ID SSO with OAuth2/OBO flow and RS256 JWT; standardized RBAC across internal applications.",
      "Restored 2-month data ingestion outage; hardened service and cleared 19,140-row backlog through idempotent batch processing.",
      "Automated OAuth2 token flows in Postman, reducing API test cycles from 90 minutes to 5 minutes (95% reduction).",
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "React",
      "MySQL",
      "Azure Entra ID",
      "OAuth2",
      "Docker",
    ],
  },
  {
    title: "Software Engineering Intern",
    company:
      "U.S. Department of Transportation — Turner Fairbank Highway Research Center",
    shortName: "U.S. DOT",
    location: "McLean, VA",
    date: "May 2023 — Aug 2023",
    highlights: [
      "Automated CARLA/OpenPilot/Unreal/NVIDIA environment setup with Docker, reducing configuration time from 4 hours to 45 minutes.",
      "Executed 200+ autonomous driving simulations; standardized configurations to federal documentation standards.",
      "Granted security clearance for federal research systems.",
    ],
    tech: ["Docker", "CARLA", "OpenPilot", "Unreal Engine", "Python"],
  },
  {
    title: "Software Engineering Researcher",
    company: "Google exploreCSR — California State University, Dominguez Hills",
    shortName: "Google CSR",
    location: "Carson, CA",
    date: "Oct 2023 — Jun 2024",
    highlights: [
      "Trained neural network from scratch (Python/NumPy) on MERL BRDF dataset (100K+ samples) to predict material reflectance.",
      "Built full-stack research application with modular architecture under Dr. Bin Tan mentorship.",
      "Awarded $3,000 Google Scholarship for research excellence.",
    ],
    tech: ["Python", "NumPy", "Neural Networks", "Full-Stack"],
  },
  {
    title: "Software Development Engineer in Test",
    company: "CAHSI — Computing Alliance of Hispanic-Serving Institutions",
    shortName: "CAHSI",
    location: "Union, NJ",
    date: "Jan 2023 — May 2023",
    highlights: [
      "Achieved 95% mutation coverage on 10,000+ line codebase using LittleDarwin and PiTest.",
      "Placed 2nd of 300+ contestants at Great Minds in STEM national competition.",
    ],
    tech: ["Java", "LittleDarwin", "PiTest", "Mutation Testing"],
  },
  {
    title: "Software Engineer & Program Lead",
    company: "Center for Innovation in STEM Education — Apple",
    shortName: "Apple CISE",
    location: "Los Angeles, CA",
    date: "May 2021 — Dec 2022",
    highlights: [
      "Led team of 10 Apple Teachers; scaled Swift/JavaScript curricula from 3 to 13 LAUSD schools.",
      "Reached 200+ K-12 students across the Los Angeles Unified School District.",
    ],
    tech: ["Swift", "JavaScript", "Curriculum Development"],
  },
];
