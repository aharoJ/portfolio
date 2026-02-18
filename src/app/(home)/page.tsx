// ═══════════════════════════════════════════════════════════════
// path: src/app/(home)/page.tsx
// ═══════════════════════════════════════════════════════════════
// LANDING PAGE — single scroll.
//
// This file is purely compositional. Zero content, zero layout
// logic. Every section is a Desktop/Mobile pair that imports
// from its own data file.
//
// hidden lg:block  → only shows on desktop (≥1024px)
// block lg:hidden  → only shows on mobile (<1024px)
//
// React Server Component. Zero client JS.
import HeroDesktop from "@/component/hero/HeroDesktop";
import HeroMobile from "@/component/hero/HeroMobile";

import EducationDesktop from "@/component/education/EducationDesktop";
import EducationMobile from "@/component/education/EducationMobile";

import ExperienceDesktop from "@/component/experience/ExperienceDesktop";
import ExperienceMobile from "@/component/experience/ExperienceMobile";

import ProjectsDesktop from "@/component/projects/ProjectsDesktop";
import ProjectsMobile from "@/component/projects/ProjectsMobile";

import SkillsDesktop from "@/component/skills/SkillsDesktop";
import SkillsMobile from "@/component/skills/SkillsMobile";

// ─── Page ──────────────────────────────────────────────────────

export default function HomeTest() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
      <div className="block lg:hidden">
        <HeroMobile />
      </div>

      {/* ── Education ── */}
      <div className="hidden lg:block">
        <EducationDesktop />
      </div>
      <div className="block lg:hidden">
        <EducationMobile />
      </div>

      {/* ── Experience ── */}
      <div className="hidden lg:block">
        <ExperienceDesktop />
      </div>
      <div className="block lg:hidden">
        <ExperienceMobile />
      </div>

      {/* ── Projects ── */}
      <div className="hidden lg:block">
        <ProjectsDesktop />
      </div>
      <div className="block lg:hidden">
        <ProjectsMobile />
      </div>

      {/* ── Skills ── */}
      <div className="hidden lg:block">
        <SkillsDesktop />
      </div>
      <div className="block lg:hidden">
        <SkillsMobile />
      </div>
    </main>
  );
}
