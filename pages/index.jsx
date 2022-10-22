import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { projectData } from "../constants/ProjectsData";
import { SocialMediaData } from "../constants/SocialMediaData";
import { StackData } from "../constants/StackData";
import { parent } from "../constants/variants";
import { ProjectCard } from "./projects";
import { SKillCard } from "./skills";

const Home = () => {
  const title = "Hello, I'm Sahil Verma.";
  const subtitle = "I'm a frontend developer from Himachal Pradesh India.";
  return (
    <>
      <Layout title="Home" description={`${title} - ${subtitle}`}>
        <Hero />
        <section className="flex items-center w-full max-w-6xl mx-auto">
          <div className="w-full p-2">
            <div className="md:mt-[130px] mt-[80px] h-full">
              <div className="h-[600px] flex gap-3">
                <div className="bg-gray-600 hidden md:block w-[400px]">
                  <img
                    src="./images/about.jpg"
                    loading="lazy"
                    alt="About me"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <div className="flex-1 flex overflow-hidden">
                  <div className="flex-1 overflow-y-scroll">
                    <h1 className="text-5xl font-bold mb-5">About Me</h1>
                    <p className="mb-5">
                      Hello World! I&apos;m Sahil Verma, a Front-End Web
                      Developer from Himacal Predesh India. From choreography on
                      a stage to lines c code on a web page, I love combining
                      the worlds of logic and creative design to make
                      eye-catching, accessible, and user friendly websites and
                      applications.
                    </p>

                    <p className="mb-5">
                      Technology leads, society follows. The move towards
                      increasing inclusivity and diversity in the industry
                      through representation is of importance to me.
                    </p>

                    <p className="mb-5">
                      I&apos;m excited to make the leap and continue refining my
                      skills with the right company. Drop me a line and/or your
                      favourite restaurant in Toronto in the contact form below
                      or check me o at:
                    </p>
                    <div className="flex gap-6 items-center w-full text-xl">
                      {SocialMediaData?.map((social, index) => (
                        <a
                          key={index}
                          href={social?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-white transition-all hover:text-${
                            social?.hoverColor || "orange-500"
                          } hover:scale-110`}
                          title={`Follow me on ${social?.title}`}
                        >
                          {social?.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center my-14 w-full max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-14">My Skills</h2>
          <AnimatePresence>
            <motion.div
              layout
              variants={parent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 p-2 gap-2 md:gap-4 xl:gap-6 mx-auto"
            >
              {StackData?.slice(0, 12)?.map((item, index) => (
                <SKillCard key={index} skill={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
        <section className=" flex flex-col items-center my-14 w-full max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-14">My Projects</h2>
          <motion.div
            variants={parent}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
            className="grid grid-cols-1 md:grid-cols-2 my-4 gap-4"
          >
            {projectData?.slice(0, 4)?.map((project) => (
              <ProjectCard key={project?.id} project={project} />
            ))}
          </motion.div>
          <Link href="/projects">
            <a className="uppercase text-sm tracking-[2px] px-10 py-4 rounded-full inline-block font-semibold transition-all mt-8 text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110">
              View More Projects
            </a>
          </Link>
        </section>
      </Layout>
    </>
  );
};

export default Home;
