"use client";
import Image from "next/image";
import { FC } from "react";

import { motion } from "framer-motion";

// icons
import { AiFillEye as EyeIcon } from "react-icons/ai";

interface Props {
  _id: string;
  src: string;
  alt: string;
  link: string;
}

const ProjectPoster: FC<Props> = ({ _id, src, alt, link }) => {
  return (
    <motion.div
      layout
      layoutId={_id}
      className="relative bg-secondary aspect-video flex-shrink-0 h-auto md:max-w-[500px] rounded-lg overflow-hidden group"
    >
      <Image
        src={src}
        alt={alt}
        height={400}
        width={700}
        className="object-cover rounded-md h-full w-full aspect-video"
      />
      <div className="absolute z-10 top-0 left-0 w-full h-full transition-all bg-primary-blue text-xl font-semibold pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto flex items-center justify-center bg-opacity-90 backdrop-blur">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase flex gap-3 text-sm tracking-[2px] px-10 py-4 rounded-full font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
        >
          <EyeIcon className="fill-white text-xl" /> Visit
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectPoster;
