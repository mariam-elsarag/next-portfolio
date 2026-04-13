"use client";

import React from "react";
import SectionHeader from "../../layout/SectionHeader";
import {
  BrushIcon,
  CodeIcon,
  ConsoleIcon,
  DirectionIcon,
  Grid2Icon,
  LayerIcon,
  ResponsiveIcon,
  StackIcon,
} from "@/app/_assets/icons/Icon";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const techStackList = [
  { id: 1, icon: <LayerIcon />, label: "React / Next.js" },
  { id: 2, icon: <CodeIcon />, label: "TypeScript" },
  { id: 3, icon: <ConsoleIcon />, label: "Node.js" },
  { id: 4, icon: <StackIcon />, label: "PostgreSQL" },
  { id: 5, icon: <BrushIcon />, label: "Tailwind" },
  { id: 6, icon: <Grid2Icon />, label: "shadcn/ui" },
  { id: 7, icon: <ResponsiveIcon />, label: "Responsive Design" },
  { id: 8, icon: <DirectionIcon />, label: "REST APIs" },
];

const Technology = () => {
  return (
    <section id="expertise" className="section_p ">
      <div className="Container flex flex-col gap-20">
        <SectionHeader subTitle="Expertise" title="Technical Arsenal" />

        <Splide
          extensions={{ AutoScroll }}
          options={{
            type: "loop",
            focus: "center",
            live: false,
            autoWidth: true,
            arrows: false,
            pagination: false,
            drag: false,
            gap: "24px",
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: false,
            },
            breakpoints: {
              0: { gap: "24px" },
              // 641: { gap: "32px" },
            },
          }}
        >
          {techStackList.map((tech) => (
            <SplideSlide
              key={tech.id}
              className="w-[163px] h-[130px] sm:w-[155px] sm:h-[154px]"
            >
              <div className="bg-white/3 transition hover:bg-white/5 backdrop-blur-md border  border-white/3 rounded-3xl py-6 px-2 flex flex-col items-center justify-center gap-4  w-[163px] h-[130px] sm:w-[155px] sm:h-[154px] text-on-surface ">
                <span className="flex w-14 h-14 items-center justify-center bg-surface-container-high rounded-2xl">
                  {tech?.icon}
                </span>
                <h3 className="text-xs sm:tracking-[1.2px] font-space font-semibold sm:font-bold tracking-[.6px]">
                  {tech.label}
                </h3>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Technology;
