"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/lml_logo.png";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, Menu } from "lucide-react";

interface SubLink {
  id: number;
  title: string;
  link: string;
}

interface NavLink {
  id: number;
  title: string;
  link: string;
  hover: boolean;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { id: 1, title: "Home", link: "/", hover: false },
  {
    id: 2,
    title: "Location",
    link: "#",
    hover: true,
    subLinks: [
      { id: 3, title: "Seattle", link: "/seattle" },
      { id: 4, title: "West Seattle", link: "/westseattle" },
      { id: 5, title: "North Seattle", link: "/northseattle" },
    ],
  },
];

const NavBar: React.FC = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleClickLink = () => {
    setOpenNavbar(false);
  };

  return (
    <nav className="flex items-center justify-between relative sm:mx-20 py-2 ">
      {/* Logo */}
      <Link href="/" onClick={handleClickLink}>
        <Image
          src={logo}
          width={60}
          height={60}
          loading="lazy"
          alt="logo"
          className="block transition-transform duration-150 rounded-lg hover:scale-110 mx-2"
        />
      </Link>

      {/* Navigation Links for Large Screens */}
      <ul className="hidden sm:flex items-center text-[#4b5462]  gap-8 xl:gap-10 font-semibold">
        {navLinks.map((nav) =>
          nav.hover && nav.subLinks ? (
            <DropdownMenu.Root key={nav.id}>
              <DropdownMenu.Trigger className="underline-animation outline-none flex items-center bg-secon hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]">
                <span className="text-[#4b5462]"> {nav.title}</span>
                <ChevronDown size={18} className="" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="bg-white shadow-md rounded-md p-4 min-w-[200px]"
                  sideOffset={5}
                >
                  <DropdownMenu.Arrow className="fill-black" />
                  {nav.subLinks.map((subLink) => (
                    <DropdownMenu.Item
                      key={subLink.id}
                      className="p-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer"
                    >
                      <Link href={subLink.link} onClick={handleClickLink}>
                        {subLink.title}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          ) : (
            <li key={nav.id}>
              <Link href={nav.link}>
                <span className="underline-animation  hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]">
                  {nav.title}
                </span>
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden mx-2">
        <Button onClick={() => setOpenNavbar((prev) => !prev)}>
          <Menu />
        </Button>
      </div>

      {openNavbar && (
        <ul className="sm:hidden absolute bg-white w-full mt-44 z-50 py-5 rounded-lg px-3 space-y-2">
          {navLinks.map((nav) =>
            nav.hover && nav.subLinks ? (
              <DropdownMenu.Root key={nav.id}>
                <DropdownMenu.Trigger className="flex justify-between w-full underline-animation text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]">
                  <span className="text-[]"> {nav.title}</span>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="bg-white shadow-md rounded-md p-2 min-w-[200px]"
                    sideOffset={5}
                  >
                    {nav.subLinks.map((subLink) => (
                      <DropdownMenu.Item
                        key={subLink.id}
                        className="p-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer"
                      >
                        <Link href={subLink.link} onClick={handleClickLink}>
                          {subLink.title}
                        </Link>
                      </DropdownMenu.Item>
                    ))}
                    <DropdownMenu.Arrow className="fill-white" />
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <li key={nav.id} className="space-y-2">
                <Link href={nav.link} onClick={handleClickLink}>
                  <span className="underline-animation text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]">
                    {nav.title}
                  </span>
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
