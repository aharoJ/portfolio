// @modules/socials/desktop.tsx

import SocialIcon from "./icon";
import { socialItems } from "./items";

export default function SocialDesktop() {
  return (
    <div className="w-full flex justify-start gap-4">
      {socialItems.map(({ name, href, Icon }) => (
        <SocialIcon
          key={name}
          name={name}
          href={href}
          Icon={Icon}
          className="
            inline-flex items-center justify-center
            h-11 w-11 rounded-xl
            ring-2 ring-creamy-sage/70
            bg-neon-one text-creamy-sage
            backdrop-blur
            transition-[transform,box-shadow,ring,background,color] duration-150
            hover:bg-neon-two hover:ring-creamy-sage hover:text-creamy-bone
            hover:shadow-[0_8px_26px_-6px_rgba(0,0,0,0.45)]
            active:scale-95
            focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-moss
            will-change-transform
          "
          iconClassName="text-[18px]"
        />
      ))}
    </div>
  );
}
