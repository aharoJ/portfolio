// @/modules/socials/desktop.tsx

import SocialIcon from "./icon";
import { socialItems } from "./items";

export default function SocialDesktop() {
  return (
    <div className="w-full flex justify-center space-x-8">
      {socialItems.map(({ name, href, Icon }) => (
        <SocialIcon
          key={name}
          name={name}
          href={href}
          Icon={Icon}
          className="
            w-14 h-14
            border border-primary
            rounded-full
            flex justify-center items-center
            text-xl text-primary
            hover:bg-primary/70 hover:text-black
            transition-colors duration-500
          "
        />
      ))}
    </div>
  );
}
