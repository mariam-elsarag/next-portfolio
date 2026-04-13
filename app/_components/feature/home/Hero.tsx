import React from "react";
import Button from "../../ui/Button";
import { ArrowRight } from "@/app/_assets/icons/Icon";
import Shape from "../../ui/Shape";

const Hero = () => {
  return (
    <section className="relative   sm:min-h-[750px] Container pt-28 pb-10 sm:py-20 flex flex-col items-center justify-center text-white overflow-hidden">
      <Shape size="384px" align="right" className="hidden md:flex" />
      <Shape size="384px" align="left" className="hidden md:flex" />
      <Shape
        size="350px"
        align="center"
        className="flex md:hidden"
        isAbsolute={false}
      />

      <section className="flex flex-col gap-4 md:gap-8 text-center items-center justify-center">
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <span className="text-tertiary font-space font-normal uppercase tracking-[3.6px] text-[11px] md:text-xs">
            Available for new opportunities{" "}
          </span>
          <p className="font-inter text-2xl font-light space-x-2 ">
            <span>Mariam</span>
            <span className="inline-flex font-semibold border-b-[2px] border-primary/20 text-primary">
              El-Sarag
            </span>
          </p>
        </div>
        <h1 className="max-w-[700px] leading-[52px]  sm:leading-[72px] md:tracking-[-3.6px]  tracking-[-2px] text-[32px] xs:text-4xl sm:text-5xl md:text-5xl lg:text-[72px] text-on-surface justify-center text-center  font-inter font-extrabold">
          Architecting Scalable{" "}
          <span className="text-tertiary block">Digital Ecosystems</span> with
          Precision.
        </h1>
        <p className="max-w-[671px]  text-on-surface-variant font-inter text-xs xs:text-base md:text-xl">
          Specializing in React, Next.js, Node.js, and TypeScript to build high-
          performance, artisan-grade applications that bridge complex logic with
          seamless experiences.
        </p>
        <div className="grid grid-cols-2 gap-4 md:gap-6 w-full md:w-fit">
          <Button text="View Projects" icon={<ArrowRight />} />
          <Button variant="glass" text="Contact Me" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
