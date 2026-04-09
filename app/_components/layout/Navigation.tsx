"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Button from "../ui/Button";

const navList = [
  { id: 1, label: "Work", path: "work" },
  { id: 2, label: "Expertise", path: "expertise" },
  { id: 3, label: "About", path: "about" },
];

const Navigation = () => {
  return (
    <header className="h-20  absolute top-0 left-1/2 -translate-x-1/2  Container flex w-full items-center justify-between backdrop-blur-xl shadow-main bg-[#0F172A66]">
      <Link href="/" className="text-on-surface-light font-inter text-xl">
        Mariam El-sarag
      </Link>

      <ul className="flex items-center gap-8">
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
      <div className="flex items-center gap-4">
        <Button text="resume" size="sm" variant="ghost" />
        <ScrollLink smooth={true} to="contact" duration={500}>
          <Button size="sm" text="contact" />
        </ScrollLink>
      </div>
    </header>
  );
};

export default Navigation;
