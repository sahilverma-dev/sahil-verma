import { useEffect, useState } from "react";
import { projectData } from "../../constants/ProjectsData";
import { NextSeo } from "next-seo";
import NotFound from "../404";

import { motion } from "framer-motion";
import { child, parent } from "../../constants/variants";
import { AiFillEye as EyeIcon } from "react-icons/ai";
import { AiFillGithub as GitHUbIcon } from "react-icons/ai";
import { StackData } from "../../constants/StackData";

const StackIcon = ({ stack }) => (
  <motion.div
    variants={child}
    layout
    className="aspect-square bg-secondary cursor-pointer shadow hover:bg-primary group transition-all rounded-lg md:h-[75px] h-[50px] flex items-center justify-center"
  >
    <img
      src={stack?.icon}
      alt={stack?.name}
      title={stack?.name}
      className="md:h-9 md:w-9 h-6 w-6 object-cover group-hover:scale-110 transition-all"
      loading="lazy"
    />
  </motion.div>
);

const Project = ({ project: data }) => {
  const [project, setProject] = useState(data);
  const [projectStack, setProjectStack] = useState([]);
  useEffect(() => {
    setProject(data[0]);
    console.log(data);
    const stacks = data[0]?.stacks?.map((stack) =>
      StackData.find((skill) => {
        if (skill.name === stack) {
          return "skill";
        } else {
          return null;
        }
      })
    );
    setProjectStack(stacks);
  }, [data]);
  return (
    <>
      {data?.length > 0 ? (
        <>
          <NextSeo
            title={project?.name}
            description={project?.description}
            canonical={`https://sahil-verma.vercel.app/project/${project?.id}`}
            openGraph={{
              type: "website",
              url: `https://sahil-verma.vercel.app/project/${data[0]?.id}`,
              title: `Sahil Verma - ${data[0]?.name}`,
              description: data[0]?.description,
              images: [
                {
                  url: data[0]?.image,
                  width: 800,
                  height: 600,
                  alt: data[0]?.name,
                },
              ],
            }}
          />
          <div className="min-h-screen flex items-center w-full max-w-7xl mx-auto">
            <div className="w-full p-2 min-h-screen">
              <div className="mt-[130px]">
                <div className="flex md:flex-row flex-col-reverse gap-3">
                  <div className="flex-grow">
                    <div className="text-3xl md:text-5xl font-semibold">
                      {project?.name}
                    </div>
                    <p className="my-4">{project?.description}</p>
                    <h2 className="text-xl md:text-3xl font-semibold my-4">
                      Technologies
                    </h2>
                    <motion.div
                      variants={parent}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                      className="flex gap-3 overflow-x-scroll"
                    >
                      {projectStack?.map((stack, index) => (
                        <StackIcon key={index} stack={stack} />
                      ))}
                    </motion.div>
                  </div>
                  <div className="relative bg-secondary aspect-video  h-auto md:max-w-[500px] rounded-lg overflow-hidden group">
                    <img
                      src={project?.image}
                      alt={project?.name}
                      className="h-full w-full object-cover "
                      loading="lazy"
                    />
                    <div className="absolute z-10 top-0 left-0 w-full h-full transition-all bg-primary text-xl font-semibold pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto flex items-center justify-center bg-opacity-90 backdrop-blur">
                      <a
                        href={project?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase flex gap-3 text-sm tracking-[2px] px-10 py-4 rounded-full font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
                      >
                        <EyeIcon className="fill-white text-xl" /> Visit
                      </a>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl md:text-3xl font-semibold my-4">
                  Screenshot
                </h2>
                <motion.div
                  variants={parent}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="flex gap-4 overflow-x-scroll snap-x mb-9 hide-scroll"
                >
                  {project?.screenshots?.map((screenshot, index) => (
                    <motion.div
                      variants={child}
                      layout
                      className="flex-shrink-0 aspect-video bg-secondary rounded-lg overflow-hidden"
                      key={index}
                    >
                      <a
                        href={screenshot?.src}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={screenshot?.src}
                          alt={screenshot?.title}
                          loading="lazy"
                          className="aspect-video snap-start h-full md:w-[500px] w-[300px]"
                        />
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
                <h2 className="text-xl md:text-3xl font-semibold my-4">
                  Features
                </h2>

                <ul className="flex flex-col gap-1 md:gap-2">
                  {project?.features?.map((feature, index) => (
                    <li key={index} className="ml-4">
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <h2 className="text-xl md:text-3xl font-semibold my-4">Visit</h2> */}
                <div className="flex flex-col md:flex-row items-center my-4 gap-4">
                  <a
                    href={project?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase flex gap-3 text-sm tracking-[2px] px-10 py-4 rounded-full font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
                  >
                    <GitHUbIcon className="fill-white text-xl" /> Get Code
                  </a>
                  <a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase flex gap-3 text-sm tracking-[2px] px-10 py-4 rounded-full font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
                  >
                    <EyeIcon className="fill-white text-xl" /> Visit Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Project;

export const getServerSideProps = async (router) => {
  const { id } = router.query;
  const project = projectData.filter((item) => item.id === id);
  return {
    props: {
      project,
    },
  };
};
