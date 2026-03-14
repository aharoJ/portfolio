// ═══════════════════════════════════════════════════════════════
// src/app/(home)/page.tsx
// ═══════════════════════════════════════════════════════════════
//
// Landing page. Purely compositional — Desktop/Mobile pairs.
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════
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

      {/* ── Footer ── */}
      <footer className="py-16 px-6 lg:px-6">
        <div className="max-w-2xl mx-auto border-t border-border pt-8">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Angel J. Haro
          </p>
        </div>
      </footer>
    </main>
  );
}
