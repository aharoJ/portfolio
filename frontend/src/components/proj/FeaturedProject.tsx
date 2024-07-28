"use client";
import twitter from "../../../public/projects/twitter.png";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GithubProjectIcon from "./GithubProjectIcon";

const FramerImage = motion(Image);

interface BigProjectProps {
  hashtags?: string[];
  title: string;
  description: string;
  img: StaticImageData;
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
    <article className="container mx-auto relative flex flex-col w-full items-center rounded-3xl border-2 border-solid border-dark bg-main p-4">
      <div className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-white" />

      <div className="flex w-full">
        <Link
          href={link}
          target="_blank"
          className="w-[50%] h-full cursor-pointer overflow-hidden rounded-lg"
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

        <div className="flex w-[50%] flex-col p-4">
          <div className="mx-4 flex flex-wrap justify-start space-x-2">
            {hashtags.map((tag, index) => (
              <span key={index} className="text-base font-light text-dark/80">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex w-full flex-row">
            <div className="w-1/2">
              <Link href={link} target="_blank">
                <h2 className="my-2 text-left text-2xl hover:underline font-semibold text-gray-400">
                  {title}
                </h2>
              </Link>
            </div>
            <div className="w-1/2 flex justify-end items-center">
              <GithubProjectIcon path={github} />
            </div>
          </div>
          <p className="my-2 text-xl font-normal text-dark/80 sm:text-sm">
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
