// ═══════════════════════════════════════════════════════════════
// path: src/modules/claude/component/education/EducationDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// Same exact design you had. Same classes, same layout.
// Only difference: data comes from education.ts instead of
// being hardcoded in this file.
// ═══════════════════════════════════════════════════════════════

import Image from "next/image";
import { education } from "./education";

const EducationDesktop = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-creamyLight-pearl mb-4">
          EDUCATION
        </h2>
        <div className="w-40 h-1 bg-soft-moss mx-auto"></div>
      </div>

      {/* Single Compact Card */}
      <div className="bg-creamy-bone hover:bg-creamy-white p-8 rounded-xl border-4 border-soft-moss transition-all duration-300">
        <div className="flex items-start gap-8">
          {/* University Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-32 h-32 overflow-hidden rounded-xl shadow-lg">
              <div className="bg-creamy-ivory border border-dashed rounded-xl w-full h-full" />
              <div className="absolute inset-0 border-2 border-soft-moss rounded-xl">
                <Image
                  src={education.image}
                  alt={education.imageAlt}
                  fill
                  sizes="128px"
                  className="object-cover text-soft-slate"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-soft-slate mb-2">
              {education.degree}
            </h3>
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-soft-moss text-white px-3 py-1 rounded-md text-sm font-medium">
                {education.school}
              </div>
              <div className="text-soft-slate">
                {education.location} • GPA: {education.gpa}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="flex flex-wrap gap-2 mb-4">
              {education.achievements.map((a) => (
                <span
                  key={a.label}
                  className={`${a.bgColor} ${a.textColor} px-3 py-1 rounded-full text-xs font-medium`}
                >
                  {a.label}
                </span>
              ))}
            </div>

            {/* Coursework */}
            <p className="text-soft-slate text-sm leading-relaxed">
              <span className="font-semibold">Key Coursework:</span>{" "}
              {education.coursework.join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDesktop;
