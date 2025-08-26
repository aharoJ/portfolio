// @/modules/socials/icon.tsx

import { FC } from "react";
import { SocialItem } from "./items";

interface Props extends Pick<SocialItem, "href" | "name"> {
  Icon: SocialItem["Icon"];
  className?: string;
  iconClassName?: string;
}

const SocialIcon: FC<Props> = ({
  href,
  name,
  Icon,
  className = "",
  iconClassName = "text-[18px]",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    title={name}
    className={className}
  >
    <span className="sr-only">{name}</span>
    <Icon className={iconClassName} aria-hidden="true" />
  </a>
);

export default SocialIcon;
