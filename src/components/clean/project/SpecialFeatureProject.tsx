"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import dotfiles from "../../../../public/projects/tmux.png";
import barbershop from "../../../../public/projects/Barbershop.png";

// Wrap Next.js Image with Framer Motion
const FramerImage = motion.create(Image);

/* ====================================================
   GithubFeaturedIcon Component
   ==================================================== */
interface GithubFeaturedIconProps {
  path: string;
}

const GithubFeaturedIcon: React.FC<GithubFeaturedIconProps> = ({ path }) => {
  return (
    <div className="flex space-x-4 lg:space-x-8">
      <Link
        href={path}
        className="w-10 h-10 border border-primary rounded-full flex justify-center items-center text-primary 
        text-xl hover:bg-primary hover:text-red-600 hover:transition-all duration-500"
        target="_blank"
      >
        <FaGithub className="text-2xl text-gray-400 hover:text-black" />
      </Link>
    </div>
  );
};

/* ====================================================
   SpecialFeatureProject Component (Hybrid)
   ==================================================== */
const SpecialFeatureProject: React.FC = () => {
  return (
    <main className="container mx-auto my-24 flex w-[80%]">
      <article
        className="relative flex flex-col w-auto items-center rounded-3xl 
        border-2 border-solid border-dark bg-main p-4"
      >
        <div className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-white" />

        <div className="flex flex-col w-full items-center">
          <h2 className="text-3xl font-semibold text-gray-400 mb-6">
            Featured Repositories
          </h2>

          {/* Grid for barbershop & config */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* barbershop */}
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
              {/* Motion-enabled image */}
              <div className="w-full overflow-hidden rounded-lg mb-4">
                <Link
                  href="https://github.com/aharoJ/barbershop"
                  target="_blank"
                  className="block w-full h-auto"
                >
                  <FramerImage
                    src={barbershop}
                    alt="barbershop"
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    priority
                  />
                </Link>
              </div>
              {/* Title & Icon in one row */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">barbershop</h3>
                <GithubFeaturedIcon path="https://github.com/aharoJ/barbershop" />
              </div>
              <p className="text-gray-600 mb-4">
                Barbershop is an all-in-one appointment management app, it
                handles everything from real-time booking to staff and customer
                management, all wrapped up in a clean, intuitive interface.
              </p>
              <div className="text-sm text-gray-500 space-x-3 mb-4">
                <span>⭐ 15</span>
                <span>👁 19,000</span>
                <span>🍴 3</span>
                <span>🗃️ 49</span>
              </div>
            </div>

            {/* config */}
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
              {/* Motion-enabled image */}
              <div className="w-full overflow-hidden rounded-lg mb-4">
                <Link
                  href="https://github.com/aharoJ/config"
                  target="_blank"
                  className="block w-full h-auto"
                >
                  <FramerImage
                    src={dotfiles}
                    alt="config"
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    priority
                  />
                </Link>
              </div>
              {/* Title & Icon in one row */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">config</h3>
                <GithubFeaturedIcon path="https://github.com/aharoJ/config" />
              </div>
              <p className="text-gray-600 mb-4">
                Nvim, Tmux, Alacritty, SKHD, Yabai, LF, Kitty, Obsidian, and
                much... much more!Keeping this repo up to date has taught me a
                lot about shell scripting and how different tools work together.
              </p>
              <div className="text-sm text-gray-500 space-x-3 mb-4">
                <span>⭐ 9</span>
                <span>👁 1,600</span>
                <span>🗃️ 3</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default SpecialFeatureProject;