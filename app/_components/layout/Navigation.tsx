"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Button from "../ui/Button";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import { BurgerIcon } from "@/app/_assets/icons/Icon";
import { downloadPDF } from "@/app/_utils/downloadPDF";
import { useScrollSpy } from "@/app/_hooks/useScrollSpy";

const navList = [
  { id: 1, label: "About", path: "about" },
  { id: 2, label: "Expertise", path: "expertise" },
  { id: 3, label: "Work", path: "work" },
];
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const Navigation = () => {
  const activeId = useScrollSpy(
    navList.map((n) => n.path),
    50
  );

  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      <header className=" h-16 sm:h-20 z-10 fixed top-0 left-1/2 -translate-x-1/2  Container flex w-full items-center justify-between backdrop-blur-xl shadow-main bg-[#0F172A66]">
        <Link href="/" className="text-on-surface-light font-inter text-xl">
          Mariam El-sarag
        </Link>

        <ul className="hidden md:flex gap-8">
          {navList.map((nav) => (
            <li key={nav.id}>
              <button
                onClick={() => scrollToSection(nav.path)}
                className={`border-b cursor-pointer pb-1 transition-colors
      ${
        activeId === nav.path
          ? "text-on-surface-light border-on-surface-light"
          : "text-surface-light hover:text-on-surface-light hover:border-on-surface-light border-transparent"
      }`}
              >
                {nav.label}
              </button>
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
