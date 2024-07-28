"use client";
import twitter from "../../../public/projects/twitter.png";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "../svg/SvgIcons";

const FramerImage = motion(Image);

interface BigProjectProps {
  hashtags?: string[];
  title: string;
  description: string;
  img: StaticImageData;
  // img: string;
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
    <article className="relative flex w-full items-center rounded-3xl border border-solid border-dark bg-light p-4 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]" />

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
              <span key={index} className="text-2xl font-light text-dark/80">
                #{tag}
              </span>
            ))}
          </div>

          <div className="ml-6 flex w-auto flex-row">
            <div className="w-1/2">
              <Link href={link} target="_blank">
                <h2 className="my-2 text-left text-7xl hover:underline font-semibold text-gray-400 sm:text-sm">
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
                  className="rounded-lg bg-dark p-2 text-2xl font-semibold text-light"
                >
                  Visit Project
                </Link>
              </div>
            </div>
          </div>
          <p className="my-2 px-6 text-2xl font-normal text-dark/80 sm:text-sm">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

const Featured: React.FC = () => {
  return (
    <main className="mb-16 flex w-full flex-col items-center justify-center">
      <div className="grid grid-cols-12 gap-24 gap-x-8 gap-y-28  md:gap-x-6 md:gap-y-10">
        <div className="col-span-12">
          <BigProject
            title="Twitter"
            img={twitter}
            description="A Solo Project using full stack development. For the tech stack we are using Java, Spring Boot, Spring Security, and Postman for backend stability. Managing credentials, forms, logins, signs with PostgreSQL for robust data management. For the frontend we are using TypeScript with React with vanilla html and css for an interactive UI experience."
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
