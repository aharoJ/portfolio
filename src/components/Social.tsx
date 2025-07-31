/* eslint-disable @typescript-eslint/no-unused-vars */
// @components/Social.tsx
import Link from "next/link";
import React, { JSX } from "react";

import { SiLeetcode } from "react-icons/si";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

interface SocialItem {
  icon: JSX.Element;
  path: string;
}

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "https://github.com/aharoJ" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/aharoj/" },
  { icon: <FaTiktok />, path: "https://www.tiktok.com/@aharoj" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/aharoJ/" },

  // { icon: <FaYoutube />, path: "" },
  // { icon: <FaTwitter />, path: "" },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target={"_blank"}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
