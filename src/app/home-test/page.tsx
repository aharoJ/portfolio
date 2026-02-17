// ═══════════════════════════════════════════════════════════════
// src/app/home-test/page.tsx
// ═══════════════════════════════════════════════════════════════
//
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
//
import HeroDesktop from "@/modules/claude/component/hero/HeroDesktop";
import HeroMobile from "@/modules/claude/component/hero/HeroMobile";

import EducationDesktop from "@/modules/claude/component/education/EducationDesktop";
import EducationMobile from "@/modules/claude/component/education/EducationMobile";

import ExperienceDesktop from "@/modules/claude/component/experience/ExperienceDesktop";
import ExperienceMobile from "@/modules/claude/component/experience/ExperienceMobile";

import ProjectsDesktop from "@/modules/claude/component/projects/ProjectsDesktop";
import ProjectsMobile from "@/modules/claude/component/projects/ProjectsMobile";

import SkillsDesktop from "@/modules/claude/component/skills/SkillsDesktop";
import SkillsMobile from "@/modules/claude/component/skills/SkillsMobile";

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
