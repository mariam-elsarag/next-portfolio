import React from "react";
import Button from "../../ui/Button";
import { ArrowRight } from "@/app/_assets/icons/Icon";
import Shape from "../../ui/Shape";

const Hero = () => {
  return (
    <section className="relative min-h-[750px] Container p-20 flex flex-col items-center justify-center text-white overflow-hidden">
      <Shape size="384px" align="right" />
      <Shape size="384px" align="left" />

      <section className="flex flex-col gap-8 text-center items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <span className="text-tertiary font-space font-normal uppercase tracking-[3.6px] text-xs">
            Front End Developer
          </span>
          <p className="font-inter text-2xl font-light space-x-2 ">
            <span>Mariam</span>
            <span className="inline-flex font-semibold border-b-[2px] border-primary/20 text-primary">
              El-Sarag
            </span>
          </p>
        </div>
        <h1 className="max-w-[700px]  leading-[72px] tracking-[-3.6px] text-on-surface justify-center text-center text-[72px] font-inter font-extrabold">
          Architecting Scalable{" "}
          <span className="text-tertiary inline-flex">Digital Ecosystems</span>{" "}
          with Precision.
        </h1>
        <p className="max-w-[671px]  text-on-surface-variant font-inter text-xl">
          Specializing in React, Next.js, Node.js, and TypeScript to build high-
          performance, artisan-grade applications that bridge complex logic with
          seamless experiences.
        </p>
        <div className="flex items-center justify-center gap-6">
          <Button text="View Projects" icon={<ArrowRight />} />
          <Button variant="glass" text="Contact Me" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
