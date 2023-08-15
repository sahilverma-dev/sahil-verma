"use client";

import React from "react";
import Typewriter from "typewriter-effect";

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center gap-1 text-4xl">
      <span className="text-blue-600">_</span>
      <Typewriter
        options={{
          strings: [title],
          autoStart: true,
          loop: true,
          wrapperClassName: "font-bold",
        }}
      />
    </div>
  );
};

export default SectionTitle;
