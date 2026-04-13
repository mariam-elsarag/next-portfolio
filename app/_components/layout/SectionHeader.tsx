import React, { ReactNode } from "react";
type Props = {
  subTitle: string;
  title: string;
  children?: ReactNode;
};
const SectionHeader = ({ subTitle, title, children }: Props) => {
  return (
    <header>
      {/* sub title and title */}
      <div className="flex flex-col gap-4 md:gap-8">
        <sub className="text-primary font-space font-bold tracking-[5px] text-[10px]">
          {subTitle}
        </sub>
        <h2 className="text-on-surface font-inter font-bold text-2xl sm:text-3xl md:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </header>
  );
};

export default SectionHeader;
