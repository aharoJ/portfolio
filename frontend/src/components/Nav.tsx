"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"; 

const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  // {
  //   name: "resume",
  //   path: "/resume",
  // },
  // {
  //   name: "work",
  //   path: "/work",
  // },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const path_name = usePathname();
  console.log(path_name);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === path_name && "text-primary border-b-2 border-primary"
            } capitalize font-medium hover:text-primary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
