"use client";
import React, { useState } from "react";
import portfolio from "../../../../public/projects/portfolio.png";
import twitter from "../../../../public/projects/twitter.png";
import threeD from "../../../../public/projects/3D-Portfolio.png";
import ems from "../../../../public/projects/ems.png";
import apple from "../../../../public/projects/apple.png";
import skhd_yabai from "../../../../public/projects/yabai_skhd.png";
import tmux from "../../../../public/projects/tmux.png";
import lf from "../../../../public/projects/lf.png";
import starship from "../../../../public/projects/starship.png";
import vivaldi from "../../../../public/projects/vivaldi.png";
import alacritty from "../../../../public/projects/vim.png";
import notebook from "../../../../public/projects/notebook.png";
import gpt3 from "../../../../public/projects/gpt3.png";
import QuantumAnnealing from "../../../../public/projects/QuantumAnnealing.png";

// -- import your StandardCardDesktop component
import StandardCardDesktop from "@/app/dev/standard/StandardCardDesktop";

// Combine all of your projects into one array, adding a "category" property:
const allProjects = [
  // Web Apps
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

  // Dot Files
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

  // Machine Learning
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
    img: QuantumAnnealing, // MUST UPLOAD AN IMAGE HERE
    github: "https://github.com/aharoJ/QuantumAnnealing",
    link: "https://github.com/aharoJ/QuantumAnnealing",
    hashtags: ["python", "matplot", ""],
    category: "Machine Learning",
  },
];

// We’ll define all categories we want to show in the filter bar:
const categories = ["All", "Web Apps", "Dot Files", "Machine Learning"];

const StandardGridDesktop: React.FC = () => {
  // State to hold which category is currently selected:
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter the array depending on activeCategory:
  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="hidden lg:block">
      {/* Category Filter Bar */}
      <div className="flex justify-center space-x-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-md font-semibold transition-colors
              ${
                activeCategory === cat
                  ? "bg-primary text-black"
                  : "bg-gray-200/40 text-black hover:bg-white/80"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <main className="container mx-auto my-24 grid grid-cols-2 gap-y-14 gap-x-10">
        {filteredProjects.map((project, index) => (
          <StandardCardDesktop
            key={index}
            title={project.title}
            img={project.img}
            github={project.github}
            link={project.link}
            hashtags={project.hashtags}
          />
        ))}
      </main>
    </div>
  );
};

export default StandardGridDesktop;
