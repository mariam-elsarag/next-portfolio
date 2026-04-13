import Link from "next/link";
import React from "react";
type socialLinksProps = {
  id: number;
  label: string;
  path: string;
};
const socialLinks = [
  { id: 1, label: "GitHub", path: "https://github.com/mariam-elsarag" },
  {
    id: 2,
    label: "LinkedIn",
    path: "https://www.linkedin.com/in/mariamelsarag/",
  },
  { id: 3, label: "Read.cv", path: "/cv/Mariam_Tarek.pdf" },
];
const Footer = () => {
  return (
    <footer className="Container border-t border-white/5 text-white py-12  flex-col sm:flex-row flex items-center justify-between gap-3">
      <p className="font-space text-[#64748B] text-sm sm:text-[11px] md:text-sm tracking-[2px] text-center sm:text-start">
        &copy; {new Date().getFullYear()} Mariam Elsarag. Handcrafted with
        Precision.
      </p>
      <ul className="flex items-center gap-8 sm:gap-4 md:gap-10">
        {socialLinks?.map((item) => (
          <li key={item?.id}>
            <Link
              className="text-[#64748B] text-xs font-space tracking-[2px] uppercase "
              href={item?.path}
              target="_blank"
            >
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
