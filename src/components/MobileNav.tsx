"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  // { name: "services", path: "/services" },
  // { name: "resume", path: "/resume" },
  // { name: "work", path: "/work" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const MobileNav: React.FC = () => {
  const path_name = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="h1">
              aharo<span className="text-primary">J</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === path_name &&
                "text-primary border-b-2 border-primary"
              } text-xl capitalize hover:text-primary/50 transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
