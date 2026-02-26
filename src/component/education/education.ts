// ═══════════════════════════════════════════════════════════════
// path: src/component/education/education.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both EducationDesktop and EducationMobile import from here.
//
// What changed (Session N — Education redesign):
//
//   REMOVED → date ("Aug 2019 — May 2024")
//     Why: Five years for a BS invites questions. Most elite
//     portfolios that include education show graduation year
//     or nothing. The date range adds zero positive signal.
//
//   REMOVED → location ("Carson, CA")
//     Why: The school name already tells anyone who cares.
//     It's visual clutter competing with the achievements.
//
//   REMOVED → GPA (3.4)
//     Why: Unwritten rule — if it's not 3.7+, it works against
//     you more than for you. Nobody who lands an interview
//     has ever been asked "why didn't you put your GPA on
//     your portfolio?"
//
//   REMOVED → coursework
//     Why: "Data Structures, Algorithms" is implied by
//     "B.S. in Computer Science." It's on the resume PDF
//     if anyone cares.
//
//   KEPT → degree, school, achievements
//     The achievements ARE the section. Google Scholar and
//     GMiS 2nd Place are genuine differentiators that carry
//     more weight than the degree itself at this career stage.
//
// Research context:
//   Brittany Chiang (Apple, Klaviyo) — no education section.
//   Lee Robinson (Vercel) — no education section.
//   Most top portfolios skip it entirely. We keep it because
//   aharoJ has achievements worth showing. Once work history
//   grows, this section can shrink or fold into About.
//
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
