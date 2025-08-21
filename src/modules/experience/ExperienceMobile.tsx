// @/modules/experience/ExperienceMobile.tsx
import Image from "next/image";

// Reuse the same data shape as desktop for consistency
const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "College of Veterinary Medicine (westernU)",
    location: "Pomona, California",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/experience/cvm/cvm.JPG",
  },
  {
    id: 2,
    title: "Software Engineering Researcher",
    company: "Google exploreCSR Program",
    location: "Carson, California",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/experience/exploreCSR/google.jpg",
  },
  {
    id: 3,
    title: "Software Engineer, Intern",
    company: "Turner Fairbank Highway Research Center (Federal Job)",
    location: "McLean, Virginia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/experience/tfhrc/tfhrc.JPG",
  },
  {
    id: 4,
    title: "Software Development Engineer in Test (SDET)",
    company: "Computing Alliance of Hispanic Serving Institutions",
    location: "Union, New Jersey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/experience/cashi/cashi.JPG",
  },
  {
    id: 5,
    title: "Software Engineer and Program Lead",
    company: "Center for Innovation in STEM Education (Apple)",
    location: "Los Angeles Unified School District, California",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/experience/cise/cise.jpeg",
  },
  {
    id: 6,
    title: "Regional Sales Lead & Shadow Trainer",
    company: "T-Mobile",
    location: "Whittier, California",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/experience/t-mobile/tmobile.JPG",
  },
  {
    id: 7,
    title: "Lead Server",
    company: "M&M Restaurant",
    location: "Downey, California",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    image: "/images/exp7.jpg",
  },
  {
    id: 8,
    title: "Cashier Clerk",
    company: "Dollar Zone",
    location: "Pico Rivera, California",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    image: "/images/exp8.jpg",
  },
  {
    id: 9,
    title: "Dish Washer",
    company: "Zapien's Salsa Grill",
    location: "Pico Rivera, California",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    image: "/images/exp9.jpg",
  },
];

export default function ExperienceMobile() {
  return (
    <section aria-label="Experience (mobile)" className="relative">
      <div className="mx-auto max-w-2xl px-5 py-16">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-creamyLight-pearl">
            EXPERIENCE
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 bg-soft-moss" />
        </header>

        <ul role="list" className="space-y-4">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              className="rounded-2xl border-4 border-soft-moss bg-creamy-bone transition-colors hover:bg-creamy-white"
            >
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-3 p-4">
                  {/* Thumb with desktop-style frame */}
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg shadow">
                    <div className="h-full w-full rounded-lg border border-dashed bg-creamy-ivory" />
                    <div className="absolute inset-0 rounded-lg border-2 border-soft-moss">
                      <Image
                        src={exp.image}
                        alt={`${exp.title} at ${exp.company}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                        priority={exp.id === 1}
                      />
                    </div>
                  </div>

                  {/* Title + meta */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-bold leading-tight text-soft-slate">
                      {exp.title}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded-md bg-soft-moss px-2 py-0.5 text-xs font-medium text-white">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  {/* Caret */}
                  <svg
                    className="h-4 w-4 shrink-0 text-soft-slate transition-transform group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.108l3.71-3.877a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>

                {/* Expanded content */}
                <div className="px-4 pb-4 pt-1">
                  <p className="text-xs text-soft-slate/80">{exp.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-soft-slate">
                    {exp.description}
                  </p>

                  {/* Tags styled to scheme */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-soft-moss bg-creamy-ivory px-3 py-1 text-[11px] font-medium tracking-wide text-soft-slate"
                      >
                        Skill {i + 1}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
