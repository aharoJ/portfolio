// @/modules/projects/ProjectDesktop.tsx
"use client";

import React, { useMemo, useState } from "react";
import { StaticImageData } from "next/image";

import twitter from "../../../public/projects/twitter.png";
import threeD from "../../../public/projects/3D-Portfolio.png";
import ems from "../../../public/projects/ems.png";
import apple from "../../../public/projects/apple.png";
import skhd_yabai from "../../../public/projects/yabai_skhd.png";
import tmux from "../../../public/projects/tmux.png";
import lf from "../../../public/projects/lf.png";
import starship from "../../../public/projects/starship.png";
import vivaldi from "../../../public/projects/vivaldi.png";
import alacritty from "../../../public/projects/vim.png";
import notebook from "../../../public/projects/notebook.png";
import gpt3 from "../../../public/projects/gpt3.png";
import QuantumAnnealing from "../../../public/projects/QuantumAnnealing.png";

import ProjectCardDesktop from "./ProjectCardDesktop";

type Category = "Web Apps" | "Dot Files" | "Machine Learning";

type Project = {
  title: string;
  img: StaticImageData;
  github: string;
  link: string;
  hashtags: readonly string[];
  category: Category;
};

const ALL_PROJECTS = [
  {
    title: "Twitter",
    img: twitter,
    github: "https://github.com/aharoJ/Twitter",
    link: "https://github.com/aharoJ/Twitter",
    hashtags: ["Java", "Spring", "React", "Typescript", "HTML&CSS"],
    category: "Web Apps",
  },
  {
    title: "3D Portfolio",
    img: threeD,
    github: "https://github.com/aharoJ/3D-Portfolio",
    link: "https://github.com/aharoJ/3D-Portfolio",
    hashtags: ["React", "Tailwindcss", "Javascript", "Vite"],
    category: "Web Apps",
  },
  {
    title: "EmployeeTracker",
    img: ems,
    github: "https://github.com/aharoJ/EmployeeManagementSystemApp",
    link: "https://github.com/aharoJ/EmployeeManagementSystemApp",
    hashtags: ["Java", "Spring", "Vite", "React", "Tailwindcss"],
    category: "Web Apps",
  },
  {
    title: "Apple",
    img: apple,
    github: "https://github.com/aharoJ/Apple",
    link: "https://github.com/aharoJ/Apple",
    hashtags: ["React", "HTML&CSS", "Typescript", "Sanity"],
    category: "Web Apps",
  },
  {
    title: "chatGPT3",
    img: gpt3,
    github: "https://github.com/aharoJ/chatGPT3",
    link: "https://github.com/aharoJ/chatGPT3",
    hashtags: ["react", "html", "css", "javascript", "ml"],
    category: "Web Apps",
  },

  {
    title: "yabai-skhd-config",
    img: skhd_yabai,
    github: "https://github.com/aharoJ/yabai-skhd-config",
    link: "https://github.com/aharoJ/yabai-skhd-config",
    hashtags: [
      "hacking MacOS",
      "shell scripting",
      "skhd-config",
      "yabai-config",
    ],
    category: "Dot Files",
  },
  {
    title: "tmux-config",
    img: tmux,
    github: "https://github.com/aharoJ/tmux-config",
    link: "https://github.com/aharoJ/tmux-config",
    hashtags: ["handcrafted design", "catppuccin", "tmux-config"],
    category: "Dot Files",
  },
  {
    title: "lf-config",
    img: lf,
    github: "https://github.com/aharoJ/lf-config",
    link: "https://github.com/aharoJ/lf-config",
    hashtags: [
      "shell scripting",
      "custom Scripts",
      "kitty-config",
      "lf-config",
    ],
    category: "Dot Files",
  },
  {
    title: "starship-config",
    img: starship,
    github: "https://github.com/aharoJ/starship-config",
    link: "https://github.com/aharoJ/starship-config",
    hashtags: [
      "custom toml file",
      "hand-picked colors",
      "timezone",
      "starship-config",
    ],
    category: "Dot Files",
  },
  {
    title: "vivaldi-config",
    img: vivaldi,
    github: "https://github.com/aharoJ/vivaldi-config",
    link: "https://themes.vivaldi.net/themes/nV6vpPxDvdN",
    hashtags: ["custom binds", "hotkeys", "vivaldi-config"],
    category: "Dot Files",
  },
  {
    title: "alacritty-config",
    img: alacritty,
    github: "https://github.com/aharoJ/alacritty-config",
    link: "https://github.com/aharoJ/alacritty-config",
    hashtags: ["terminal emulator", "yalm file", "alacritty-config"],
    category: "Dot Files",
  },

  {
    title: "Machine Learning",
    img: notebook,
    github: "https://github.com/aharoJ/opensource/tree/main/machine-learning",
    link: "https://github.com/aharoJ/opensource/tree/main/machine-learning",
    hashtags: [
      "ai",
      "machine learning",
      "capstone",
      "deep learning",
      "jupyter",
    ],
    category: "Machine Learning",
  },
  {
    title: "Quantum Annealing",
    img: QuantumAnnealing,
    github: "https://github.com/aharoJ/QuantumAnnealing",
    link: "https://github.com/aharoJ/QuantumAnnealing",
    hashtags: ["python", "matplot"],
    category: "Machine Learning",
  },
] satisfies ReadonlyArray<Project>;

const CATEGORIES = [
  "All",
  "Web Apps",
  "Dot Files",
  "Machine Learning",
] as const;

export default function ProjectDesktop() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const projects = useMemo(
    () =>
      active === "All"
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((p) => p.category === active),
    [active],
  );

  return (
    <section aria-label="Projects (desktop)" className="w-full py-12">
      {/* Filter Bar — chips w/ palette + zero jank */}
      <nav
        aria-label="Filter projects by category"
        className="mx-auto mb-10 flex max-w-6xl flex-wrap items-center justify-center gap-3"
      >
        {CATEGORIES.map((cat) => {
          const on = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                on
                  ? " bg-soft-moss text-creamy-bone"
                  : " bg-creamy-bone text-soft-slate hover:bg-creamy-ivory",
              ].join(" ")}
              aria-pressed={on}
            >
              {cat}
            </button>
          );
        })}
      </nav>

      {/* Grid — fixed cols, generous gaps (no layout hiccups) */}
      <main className="container mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12">
        {projects.map((p, idx) => (
          <ProjectCardDesktop
            key={`${p.title}-${idx}`}
            title={p.title}
            img={p.img}
            github={p.github}
            link={p.link}
            hashtags={p.hashtags}
            priority={idx < 2} // only first row eager-loads
          />
        ))}
      </main>
    </section>
  );
}
