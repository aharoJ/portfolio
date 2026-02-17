// ═══════════════════════════════════════════════════════════════
// src/modules/claude/component/projects/ProjectsMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE PROJECTS SECTION.
// Same structure, adapted for smaller viewports.
//
// ═══════════════════════════════════════════════════════════════

import { featured, categories } from "./projects";

export default function ProjectsMobile() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-2xl mx-auto">
        {/* ── Section Title ── */}
        <h2 className="text-xl font-semibold tracking-tight mb-12">
          Projects
        </h2>

        {/* ── Featured Projects ── */}
        <div>
          {featured.map((project, index) => (
            <div
              key={project.title}
              className={`${
                index > 0 ? "border-t border-border pt-10" : ""
              } ${index < featured.length - 1 ? "pb-10" : ""}`}
            >
              <h3 className="text-base font-semibold tracking-tight mb-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline transition-colors duration-150"
                >
                  {project.title}
                </a>
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="space-y-3 mb-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm text-muted leading-relaxed pl-4 border-l-2 border-border"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-muted border border-border rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Categorized Link Rows ── */}
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`${index === 0 ? "mt-12" : "mt-6"} pt-10 border-t border-border`}
          >
            <p className="text-sm text-muted mb-4">{category.name}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {category.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fg underline-offset-4 hover:underline transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
