// path: @/modules/experience/ExperienceDesktop.tsx

import React from "react";
import Image from "next/image";

// Experience data with placeholder images
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

const ExperienceDesktop = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold  text-creamy-ivory mb-4 text-creamyLight-pearl">
          EXPERIENCE
        </h2>
        <div className="w-40 h-1 bg-soft-moss mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            // className={`flex items-start gap-12 transition-all duration-300 bg-[#18181b] hover:bg-gray-50 p-8 rounded-xl
            className={`flex items-start gap-12 transition-all duration-300 bg-creamy-bone hover:bg-creamy-white p-8 rounded-xl  
               border-4 border-soft-moss ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className="flex-shrink-0 relative">
              <div className="relative w-64 h-64 overflow-hidden rounded-xl shadow-lg">
                {/* Placeholder for image */}
                <div className="bg-creamy-ivory border border-dashed rounded-xl w-full h-full" />
                <div className="absolute inset-0 border-2 border-soft-moss rounded-xl">
                  <Image
                    src={exp.image}
                    alt={`${exp.title} at ${exp.company}`}
                    fill
                    sizes="256px"
                    className="object-cover text-soft-slate"
                    priority={exp.id === 1} // eager-load the first one
                  />
                </div>
              </div>
              <div
                className={`absolute -top-4 -left-4 w-8 h-8 rounded-full bg-soft-moss 
                  flex items-center justify-center text-creamy-bone font-bold text-sm 
                    ${index % 2 === 0 ? "" : "-right-4 left-auto"}`}
              >
                {exp.id}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-soft-moss text-white px-3 py-1 rounded-md text-sm font-medium">
                  {exp.company}
                </div>
                <div className="text-soft-slate">{exp.location}</div>
              </div>

              {/* <h3 className="text-2xl font-bold text-soft-moss mb-2"> */}
              <h3 className="text-2xl font-bold text-soft-slate mb-2">
                {exp.title}
              </h3>
              <p className="text-soft-slate leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex gap-2 mt-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                  >
                    Skill {i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceDesktop;
