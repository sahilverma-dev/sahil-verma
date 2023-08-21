"use client";

import { Project } from "@/interfaces";
import { useState, FC, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";

import { AnimatePresence, motion } from "framer-motion";
import { parent } from "@/constants/variants";
import SectionTitle from "../../components/SectionTitle";

interface Props {
  projects: Project[];
}

const projectTypes = ["All", "Web", "App", "Design"];

const FilterProjects: FC<Props> = ({ projects }) => {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedTechnology, setSelectedTechnology] = useState();
  const [selectedProjects, setSelectedProjects] = useState(projects);

  useEffect(() => {
    if (selectedType === "All") setSelectedProjects(projects);
    else {
      const filteredProjects = projects.filter(
        (project) =>
          project.type.toLocaleLowerCase() === selectedType.toLocaleLowerCase()
      );
      setSelectedProjects(filteredProjects);
    }
  }, [selectedType, projects]);

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center my-4 justify-between">
        <SectionTitle title="Projects" />
        <div className="flex gap-2 snap-x">
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`py-1 px-7 snap-start font-semibold text-sm  md:text-base flex-shrink-0 border-2 border-orange-600 rounded ${
                selectedType === type ? "bg-orange-600 " : "bg-transparent "
              }`}
              onClick={() => {
                setSelectedType(type);
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="flex gap-2 snap-x max-w-full overflow-x-scroll hide-scroll ">
        {[
          ...new Set(
            projects
              .map((item) => item.technologies)
              .join(",")
              .split(",")
          ),
        ]?.map((stack, index) => (
          <button
            key={index}
            // onClick={() => selectProject(stack)}
            className={`py-1 px-7 snap-start font-semibold text-sm  md:text-base flex-shrink-0 border-2 border-orange-600 rounded ${
              selectedTechnology === stack
                ? "bg-orange-600 "
                : "bg-transparent "
            }`}
          >
            {stack}
          </button>
        ))}
      </div> */}
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        className="grid grid-cols-1 md:grid-cols-2 my-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {selectedProjects?.map((project: Project) => (
            <ProjectCard key={project?._id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FilterProjects;
