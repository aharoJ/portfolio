"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
  // { name: "services", path: "/services" },
  // { name: "resume", path: "/resume" },
  // { name: "work", path: "/work" },
];

const MobileNav: React.FC = () => {
  const path_name = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col fixed z-50">
        <SheetTitle className="mt-32 mb-8 text-center text-2xl">
          <Link href="/">
            <h1 className="h1 text-white">
              aharo<span className="text-primary">J</span>
            </h1>
          </Link>
        </SheetTitle>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                className={`${
                  link.path === path_name &&
                  "text-primary border-b-2 border-primary"
                } text-xl capitalize hover:text-primary/50 transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
