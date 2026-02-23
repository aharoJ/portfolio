// ═══════════════════════════════════════════════════════════════
// path: src/app/dark/page.tsx
// ═══════════════════════════════════════════════════════════════
//
// DARK LANDING PAGE — exact inverse of /(home)/page.tsx.
//
// Navigate to aharoj.io/dark to compare against the light version.
//
// These are the SAME components. Not copies. Not dark variants.
// The layout.tsx wrapper overrides --color-bg, --color-fg,
// --color-muted, --color-border, and --color-accent. Every
// Tailwind class that references those tokens (text-fg,
// text-muted, border-border, bg-bg) automatically resolves
// to dark values.
//
// This is the proof that the design system works.
//
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

export default function DarkHome() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <div id="top">
        <div className="hidden lg:block">
          <HeroDesktop />
        </div>
        <div className="block lg:hidden">
          <HeroMobile />
        </div>
      </div>

      {/* ── Education ── */}
      <div id="education">
        <div className="hidden lg:block">
          <EducationDesktop />
        </div>
        <div className="block lg:hidden">
          <EducationMobile />
        </div>
      </div>

      {/* ── Experience ── */}
      <div id="experience">
        <div className="hidden lg:block">
          <ExperienceDesktop />
        </div>
        <div className="block lg:hidden">
          <ExperienceMobile />
        </div>
      </div>

      {/* ── Projects ── */}
      <div id="projects">
        <div className="hidden lg:block">
          <ProjectsDesktop />
        </div>
        <div className="block lg:hidden">
          <ProjectsMobile />
        </div>
      </div>

      {/* ── Skills ── */}
      <div id="skills">
        <div className="hidden lg:block">
          <SkillsDesktop />
        </div>
        <div className="block lg:hidden">
          <SkillsMobile />
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="py-16 px-6 lg:px-6">
        <div className="max-w-2xl mx-auto border-t border-border pt-8">
          {/* ── Social Links ── */}
          <nav className="flex flex-wrap gap-6 mb-6">
            <a
              href="https://github.com/aharoJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-fg transition-colors duration-150"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aharoj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-fg transition-colors duration-150"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/aharoJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-fg transition-colors duration-150"
            >
              Twitter
            </a>
            <a
              href="#top"
              className="text-sm text-muted hover:text-fg transition-colors duration-150 ml-auto"
            >
              Back to top ↑
            </a>
          </nav>

          {/* ── Meta ── */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Angel J. Haro
            </p>
            <span className="text-xs text-border hidden sm:inline">·</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-fg transition-colors duration-150"
            >
              Built with Next.js
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
