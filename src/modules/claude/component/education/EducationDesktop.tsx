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
    <div className="py-24 px-6 ">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-4">EDUCATION</h2>
        <div className="w-40 h-1 bg-soft-moss mx-auto"></div>
        {/* Single Compact Card */}
        <div className="p-8 rounded-xl border-2 ">
          <div className="flex items-start gap-8">
            {/* University Image — 1/4 */}
            <div className="w-1/4 shrink-0 relative">
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <div className="bg-creamy-ivory border border-dashed rounded-xl w-full h-full" />
                <div className="absolute inset-0 border-2 border-soft-moss rounded-xl">
                  <Image
                    src={education.image}
                    alt={education.imageAlt}
                    fill
                    sizes="25vw"
                    className="object-cover text-soft-slate"
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Content — 3/4 */}
            <div className="w-3/4">
              <h3 className="text-lg font-semibold text-soft-slate">
                {education.degree}
              </h3>
              <p className="text-sm text-soft-slate/70 mt-1 mb-4">
                {education.school}
              </p>
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
              {/* <p className="text-soft-slate text-sm leading-relaxed"> */}
              {/*   <span className="font-semibold">Key Coursework:</span>{" "} */}
              {/*   {education.coursework.join(" • ")} */}
              {/* </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationDesktop;
