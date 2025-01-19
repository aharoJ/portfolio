import React from "react";
import portfolio from "../../../../../public/projects/portfolio.png";
import twitter from "../../../../../public/projects/twitter.png";
import threeD from "../../../../../public/projects/3D-Portfolio.png";
import ems from "../../../../../public/projects/ems.png";
import apple from "../../../../../public/projects/apple.png";
import skhd_yabai from "../../../../../public/projects/yabai_skhd.png";
import tmux from "../../../../../public/projects/tmux.png";
import lf from "../../../../../public/projects/lf.png";
import starship from "../../../../../public/projects/starship.png";
import vivaldi from "../../../../../public/projects/vivaldi.png";
import alacritty from "../../../../../public/projects/vim.png";
import notebook from "../../../../../public/projects/notebook.png";
import gpt3 from "../../../../../public/projects/gpt3.png";
import StandardCardMobile from "@/app/dev/standard/StandardCardMobile";


const webAppsProjects = [
  {
    title: "Twitter",
    img: twitter,
    github: "https://github.com/aharoJ/Twitter",
    link: "https://github.com/aharoJ/Twitter",
    hashtags: ["Java", "Spring Boot", "React", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "3D Portfolio",
    img: threeD,
    github: "https://github.com/aharoJ/3D-Portfolio",
    link: "https://github.com/aharoJ/3D-Portfolio",
    hashtags: ["React", "Tailwind CSS", "JavaScript", "Vite"],
  },
  {
    title: "EmployeeTracker",
    img: ems,
    github: "https://github.com/aharoJ/EmployeeManagementSystemApp",
    link: "https://github.com/aharoJ/EmployeeManagementSystemApp",
    hashtags: ["Java", "Spring Boot", "Vite", "React", "Tailwind CSS"],
  },
  {
    title: "Apple",
    img: apple,
    github: "https://github.com/aharoJ/Apple",
    link: "https://github.com/aharoJ/Apple",
    hashtags: ["React", "HTML", "CSS", "TypeScript", "Sanity.io"],
  },
];

const dotFilesProjects = [
  {
    title: "yabai-skhd-config",
    img: skhd_yabai,
    github: "https://github.com/aharoJ/yabai-skhd-config",
    link: "https://github.com/aharoJ/yabai-skhd-config",
    hashtags: ["macOS Configuration", "Shell Scripting", "SKHD", "Yabai"],
  },
  {
    title: "tmux-config",
    img: tmux,
    github: "https://github.com/aharoJ/tmux-config",
    link: "https://github.com/aharoJ/tmux-config",
    hashtags: ["TMUX", "Custom Design", "Catppuccin"],
  },
  {
    title: "lf-config",
    img: lf,
    github: "https://github.com/aharoJ/lf-config",
    link: "https://github.com/aharoJ/lf-config",
    hashtags: [
      "Shell Scripting",
      "Custom Scripts",
      "Kitty Configuration",
      "LF File Manager",
    ],
  },
  {
    title: "starship-config",
    img: starship,
    github: "https://github.com/aharoJ/starship-config",
    link: "https://github.com/aharoJ/starship-config",
    hashtags: [
      "TOML",
      "Custom Coloscheme",
      "Timezone",
      "Git",
      "Branches",
      "Commits",
      "Spotify",
    ],
  },
  {
    title: "vivaldi-config",
    img: vivaldi,
    github: "https://github.com/aharoJ/vivaldi-config",
    link: "https://themes.vivaldi.net/themes/nV6vpPxDvdN",
    hashtags: ["Custom Keybindings", "Hotkeys", "Vivaldi Configuration"],
  },
  {
    title: "alacritty-config",
    img: alacritty,
    github: "https://github.com/aharoJ/alacritty-config",
    link: "https://github.com/aharoJ/alacritty-config",
    hashtags: ["Terminal Emulator", "YAML"],
  },
];

const machineLearningProjects = [
  {
    title: "Machine Learning",
    img: notebook,
    github: "https://github.com/aharoJ/opensource/tree/main/machine-learning",
    link: "https://github.com/aharoJ/opensource/tree/main/machine-learning",
    hashtags: [
      "AI",
      "Machine Learning",
      "Capstone Project",
      "Deep Learning",
      "Jupyter Notebooks",
    ],
  },
  {
    title: "chatGPT3",
    img: gpt3,
    github: "https://github.com/aharoJ/chatGPT3",
    link: "https://github.com/aharoJ/chatGPT3",
    hashtags: ["React", "HTML", "CSS", "JavaScript", "Machine Learning"],
  },
];

const StandardGridMobile: React.FC = () => {
  return (
    <>
      {/* Web Apps Section */}
      <div className="block lg:hidden">
        <h2 className="justify-center h1 font-bold mb-8 flex "> Web Apps </h2>
        <main className="container mx-auto my-24 grid grid-cols-1 gap-y-14 gap-x-10">
          {webAppsProjects.map((project, index) => (
            <StandardCardMobile
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

      {/* Dot Files Section */}
      <div className="block lg:hidden">
        <h2 className="justify-center h1 font-bold mb-8 flex "> Dot Files</h2>
        <main className="container mx-auto my-24 grid grid-cols-1 gap-y-14 gap-x-10">
          {dotFilesProjects.map((project, index) => (
            <StandardCardMobile
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

      {/* Machine Learning Section */}
      <div className="block lg:hidden">
        <h2 className="justify-center h1 font-bold mb-8 flex">
          Machine Learning
        </h2>
        <main className="container mx-auto my-24 grid grid-cols-1 gap-y-14 gap-x-10">
          {machineLearningProjects.map((project, index) => (
            <StandardCardMobile
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
    </>
  );
};

export default StandardGridMobile;
