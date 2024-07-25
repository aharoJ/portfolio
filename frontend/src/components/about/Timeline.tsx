"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ScrollListAnimation from "./ScrollListAnimation";

// Define types for props
interface ExperienceInfoProps {
  title: string;
  company: string;
  companyLink?: string;
  time: string;
  address: string;
  bullets: string[];
}

// ExperienceInfo component
const ExperienceInfo: React.FC<ExperienceInfoProps> = ({
  title,
  company,
  companyLink,
  time,
  address,
  bullets,
}) => {
  const listItemRef = useRef<HTMLLIElement | null>(null);
  return (
    <li
      ref={listItemRef}
      className="mx-auto mb-24 flex w-[90%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[85%]"
    >
      <ScrollListAnimation reference={listItemRef} />

      <motion.div
        initial={{ y: 58, x: 0 }}
        whileInView={{ y: 0, x: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h1 className="ml-4 text-3xl font-normal text-primary/80  md:text-2xl">
          {title}&nbsp;
          <span className="text-3xl font-light tracking-wide text-secondary/80 md:text-2xl">
            @{company}
          </span>
        </h1>
        <p>{time}</p>
        <p>{address}</p>
        {bullets && (
          <ul className="mt-2 list-disc">
            {bullets.map((bullet, index) => (
              <li
                className="ml-4 mt-2 text-2xl font-normal text-secondary/80 md:text-lg"
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


// Timeline component
const Timeline: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
  });

  return (
    <div className="flex container w-full flex-col">
      <h2 className="mb-6 mt-6 w-full text-center text-7xl font-light tracking-tight text-white ">
        Experience
      </h2>

      <div ref={ref} className="relative mx-auto w-full md:w-full">
        <motion.div
          className="absolute top-0 h-full origin-top bg-secondary  left-[28px] w-[2px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between md:ml-2">
          <ExperienceInfo
            title="Research Development Software Engineer"
            company="Google exploreCSR"
            time="Jan, 2023 - Present"
            address="Los Angeles, California"
            bullets={[
              "Researched Professor Umesh Vazirani's teachings to better understand the basics of quantum computing and its software applications, including hands-on work with Cirq. Moved on to machine learning, building a deep neural network without any libraries. Wrapped up by researching into how to create comprehensive software from start to finish.",
            ]}
          />

          <ExperienceInfo
            title="Software Development Engineer in Test (SDET)"
            company="Local Research Experiences for Undergraduates"
            companyLink="#"
            time="Feb 2023 - Oct 2023"
            address="Union, New Jersey (remote)"
            bullets={[
              "Investigated the effectiveness of mutation testing to evaluate software test quality, leveraging the Little Darwin framework and Pitest to explore the impact of test suite sizes and mutation operator variety on mutation scores, aiming to strengthen software robustness and uncover deeper insights into test suite coverage.",
            ]}
          />
          <ExperienceInfo
            title="Software Development Engineer in Test (SDET)"
            company="Local Research Experiences for Undergraduates"
            companyLink="#"
            time="Feb 2023 - Oct 2023"
            address="Union, New Jersey (remote)"
            bullets={[
              "Investigated the effectiveness of mutation testing to evaluate software test quality, leveraging the Little Darwin framework and Pitest to explore the impact of test suite sizes and mutation operator variety on mutation scores, aiming to strengthen software robustness and uncover deeper insights into test suite coverage.",
            ]}
          />
          <ExperienceInfo
            title="Software Development Engineer in Test (SDET)"
            company="Local Research Experiences for Undergraduates"
            companyLink="#"
            time="Feb 2023 - Oct 2023"
            address="Union, New Jersey (remote)"
            bullets={[
              "Investigated the effectiveness of mutation testing to evaluate software test quality, leveraging the Little Darwin framework and Pitest to explore the impact of test suite sizes and mutation operator variety on mutation scores, aiming to strengthen software robustness and uncover deeper insights into test suite coverage.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
