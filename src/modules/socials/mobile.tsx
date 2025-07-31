// @modules/socials/mobile.tsx

import SocialIcon from "./icon";
import { socialItems } from "./items";

export default function SocialMobile() {
  const cls =
    "w-10 h-10 border border-primary rounded-full flex justify-center items-center text-lg text-primary hover:bg-primary/70 hover:text-black transition-colors duration-300";
  return (
    <div className="flex space-x-4">
      {socialItems.map(({ name, href, Icon }) => (
        <SocialIcon key={name} name={name} href={href} Icon={Icon} className={cls} />
      ))}
    </div>
  );
}

