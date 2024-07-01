import Link from "next/link";
import React from "react";

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
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaTiktok />, path: "" },
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
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
