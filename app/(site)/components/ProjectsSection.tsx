"use client";
import { FC } from "react";

import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { parent } from "@/constants/variants";
import SectionTitle from "./SectionTitle";

import { Project } from "@/interfaces";

import { motion } from "framer-motion";

interface Props {
  projects: Project[];
}

const ProjectsSection: FC<Props> = ({ projects }) => {
  return (
    <section className="my-10 w-full max-w-7xl mx-auto">
      <SectionTitle title="My Projects" />
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        className="grid grid-cols-1 md:grid-cols-2 my-8 gap-4"
      >
        {projects?.slice(0, 4)?.map((project: any) => (
          <ProjectCard key={project?._id} project={project} />
        ))}
      </motion.div>
      <div className="w-full text-center">
        <Link
          href="/projects"
          className="uppercase text-sm tracking-[2px] px-10 py-4 rounded-full  font-semibold transition-all mt-12 text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
        >
          View More Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
