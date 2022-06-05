import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { child, parent } from "../constants/variants";
import { projectData } from "../constants/ProjectsData";
import Link from "next/link";

export const ProjectCard = ({ project }) => (
  <motion.div
    layout
    variants={child}
    className="relative rounded group overflow-hidden  bg-slate-800 aspect-video"
  >
    <Link href={`/project/${project?.id}`}>
      <a>
        <div className="absolute top-0 left-0 h-full w-full p-2 z-10 gradient opacity-0 group-hover:opacity-100 transition-all">
          <div className="absolute bottom-2 flex gap-2 left-2 font-bold text-white text-3xl mt-auto">
            <img
              src={project?.icon}
              alt={project?.name}
              loading="lazy"
              className="h-8 w-8 aspect-square object-cover"
            />
            <div className="hover:text-orange-600">{project?.name}</div>
          </div>
        </div>
        <img
          src={project?.image}
          alt={project?.name}
          loading="lazy"
          className="h-full w-full group-hover:scale-110 transition-all object-cover"
        />
      </a>
    </Link>
    <span className="absolute top-2 right-2 py-1 px-5 font-semibold text-xs bg-orange-600 border-2 border-orange-600 rounded z-20">
      {project?.stacks[0]}
    </span>
  </motion.div>
);

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [selectedStack, setSelectedStack] = useState("All");
  useEffect(() => {
    setSelected(projectData);
  }, []);

  const selectProject = (stack) => {
    const data = projectData.filter((project) =>
      project.stacks?.includes(stack)
    );
    setSelectedStack(stack);
    setSelected(data);
  };

  return (
    <>
      <Layout title="Projects">
        <div className="min-h-screen flex items-center w-full max-w-7xl mx-auto">
          <div className="w-full p-2  min-h-screen">
            <div className="mt-[130px]">
              <div className="flex gap-2 snap-x max-w-full overflow-x-scroll hide-scroll ">
                <button
                  className={`py-1 px-7 snap-start font-semibold text-sm  md:text-base flex-shrink-0 border-2 border-orange-600 rounded ${
                    selectedStack === "All"
                      ? "bg-orange-600 "
                      : "bg-transparent "
                  }`}
                  onClick={() => {
                    setSelectedStack("All");
                    setSelected(projectData);
                  }}
                >
                  All
                </button>
                {[
                  ...new Set(
                    projectData
                      .map((item) => item.stacks)
                      .join(",")
                      .split(",")
                  ),
                ]?.map((stack, index) => (
                  <button
                    key={index}
                    onClick={() => selectProject(stack)}
                    className={`py-1 px-7 snap-start font-semibold text-sm  md:text-base flex-shrink-0 border-2 border-orange-600 rounded ${
                      selectedStack === stack
                        ? "bg-orange-600 "
                        : "bg-transparent "
                    }`}
                  >
                    {stack}
                  </button>
                ))}
              </div>
              <motion.div
                variants={parent}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="grid grid-cols-1 md:grid-cols-2 my-4 gap-4"
              >
                {selected?.map((project) => (
                  <ProjectCard key={project?.id} project={project} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
