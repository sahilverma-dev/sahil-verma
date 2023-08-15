"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

// icons
import {
  HiOutlineChevronRight as NextIcon,
  HiOutlineChevronLeft as PreviousIcon,
} from "react-icons/hi";
import SkillCard from "./SkillCard";
import SectionTitle from "./SectionTitle";
import { skills } from "@/constants/skills";

const SkillSection = () => {
  const carousalRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousalRef.current) {
      setWidth(
        carousalRef.current.scrollWidth - carousalRef.current.offsetWidth
      );
    }
  }, []);

  const navigate = (direction: number) => {
    if (carousalRef.current) {
      const currentPosition = carousalRef.current.scrollLeft;
      let newPosition = currentPosition + direction * 150;

      // Ensure the new position stays within the bounds
      newPosition = Math.max(0, Math.min(newPosition, width));

      carousalRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth", // Use 'auto' for instant scrolling
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <SectionTitle title="Skills" />
        {/* <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="aspect-square text-lg p-4 rounded-full  bg-secondary-blue text-white hover:bg-primary-orange transition-all"
          >
            <PreviousIcon />
          </button>
          <button
            type="button"
            onClick={() => navigate(1)}
            className="aspect-square text-lg p-4 rounded-full  bg-secondary-blue text-white hover:bg-primary-orange transition-all"
          >
            <NextIcon />
          </button>
        </div> */}
      </div>
      <div className="w-full overflow-hidden">
        <motion.div
          drag="x"
          ref={carousalRef}
          dragConstraints={{
            right: 0,
            left: -width,
          }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          dragElastic={1}
          className="flex items-center gap-3 my-8"
        >
          {skills?.map((skill, index) => (
            <SkillCard skill={skill} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillSection;
