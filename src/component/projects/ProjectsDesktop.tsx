// ═══════════════════════════════════════════════════════════════
// path: src/component/projects/ProjectsDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP PROJECTS SECTION.
//
// Featured project gets full treatment.
// Everything else is categorized rows of text links.
// Clean, elegant, shows range without clutter.
//
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import { featured, categories } from "./projects";

const ProjectsDesktop = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* ── Section Title ── */}
        <h2 className="text-2xl font-semibold tracking-tight mb-8">
          Projects
        </h2>

        {/* ── Featured Projects ── */}
        <div>
          {featured.map((project, index) => (
            <div
              key={project.title}
              className={`${
                index > 0 ? "border-t border-border pt-8" : ""
              } ${index < featured.length - 1 ? "pb-8" : ""}`}
            >
              <h3 className="text-lg font-semibold tracking-tight mb-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline transition-colors duration-150"
                >
                  {project.title}
                </a>
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-3 mb-6">
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
        {/*
          Each category: label + row of text links.
          Same visual rhythm repeated. Elegant and scannable.
          mt-16 from featured, then each category separated by border.
        */}
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`${index === 0 ? "mt-8" : "mt-4"} pt-4 border-t border-border`}
          >
            <p className="text-sm text-muted mb-4">{category.name}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
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
};

export default ProjectsDesktop;
