import { CloseIcon } from "@/app/_assets/icons/Icon";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import { downloadPDF } from "@/app/_utils/downloadPDF";
import Button from "../ui/Button";
type navListProps = {
  id: number;
  label: string;
  path?: string;
  onClick?: () => void;
};
type Props = {
  isOpen: boolean;
  onClose: () => void;
  list: navListProps[];
};
const MobileNavigation = ({ isOpen, onClose, list }: Props) => {
  const navList: navListProps[] = [
    ...list,
    {
      id: 4,
      label: "Resume",
      onClick: () => downloadPDF("/cv/Mariam_Tarek.pdf", "Mariam_Tarek.pdf"),
    },
  ];
  return (
    <aside
      className={`fixed inset-0 bg-[#0B132699] transition  ${
        isOpen
          ? "z-10 visible opacity-100 sm:z-[-1] sm:invisible sm:opacity-0"
          : "z-[-1] invisible opacity-0"
      } backdrop-blur-xs `}
    >
      <nav
        className={`bg-[#2D344966] transition ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }  h-dvh py-8 px-4 flex flex-col gap-10 justify-between w-[280px] backdrop-blur-md border border-white/10`}
      >
        <header className="flex items-center justify-between gap-2">
          <Link className="text-[#E0E7FF] font-inter text-lg" href="/">
            Mariam El-sarag
          </Link>
          <button
            onClick={onClose}
            className="transition bg-transparent hover:bg-[#171F33] flex items-center justify-center rounded-full cursor-pointer h-10 w-10 tr"
          >
            <CloseIcon />
          </button>
        </header>

        <ul className="flex flex-col flex-1 gap-8">
          {navList.map((navLink) => {
            if (navLink?.onClick) {
              return (
                <li
                  key={navLink?.id}
                  onClick={navLink?.onClick}
                  className="cursor-pointer transition hover:text-on-surface-light text-surface-light font-inter border-b border-white/5 py-2 w-full flex   "
                >
                  {navLink?.label}
                </li>
              );
            } else {
              return (
                <li className="w-full " key={navLink.id}>
                  <ScrollLink
                    to={navLink.path}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    spy={true}
                    activeClass="text-on-surface-light "
                    className="cursor-pointer transition hover:text-on-surface-light text-surface-light font-inter border-b border-white/5 py-2 w-full flex   "
                  >
                    {navLink.label}
                  </ScrollLink>
                </li>
              );
            }
          })}
        </ul>
        <ScrollLink
          className="w-full"
          smooth={true}
          to="contact"
          duration={500}
        >
          <Button className="w-full" size="md" text="contact" />
        </ScrollLink>
      </nav>
    </aside>
  );
};

export default MobileNavigation;
