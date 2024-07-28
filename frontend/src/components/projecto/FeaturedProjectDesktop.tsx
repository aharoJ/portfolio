"use client";
import portfolio from "../../../public/projects/portfolio.png";
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

const FeaturedProjectDesktop: React.FC<BigProjectProps> = ({
  hashtags = [],
  title,
  description,
  img,
  link,
  github,
}) => {
  return (
    <div className="container hidden lg:block">
      <article className="container mx-auto relative flex flex-col w-full items-center rounded-3xl border-2 border-solid border-dark bg-main p-4">
        <div className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-white" />

        <div className="flex w-full">
          <Link
            href={link}
            target="_blank"
            className="w-[60%] cursor-pointer overflow-hidden rounded-3xl"
          >
            <FramerImage
              src={img}
              alt={title}
              className="h-full w-full"
              priority
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.2 }}
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
            />
          </Link>

          <div className="flex w-[40%] flex-col p-4">
            <div className="flex flex-wrap justify-start space-x-2">
              {hashtags.map((tag, index) => (
                <span key={index} className="text-base font-light text-dark/80">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex w-full justify-start space-x-12 items-center my-4">
              <h2 className="text-5xl font-semibold text-gray-400">{title}</h2>
              <GithubProjectIcon path={github} />
            </div>

            <p className="text-base font-normal text-dark/80 ">{description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeaturedProjectDesktop;
