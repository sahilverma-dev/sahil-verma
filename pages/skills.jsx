import React from "react";
import Layout from "../components/Layout";
import { SkillData } from "../constants/Skills";
import { AnimatePresence, motion } from "framer-motion";
import { child, parent } from "../constants/variants";
import { StackData } from "../constants/StackData";

const SKillCard = ({ skill }) => (
  <motion.div
    layout
    variants={child}
    className="aspect-square p-2 rounded h-[200px] flex flex-col items-center justify-center bg-primary transition-all hover:!scale-110 hover:shadow-lg cursor-pointer"
  >
    <img
      src={skill?.icon}
      alt={skill?.name}
      loading="lazy"
      className="h-[70%] max-h-[70px]"
    />
    <p className="font-semibold mt-3">{skill?.name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <Layout title="Skills">
        <div className="min-h-screen flex items-center my-24 w-full max-w-7xl mx-auto">
          <AnimatePresence>
            <motion.div
              layout
              variants={parent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 p-2 gap-2 md:gap-4 xl:gap-6 mx-auto"
            >
              {StackData?.map((item, index) => (
                <SKillCard key={index} skill={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Layout>
    </>
  );
};

export default Skills;
