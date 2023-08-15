"use client";

import Image from "next/image";
import { FC } from "react";

// framer motion
import { motion } from "framer-motion";
import { Skill } from "@/constants/skills";

interface Props {
  skill: Skill;
}

const SkillCard: FC<Props> = ({ skill }) => {
  return (
    <motion.div
      initial={{
        cursor: "grab",
      }}
      whileTap={{
        cursor: "grabbing",
      }}
      className="w-80 flex-shrink-0  bg-slate-800 px-6  py-32 flex flex-col justify-center gap-3 rounded-xl"
    >
      <Image
        alt={skill.title}
        src={skill.icon}
        height={60}
        width={60}
        className="rounded-full pointer-events-none"
      />
      <h2 className="text-3xl font-bold">{skill.title}</h2>
      <p className="text-gray-300">{skill.description}</p>
      <motion.div
        className="bg-white h-1 mt-5 rounded-full"
        initial={{
          width: 0,
        }}
        animate={{
          width: 150,
        }}
      />
    </motion.div>
  );
};

export default SkillCard;
