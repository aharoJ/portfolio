// @/modules/education/EducationMobile.tsx
import Image from "next/image";

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
                  src="/education/grad.jpg"
                  alt="California State University, Dominguez Hills"
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
                Bachelor of Science in Computer Science
              </h3>
              <p className="mt-1 text-sm text-soft-slate">
                California State University, Dominguez Hills
              </p>
              <p className="text-xs text-soft-slate/80">
                Carson, CA · GPA: 3.4
              </p>
            </div>
          </div>

          {/* Badges */}
          <ul className="mt-4 flex flex-wrap gap-2">
            <li className="rounded-full bg-yellow-100 px-3 py-1 text-[11px] font-medium text-yellow-800">
              Google Scholar ($3K)
            </li>
            <li className="rounded-full bg-blue-100 px-3 py-1 text-[11px] font-medium text-blue-800">
              GMiS 2nd Place (300+)
            </li>
            <li className="rounded-full bg-green-100 px-3 py-1 text-[11px] font-medium text-green-800">
              Research Funding ($1.5K)
            </li>
            <li className="rounded-full bg-purple-100 px-3 py-1 text-[11px] font-medium text-purple-800">
              Robotics Program Lead
            </li>
          </ul>

          {/* Coursework */}
          <p className="mt-4 text-sm leading-relaxed text-soft-slate">
            <span className="font-semibold">Key Coursework:</span> Machine
            Learning • Data Structures • Software Development • Algorithm
            Analysis • Database Systems • Senior Design
          </p>
        </article>
      </div>
    </section>
  );
}
