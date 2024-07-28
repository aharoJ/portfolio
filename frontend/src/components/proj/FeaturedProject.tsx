"use client";
import twitter from "../../../public/projects/twitter.png";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

interface BigProjectProps {
  hashtags?: string[];
  title: string;
  description: string;
  // img: StaticImageData;
  img: string;
  link: string;
  github: string;
}

const BigProject: React.FC<BigProjectProps> = ({
  hashtags = [],
  title,
  description,
  img,
  link,
  github,
}) => {
  return (
    <article
      className="relative flex w-full items-center rounded-3xl border border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]"
      />

      <div className="flex w-full">
        <Link
          href={link}
          target="_blank"
          className="w-auto cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            src={img}
            alt={title}
            className="h-auto w-full"
            priority
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      50vw"
          />
        </Link>

        <div className="flex w-[50%] flex-col md:w-full">
          <div className="ml-6 flex flex-wrap justify-start space-x-4">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="text-2xl font-light text-dark/80 dark:text-light/80"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="ml-6 flex w-auto flex-row">
            <div className="w-1/2">
              <Link href={link} target="_blank">
                <h2 className="my-2 text-left text-7xl hover:underline font-semibold text-gray-400 dark:text-orange-200 sm:text-sm">
                  {title}
                </h2>
              </Link>
            </div>
            <div className="w-1/2">
              <div className="mt-6 mx-6 space-x-4 flex items-center justify-end">
                <Link href={github} target="_blank" className="w-12">
                  <GithubIcon />
                </Link>
                <Link
                  href={link}
                  target="_blank"
                  className="rounded-lg bg-dark p-2 text-2xl font-semibold text-light dark:bg-light dark:text-dark"
                >
                  Visit Project
                </Link>
              </div>
            </div>
          </div>
          <p className="my-2 px-6 text-2xl font-normal text-dark/80 dark:text-light sm:text-sm">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const GithubIcon: React.FC<SvgIconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-full ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

const Featured: React.FC = () => {
  return (
    <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
      <div className="grid grid-cols-12 gap-24 gap-x-8 gap-y-28  md:gap-x-6 md:gap-y-10">
        <div className="col-span-12">
          <BigProject
            title="Twitter"
            img={twitter}
            description="A Solo Project using full stack development. For the tech stack we are using Java, Spring Boot, Spring Security, and Postman for backend stability. Managing credentians, forms, logins, signs with PostgreSQL for robust data management. For the frontend we are using TypeScript with React with vanilla html and css for an interactive UI experience."
            github="https://github.com/aharoJ/twitter-clone"
            link="https://github.com/aharoJ/twitter"
            hashtags={[
              "Twitter",
              "Spring",
              "Java",
              "React",
              "Typescript",
              "PostgreSQL",
            ]}
          />
        </div>
      </div>
    </main>
  );
};

export default Featured;
