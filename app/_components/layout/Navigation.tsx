"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Button from "../ui/Button";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import { BurgerIcon } from "@/app/_assets/icons/Icon";
import { downloadPDF } from "@/app/_utils/downloadPDF";

const navList = [
  { id: 1, label: "Work", path: "work" },
  { id: 2, label: "Expertise", path: "expertise" },
  { id: 3, label: "About", path: "about" },
];

const Navigation = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      <header className=" h-16 sm:h-20 z-10 absolute top-0 left-1/2 -translate-x-1/2  Container flex w-full items-center justify-between backdrop-blur-xl shadow-main bg-[#0F172A66]">
        <Link href="/" className="text-on-surface-light font-inter text-xl">
          Mariam El-sarag
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navList.map((navLink) => (
            <li key={navLink.id}>
              <ScrollLink
                to={navLink.path}
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass="text-on-surface-light border-on-surface-light pb-1"
                className="cursor-pointer text-surface-light font-inter border-b border-transparent "
              >
                {navLink.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() =>
              downloadPDF("/cv/Mariam_Tarek.pdf", "Mariam_Tarek.pdf")
            }
            text="resume"
            size="sm"
            variant="ghost"
          />
          <ScrollLink smooth={true} to="contact" duration={500}>
            <Button size="sm" text="contact" />
          </ScrollLink>
        </div>
        <button
          onClick={() => setToggleSidebar(true)}
          className="flex md:hidden cursor-pointer outline-none shadow-none"
        >
          <BurgerIcon />
        </button>
      </header>
      <MobileNavigation
        isOpen={toggleSidebar}
        onClose={() => setToggleSidebar(false)}
        list={navList}
      />
    </>
  );
};

export default Navigation;
