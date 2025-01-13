"use client";
import portfolio from "../../../public/projects/portfolio.png";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GithubFeaturedIcon from "../icon/GithubFeaturedIcon";

const FramerImage = motion(Image);

interface BigProjectProps {
  hashtags?: string[];
  title: string;
  description: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const FeaturedCardMobile: React.FC<BigProjectProps> = ({
  hashtags = [],
  title,
  description,
  img,
  link,
  github,
}) => {
  return (
    <div className="container block lg:hidden">
      <article
        className="container mx-auto relative flex flex-col w-full 
        items-center rounded-2xl border-2 border-solid border-dark bg-main p-4"
      >
        <div className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-white" />

        <div className="flex w-full flex-col items-center">
          <Link
            href={link}
            target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-xl"
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

          <div className="flex w-full flex-col my-2">
            <div className="flex flex-wrap justify-start space-x-2 my-2">
              {hashtags.map((tag, index) => (
                <span key={index} className="text-xs font-light text-dark/80">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex w-full justify-between space-x-2 items-center my-2">
              <h2 className="text-2xl text-primary">{title}</h2>
              <GithubFeaturedIcon path={github} />
            </div>

            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeaturedCardMobile;
