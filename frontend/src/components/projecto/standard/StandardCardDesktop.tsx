"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GithubStandardIcon from "../GithubStandardIcon";

const FramerImage = motion(Image);

interface BigProjectProps {
  hashtags?: string[];
  title: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const StandardCardDesktop: React.FC<BigProjectProps> = ({
  hashtags = [],
  title,
  img,
  link,
  github,
}) => {
  return (
    <div className="hidden lg:block">
      <article className="relative flex flex-col items-center rounded-3xl border-2 border-solid border-dark bg-main p-2 ">
        <div className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-white" />

        <div className="flex flex-col items-center w-auto">
          <Link
            href={link}
            target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-3xl"
          >
            <FramerImage
              src={img}
              alt={title}
              className="h-auto w-full"
              priority
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.2 }}
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
            />
          </Link>

          <div className="flex flex-col w-full">
            <div className="flex justify-center space-x-12 items-center mt-1 ">
              <h2 className="text-2xl font-semibold tracking-wider  text-gray-400">
                {title}
              </h2>
              <GithubStandardIcon path={github} />
            </div>

            <div className="flex flex-wrap justify-center space-x-4 my-1">
              {hashtags.map((tag, index) => (
                <span key={index} className="text-base font-light text-dark/80">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default StandardCardDesktop;
