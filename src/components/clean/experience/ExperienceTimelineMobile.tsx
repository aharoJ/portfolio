"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ScrollListAnimation from "../../acerca/ScrollListAnimation";


interface EducationInfoProps {
  school: string;
  degree: string;
  date?: string;
  gpa?: string;
  achievements?: string[];
}

const EducationInfo: React.FC<EducationInfoProps> = ({
  school,
  degree,
  date,
  gpa,
  achievements,
}) => {
  const listItemRef = useRef<HTMLLIElement | null>(null);
  return (
    <div className="w-full mx-auto container">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium text-white/80">{school}</h1>
          <h2 className="text-2xl font-light tracking-wide text-white/70">
            {degree}
          </h2>
        </div>
        <div className="flex flex-col text-right">
          <p className="text-xl hidden lg:block font-normal text-white/70">
            {date}
          </p>
          {gpa && (
            <p className="text-xl hidden lg:block font-normal text-white/70">
              GPA: {gpa}
            </p>
          )}
        </div>
      </div>
      {achievements && (
        <ul className="mt-6 list-disc pl-5">
          {achievements.map((achievement, index) => (
            <li
              className="my-4 lg:text-lg text-base font-normal text-white/80"
              key={index}
            >
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ------------------------------------------------------------------------------------------------
// -------------------- Types --------------------
interface ExperienceInfoProps {
  title: string;
  company: string;
  companyLink?: string;
  date?: string;
  location: string;
  bullets: string[];
}

// -------------------- ExperienceInfo Component --------------------
const ExperienceInfo: React.FC<ExperienceInfoProps> = ({
  title,
  company,
  companyLink,
  date,
  location,
  bullets,
}) => {
  const listItemRef = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={listItemRef}
      className="mx-auto my-14 w-[90%] flex flex-col items-start first:mt-0 last:mb-0"
    >
      {/* Circle / indicator animation */}
      <ScrollListAnimation reference={listItemRef} />

      {/* Main content */}
      <motion.div
        initial={{ y: 58, x: 0 }}
        whileInView={{ y: 0, x: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full"
      >
        <div className="flex justify-between items-start w-full mx-4 lg:mx-auto">
          <div>
            <h1 className="text-3xl font-medium text-white/80">{title}</h1>
            {/* If a link is provided, wrap the company in an <a> */}
            {companyLink ? (
              <a
                href={companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-light tracking-wide text-white/70 underline"
              >
                {company}
              </a>
            ) : (
              <h2 className="text-2xl font-light tracking-wide text-white/70">
                {company}
              </h2>
            )}
          </div>
          <div className="flex flex-col text-right">
            {location && (
              <p className="lg:text-xl hidden lg:block lg:font-normal text-white/80">
                {location}
              </p>
            )}
            {date && (
              <p className="lg:text-xl hidden lg:block lg:font-normal text-white/70">
                {date}
              </p>
            )}
          </div>
        </div>

        {/* Bullets */}
        {bullets?.length > 0 && (
          <ul className="mt-2 list-disc pl-8 lg:pl-5">
            {bullets.map((bullet, index) => (
              <li
                key={index}
                className="mt-2 lg:text-lg text-base font-normal text-white/80"
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </li>
  );
};

// -------------------- Example Data --------------------
const experienceData: ExperienceInfoProps[] = [
  {
    title: "Software Engineer, Research & Development",
    company: "exploreCSR (Google)",
    location: "Carson, California",
    bullets: [
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit...",
    ],
  },
  {
    title: "Software Engineer, Intern",
    company: "Turner Fairbank Highway Research Center (Federal Job)",
    companyLink: "#LINK",
    location: "McLean, Virginia",
    bullets: [
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit...",
    ],
  },
  {
    title: "Software Development Engineer in Test (SDET)",
    company: "Computing Alliance of Hispanic Serving Institutions",
    location: "Union, New Jersey",
    bullets: [
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit...",
    ],
  },
  {
    title: "Software Engineer and Program Lead",
    company: "Center for Innovation in STEM Education (Apple)",
    companyLink: "https://csudh.edu",
    location: "Los Angeles Unified School District, California",
    bullets: [
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit...",
    ],
  },
  {
    title: "Regional Sales Lead & Shadow Trainer",
    company: "T-Mobile",
    location: "Whittier, California",
    bullets: [
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit...",
    ],
  },
  {
    title: "Lead Server",
    company: "M&M Restaurant",
    location: "Downey, California",
    bullets: [
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit...",
    ],
  },
];

// -------------------- TimelineMobile Component --------------------
const ExperienceTimelineMobile: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    layoutEffect: false,
  });

  return (
    <div className="container w-full flex flex-col">
      <h2 className="my-6 w-full text-center text-5xl font-bold text-white">
      Experience
      </h2>

      <div ref={containerRef} className="relative mx-auto w-full">
        {/* Vertical timeline bar */}
        <motion.div
          className="absolute top-0 left-[28px] w-[2px] h-full bg-primary origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        {/* Render all experiences */}
        <ul className="ml-4 flex w-full flex-col">
          {experienceData.map((expItem, index) => (
            <ExperienceInfo key={index} {...expItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTimelineMobile;
