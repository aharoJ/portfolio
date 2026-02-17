// ═══════════════════════════════════════════════════════════════
// path: src/modules/claude/component/education/EducationMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// Same exact design you had. Same classes, same layout.
// Only difference: data comes from education.ts instead of
// being hardcoded in this file.
// ═══════════════════════════════════════════════════════════════
import Image from "next/image";
import { education } from "./education";

export default function EducationMobile() {
  return (
    <section aria-label="Education (mobile)" className="relative">
      <div className="mx-auto max-w-2xl px-5 py-16">
        {/* Section Heading */}
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-creamyLight-pearl">
            EDUCATION
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 bg-soft-moss" />
        </header>

        {/* Card */}
        <article className="rounded-2xl border-4 border-soft-moss bg-creamy-bone p-5 transition-colors hover:bg-creamy-white">
          <div className="flex items-center gap-4">
            {/* Image */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow">
              <div className="h-full w-full rounded-xl border border-dashed bg-creamy-ivory" />
              <div className="absolute inset-0 rounded-xl border-2 border-soft-moss">
                <Image
                  src={education.image}
                  alt={education.imageAlt}
                  fill
                  sizes="64px"
                  className="object-cover text-soft-slate"
                  priority
                />
              </div>
            </div>

            {/* Title + School */}
            <div className="min-w-0">
              <h3 className="truncate text-lg font-bold text-soft-slate">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-soft-slate">
                {education.school}
              </p>
              <p className="text-xs text-soft-slate/80">
                {education.location} · GPA: {education.gpa}
              </p>
            </div>
          </div>

          {/* Badges */}
          <ul className="mt-4 flex flex-wrap gap-2">
            {education.achievements.map((a) => (
              <li
                key={a.label}
                className={`rounded-full ${a.bgColor} px-3 py-1 text-[11px] font-medium ${a.textColor}`}
              >
                {a.label}
              </li>
            ))}
          </ul>

          {/* Coursework */}
          <p className="mt-4 text-sm leading-relaxed text-soft-slate">
            <span className="font-semibold">Key Coursework:</span>{" "}
            {education.coursework.join(" • ")}
          </p>
        </article>
      </div>
    </section>
  );
}
