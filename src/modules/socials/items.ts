/* eslint-disable @typescript-eslint/no-unused-vars */
// @/modules/socials/items.ts

import { IconType } from "react-icons";
import { SiLeetcode } from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export interface SocialItem {
  name: string;
  href: string;
  Icon: IconType;
}

export const socialItems: SocialItem[] = [
  { name: "LeetCode", href: "https://leetcode.com/aharoj", Icon: SiLeetcode },
  { name: "GitHub", href: "https://github.com/aharoj", Icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aharoj",
    Icon: FaLinkedin,
  },
  // { name: "Twitter", href: "https://twitter.com/aharoj", Icon: FaTwitter },
  // { name: "TikTok", href: "https://tiktok.com/@aharoj", Icon: FaTiktok },
  // { name: "YouTube", href: "https://youtube.com/@aharoj", Icon: FaYoutube },
];
