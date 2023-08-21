"use client";

import { child, parent } from "@/constants/variants";
import { Technology } from "@/interfaces";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface TechnologyIconProps {
  technology: Technology;
}
interface TechnologiesProps {
  technologies: Technology[];
}

const TechnologyIcon: FC<TechnologyIconProps> = ({ technology }) => {
  return (
    <motion.div
      variants={child}
      layout
      className="aspect-square bg-secondary-blue cursor-pointer shadow hover:bg-primary group transition-all rounded-lg md:h-[75px] h-[50px] flex items-center justify-center"
    >
      <Image
        src={technology?.icon}
        alt={technology?.name}
        title={technology?.name}
        className="md:h-9 md:w-9 h-6 w-6 object-contain group-hover:scale-110 transition-all"
        loading="lazy"
        height={40}
        width={40}
      />
    </motion.div>
  );
};

const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <motion.div
      variants={parent}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="flex gap-3 overflow-x-scroll"
    >
      {technologies?.map((technology) => (
        <TechnologyIcon key={technology.slug} technology={technology} />
      ))}
    </motion.div>
  );
};

export default Technologies;
