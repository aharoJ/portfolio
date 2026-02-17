// ═══════════════════════════════════════════════════════════════
// src/app/home-test/page.tsx
// ═══════════════════════════════════════════════════════════════
//
// LANDING PAGE — single scroll.
//
// Hero (photo, name, title, links) + Experience section.
// More sections (Projects, About) will be added below Experience
// as we build them.
//
// React Server Component. Zero client JS.
//
// Desktop/Mobile components use the hidden/block pattern:
//   hidden lg:block  → only shows on desktop (≥1024px)
//   block lg:hidden  → only shows on mobile (<1024px)
//
// Both import from the same data files — content is never duplicated.
//
// ═══════════════════════════════════════════════════════════════

import Image from "next/image";

import ExperienceDesktop from "@/modules/claude/component/experience/ExperienceDesktop";
import ExperienceMobile from "@/modules/claude/component/experience/ExperienceMobile";

import ProjectsDesktop from "@/modules/claude/component/projects/ProjectsDesktop";
import ProjectsMobile from "@/modules/claude/component/projects/ProjectsMobile";

import SkillsDesktop from "@/modules/claude/component/skills/SkillsDesktop";
import SkillsMobile from "@/modules/claude/component/skills/SkillsMobile";
import EducationDesktop from "@/modules/claude/component/education/EducationDesktop";
import EducationMobile from "@/modules/claude/component/education/EducationMobile";

// ─── Hero Data ─────────────────────────────────────────────────
// Hardcoded for now. Extract to a data file when we need it
// in more than one place.

const links = [
  { label: "GitHub", href: "https://github.com/aharoJ" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aharoj" },
  { label: "Twitter", href: "https://twitter.com/ahaaborern" },
  { label: "Resume", href: "/resume.pdf" },
];

// ─── Page ──────────────────────────────────────────────────────

export default function HomeTest() {
  return (
    <main className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════
          Centered on the viewport. Photo, name, title, links.
          This is the first impression — clean and focused.
      */}
      <section className="flex items-center justify-center px-6 min-h-screen">
        <div className="max-w-2xl w-full py-24">
          {/* ── Photo ── */}
          <div className="mb-8">
            <Image
              src="/profile/aharoJ.png"
              alt="Angel J. Haro"
              width={96}
              height={96}
              priority
              className="rounded-full"
            />
          </div>

          {/* ── Name + Title ── */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              Angel J. Haro
            </h1>
            <p className="text-base text-muted">Software Engineer</p>
          </div>

          {/* ── Description ── */}
          <p className="text-muted leading-relaxed max-w-lg mb-12">
            Building high-performance systems and polished interfaces. I care
            about speed, reliability, and craft — from the database to the
            pixel.
          </p>

          {/* ── Links ── */}
          <nav className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-sm text-fg underline-offset-4 hover:underline transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════════
          EDUCATION SECTION
          ═══════════════════════════════════════════════════════*/}
      <div className="hidden lg:block">
        <EducationDesktop />
      </div>
      <div className="block lg:hidden">
        <EducationMobile />
      </div>

      {/* ═══════════════════════════════════════════════════════
          EXPERIENCE SECTION
          ═══════════════════════════════════════════════════════*/}
      <div className="hidden lg:block">
        <ExperienceDesktop />
      </div>
      <div className="block lg:hidden">
        <ExperienceMobile />
      </div>
      {/* ═══════════════════════════════════════════════════════
          PROJECT SECTION
          ═══════════════════════════════════════════════════════*/}
      <div className="hidden lg:block">
        <ProjectsDesktop />
      </div>
      <div className="block lg:hidden">
        <ProjectsMobile />
      </div>

      {/* ═══════════════════════════════════════════════════════
       SKILLS SECTION
       ═══════════════════════════════════════════════════════ */}
      <div className="hidden lg:block">
        <SkillsDesktop />
      </div>
      <div className="block lg:hidden">
        <SkillsMobile />
      </div>
    </main>
  );
}
