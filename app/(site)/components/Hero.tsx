"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

//importing typewriter-effect
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/bg-image.jpg"
        alt="bg image"
        loading="lazy"
        className="h-full w-full object-cover object-center"
        height={1000}
        width={1920}
      />
      <div className="gradient absolute top-0 left-0 h-full w-full"></div>
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-between">
        <div className="p-4 w-full text-center md:text-left transition-all max-w-7xl mx-auto">
          <span className="uppercase text-lg tracking-[4px] mb-3 block">
            Hello World!
          </span>
          <div className="md:text-[58px] text-[30px] font-bold md:leading-[75px] leading-[50px]">
            I m Sahil Verma. <br />
            <span className="inline-flex md:gap-5 gap-1">
              I am a
              <Typewriter
                options={{
                  strings: ["Developer", "Blogger", "Designer", "Freelancer"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-orange-500",
                }}
              />
              .
            </span>
            <br />
            from India.
          </div>
          <div className="flex flex-col-reverse items-center md:flex-row  mt-8 gap-2 md:gap-4">
            <Link
              href="/contact"
              className="contact-me-btn uppercase text-sm tracking-[2px] px-10 py-4 rounded-full inline-block font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
            >
              Contact Me
            </Link>
            <a
              href="/resume.docx"
              target="_blank"
              rel="noreferrer"
              className="uppercase text-sm tracking-[2px] px-10 py-4 rounded-full inline-block font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
