import { TerminalWindowImg } from "@/app/_assets/images/Image";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="section_p Container">
      {" "}
      <div className=" grid sm:grid-cols-2 gap-4 md:gap-8">
        <figure className="flex items-center justify-center">
          <Image
            className=" lg:max-w-[560px] lg:max-h-[560px]"
            src={TerminalWindowImg}
            alt="terminal window visual"
          />
        </figure>
        <div className=" md:max-w-[520px] w-full flex flex-col items-center justify-center text-center sm:text-start gap-3 sm:gap-6">
          <header className="flex flex-col gap-3 sm:gap-6">
            <sub className="text-primary font-space text-xs tracking-[4.8px]">
              Profile & Philosophy
            </sub>
            <h2 className="text-white font-inter text-4xl sm:text-3xl md:text-4xl  lg:text-6xl font-bold">
              Engineering <br /> <span className=" text-tertiary">Impact</span>{" "}
              Through Artisan Code.
            </h2>
          </header>
          <section className="flex flex-col gap-4 lg:gap-8">
            <p className="text-on-surface-variant font-inter font-light text-sm md:text-base lg:text-lg md:leading-[28px]">
              As a Front-end Developer with 3 years of experience, I bridge the
              gap between{" "}
              <span className="text-white underline decoration-primary/30 underline-offset-2">
                complex engineering{" "}
              </span>
              requirements and seamless user experiences.{" "}
            </p>
            <p className="text-on-surface-variant font-inter font-light text-sm md:text-base lg:text-lg md:leading-[28px]">
              My philosophy centers on technical excellence and measurable
              impact. I don't just ship features; I engineer scalable
              foundations that grow with your business.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
