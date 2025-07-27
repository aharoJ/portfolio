"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ScrollListAnimationDesktop from "./ScrollListAnimationDesktop";

// -----------------------------------------------------------------------------------------------------------------------

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
      className="mx-auto my-14 flex w-[90%] flex-col items-start first:mt-0 last:mb-0 "
    >
      <ScrollListAnimationDesktop reference={listItemRef} />

      <motion.div
        initial={{ y: 58, x: 0 }}
        whileInView={{ y: 0, x: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full"
      >
        <div className="flex justify-between items-start w-full mx-4 lg:mx-auto">
          <div className="flex flex-col">
            <h1 className="text-3xl  font-medium  text-white/80 ">{title}</h1>
            <h2 className="text-2xl  font-light tracking-wide  text-white/70">
              {company}
            </h2>
          </div>
          <div className="flex flex-col text-right">
            <p className="lg:text-xl hidden lg:block lg:font-normal text-white/80">
              {location}
            </p>
            <p className="lg:text-xl hidden lg:block lg:font-normal text-white/70">
              {date}
            </p>
          </div>
        </div>
        {bullets && (
          <ul className="mt-2 list-disc pl-8 lg:pl-5 ">
            {bullets.map((bullet, index) => (
              <li
                className="mt-2 lg:text-lg text-base font-normal text-white/80"
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

// ------------------------------------------------------------------------------------------------------------------------

// Timeline component
const ExperienceTimelineDesktop: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["center end", "center center"],
    // ADDED LINE BELOW MAY CAUSE ISSUES
    layoutEffect: false,
  });

  return (
    <div className="flex container w-full flex-col mt-24 mb-64">
      {/* ------------------------------------------------------------------------------------------------------------*/}
      <h2 className="mb-12 w-full text-center text-7xl font-light tracking-tight text-white my-16">
        Experience
      </h2>

      <div ref={ref} className="relative mx-auto w-full">
        <motion.div
          className="absolute top-4 h-full origin-top bg-primary left-[28px] w-[2px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="ml-4 flex w-full flex-col ">
          <ExperienceInfo
            title="Software Engineer"
            company="College of Veterinary Medicine (westernU)"
            // date="Month 0000 - Month 0000"
            location="Pomona, California"
            bullets={[
              "Created an in-house web app that helps vet students and faculty track hands-on training, saving the school major licensing costs.",
            ]}
          />

          <ExperienceInfo
            title="Software Engineering Researcher"
            company="Google exploreCSR Program"
            // date="Month 0000 - Month 0000"
            location="Carson, California"
            bullets={[
              "Worked on Google-funded projects that made web apps snappier and explored new ways to model graphics data.",
            ]}
          />

          <ExperienceInfo
            title="Software Engineer, Intern"
            company="Turner Fairbank Highway Research Center (Federal Job)"
            companyLink="#LINK TEST"
            // date="Month 0000 - Month 0000"
            location="McLean, Virginia"
            bullets={[
              "Automated realistic self-driving-car simulations for U.S. transportation researchers to test road-safety ideas faster.",
            ]}
          />

          <ExperienceInfo
            title="Software Development Engineer in Test (SDET)"
            company="Computing Alliance of Hispanic Serving Institutions"
            companyLink="#"
            // date="Month 0000 - Month 0000"
            location="Union, New Jersey"
            bullets={[
              "Built smart test scripts that quickly spot hidden bugs, boosting reliability for student software projects.",
            ]}
          />

          <ExperienceInfo
            title="Software Engineer and Program Lead"
            company="Center for Innovation in STEM Education (Apple)"
            companyLink="https://csudh.edu"
            // date="Month 0000 - Month 0000"
            location="Los Angeles Unified School District, California"
            bullets={[
              "Led coding workshops in under-resourced LA schools, guiding teachers and kids through hands-on Swift and robotics projects.",
            ]}
          />

          <ExperienceInfo
            title="Regional Sales Lead & Shadow Trainer"
            company="T-Mobile"
            // date="Month 0000 - Month 0000"
            location="Whittier, California"
            bullets={[
              "Recognized as the most influential Mobile Expert & Shadow Trainer for the East Los Angeles Region.",
            ]}
          />

          <ExperienceInfo
            title="Lead Server"
            company="M&M  Restaurant"
            // date="Month 0000 - Month 0000"
            location="Downey, California"
            bullets={[
              "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
            ]}
          />
          <ExperienceInfo
            title="Cashier Clerk"
            company="Dollar Zone"
            // date="Month 0000 - Month 0000"
            location="Pico Rivera, California"
            bullets={["A very humbling job.", ]}
          />
          <ExperienceInfo
            title="Dish Washer"
            company="Zapien's Salsa Grill"
            // date="Month 0000 - Month 0000"
            location="Pico Rivera, California"
            bullets={["The most humbling job I've had.", ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTimelineDesktop;
