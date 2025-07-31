// @/modules/socials/icon.tsx

import { FC } from "react";
import { SocialItem } from "./items";

interface Props extends Pick<SocialItem, "href" | "name"> {
  Icon: SocialItem["Icon"];
  className?: string;
}

const SocialIcon: FC<Props> = ({ href, name, Icon, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    title={name}
    className={className}
  >
    <Icon />
  </a>
);

export default SocialIcon;
