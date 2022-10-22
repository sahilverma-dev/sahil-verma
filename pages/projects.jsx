import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { child, parent } from "../constants/variants";
import { projectData } from "../constants/ProjectsData";
import Link from "next/link";

// icons
import { BsGithub as GitHubIcon } from "react-icons/bs";
import { AiOutlineLink as LinkIcon } from "react-icons/ai";

export const ProjectCard = ({ project }) => (
  <motion.div
    layout
    variants={child}
    className="relative rounded group overflow-hidden  bg-slate-800 aspect-video"
  >
    <div className="absolute top-2 left-2 flex md:gap-2 gap-1 md:text-xl z-40">
      <a
        href={project?.github}
        target="_blank"
        rel="noreferrer"
        className="aspect-square flex md:p-3 p-2 bg-black/70 hover:bg-black transition-all rounded-full backdrop-blur text-white"
      >
        <GitHubIcon />
      </a>
      <a
        href={project?.link}
        target="_blank"
        rel="noreferrer"
        className="aspect-square flex md:p-3 p-2 bg-black/70 hover:bg-black transition-all rounded-full backdrop-blur text-white"
      >
        <LinkIcon />
      </a>
    </div>
    <Link href={`/project/${project?.id}`}>
      <a>
        <div className="absolute top-0 left-0 h-full w-full p-2 z-10 gradient opacity-0 group-hover:opacity-100 transition-all"></div>
        <img
          src={project?.image}
          alt={project?.name}
          loading="lazy"
          className="h-full w-full transition-all object-cover"
        />
      </a>
    </Link>
    <span className="absolute top-2 right-2 py-1 px-5 font-semibold text-xs bg-orange-600 border-2 border-orange-600 rounded z-20">
      {project?.stacks[0]}
    </span>
    <div className="absolute z-30 w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/70 md:p-4 p-2 md:translate-y-[100%] group-hover:translate-y-0 transition duration-700">
      <Link href={`/project/${project?.id}`}>
        <a className="mr-2 text-white md:font-medium md:text-xl text-lg">
          {project?.name}
        </a>
      </Link>
    </div>
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
            <div className="md:mt-[130px] mt-[80px]">
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
