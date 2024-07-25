"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ScrollListAnimation from "./ScrollListAnimation";

interface EducationInfoProps {
  school: string;
  degree: string;
  date: string;
  gpa?: string;
  achievements?: string[];
}

// EducationInfo component
const EducationInfo: React.FC<EducationInfoProps> = ({
  school,
  degree,
  date,
  gpa,
  achievements,
}) => {
  const listItemRef = useRef<HTMLLIElement | null>(null);
  return (
    <div className="w-full">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col">
          <h1 className="text-xl font-medium text-white/80">{school}</h1>
          <h2 className="text-xl font-light tracking-wide text-white/70">
            {degree}
          </h2>
        </div>
        <div className="flex flex-col text-right">
          <p className="text-base font-normal text-white/70">{date}</p>
          {gpa && (
            <p className="text-base font-normal text-white/70">GPA: {gpa}</p>
          )}
        </div>
      </div>
      {achievements && (
        <ul className="mt-2 list-disc pl-5">
          {achievements.map((achievement, index) => (
            <li
              className="mt-2 text-base font-normal text-white/80"
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

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Define types for props
interface ExperienceInfoProps {
  title: string;
  company: string;
  companyLink?: string;
  date?: string;
  location: string;
  bullets: string[];
}

// ExperienceInfo component
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
      className="mx-auto my-10 flex w-[90%] flex-col items-start first:mt-0 last:mb-0 "
    >
      <ScrollListAnimation reference={listItemRef} />

      <motion.div
        initial={{ y: 58, x: 0 }}
        whileInView={{ y: 0, x: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full"
      >
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col">
            <h1 className="text-xl font-medium ita text-white/80">{title}</h1>
            <h2 className="text-xl font-light tracking-wide text-white/70">
              {company}
            </h2>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-base font-normal text-white/70">{date}</p>
            <p className="text-base font-normal text-white/80">{location}</p>
          </div>
        </div>
        {bullets && (
          <ul className="mt-2 list-disc pl-5">
            {bullets.map((bullet, index) => (
              <li
                className="mt-2 text-base font-normal text-white/80"
                key={index}
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

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Timeline component
const Timeline: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({});

  return (
    <div className="flex container w-full flex-col">

      {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <h2 className="my-12 w-full text-center text-7xl font-light tracking-tight text-white ">
        Education
      </h2>

      <EducationInfo
        school="California State University, Dominguez Hills (CSUDH)"
        degree="Bachelor of Science in Computer Science"
        date="Jan 2019 - Dec 2023"
        gpa="3.4"
        achievements={[
          "Google Scholarship, December (2023): Awarded a scholarship under the mentorship of Dr. Tang as a Google Explorer.",
          "GMiS Conference, October (2023): Achieved 2nd place out of 300+ contestants, competed in a hackathon and placed 5th place.",
          "Research for LREU, May (2023): Received funding for Mutation Research.",
          "Summer Cord, Jun (2022): Led a competitive robotics summer course, engaging over 40 students in advanced problem-solving and coding. Designed a maze challenge, which students navigated using robots programmed with JavaScript and Swift.",
          "T-Mobile Regional Best Seller, Jun (2021): Recognized as the most influential M-expert & shadow Trainer for the East Los Angeles Region.",
          "Awards: Latinos for Engineering Class Scholarship - Fall (2022), Latinos for Engineering Class Scholarship - Spring (2023), Honors Society within the Universities club to receive external benefits.",
          "Technical Coursework: Intro to CS and Programming (I, II, III), Software Development, Assembly, Discrete Structures, Applied Data Structures, Data Structures, Computer Organization, Machine Learning, Analysis of Algorithms, Relational Database, Senior Design.",
        ]}
      />

      {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <h2 className="my-12 w-full text-center text-7xl font-light tracking-tight text-white ">
        Experience
      </h2>

      <div ref={ref} className="relative mx-auto w-full">
        <motion.div
          className="absolute top-0 h-full origin-top bg-primary  left-[28px] w-[2px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="ml-4 flex w-full flex-col ">
          <ExperienceInfo
            title="Software Engineer, Research & Development"
            company="exploreCSR (Google)"
            // date="August 2023 - May 2024"
            location="Carson, California"
            bullets={[
              "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
            ]}
          />

          <ExperienceInfo
            title="Software Engineer, Intern"
            company="Turner Fairbank Highway Research Center (Federal Job)"
            companyLink="#LINK TEST"
            date="May 2023 - August 2023"
            location="McLean, Virginia"
            bullets={[
              "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
            ]}
          />

          <ExperienceInfo
            title="Software Development Engineer in Test (SDET)"
            company="Computing Alliance of Hispanic Serving Institutions"
            companyLink="#"
            date="January 2023 - Oct 2023"
            location="Union, New Jersey"
            bullets={[
              "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
            ]}
          />

          <ExperienceInfo
            title="Software Engineer and Program Lead"
            company="Center for Innovation in STEM Education (Apple)"
            companyLink="https://csudh.edu"
            date="May 2021 - December 2022"
            location="Los Angeles Unified School District, California"
            bullets={[
              "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
            ]}
          />

          <ExperienceInfo
            title="Regional Sales Lead & Shadow Trainer"
            company="T-Mobile"
            date="Feb 2019 - Jun 2021"
            location="Whittier, California"
            bullets={[
              "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
            ]}
          />

          <ExperienceInfo
            title="Lead Server"
            company="M&M  Restaurant"
            date="Jun 2012 - Jan 2018"
            location="Downey, California"
            bullets={[
              "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
