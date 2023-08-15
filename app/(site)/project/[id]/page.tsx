import type { Metadata } from "next";
import PageWrapper from "../../components/PageWrapper";

// icons
import { AiFillEye as EyeIcon } from "react-icons/ai";
import { AiFillGithub as GitHUbIcon } from "react-icons/ai";

import Image from "next/image";
import { getProject } from "@/sanity/sanity-utils/getProject";
import Gallery from "./components/Gallery";
import Content from "./components/Content";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject(params?.id);

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [project.poster],
      title: project.title,
      description: project.description,
    },
    alternates: {
      canonical: `/article/${params.id}`,
    },
    twitter: {
      title: project.title,
      description: project.description,
      images: [project.poster],
      creator: "@sahilverma_dev",
    },
  };
}

const Project = async ({ params }: Props) => {
  const project = await getProject(params?.id);
  return (
    <PageWrapper>
      <div className="min-h-screen p-2  flex items-center w-full max-w-7xl mx-auto">
        <div className="mt-[130px]">
          <div className="flex md:flex-row flex-col-reverse gap-3">
            <div className="flex-grow">
              <div className="text-3xl md:text-5xl font-semibold">
                {project?.title}
              </div>
              <p className="my-4">{project?.description}</p>
              {/* <h2 className="text-xl md:text-3xl font-semibold my-4">
                Technologies
              </h2> */}
            </div>
            <div className="relative bg-secondary aspect-video  h-auto md:max-w-[500px] rounded-lg overflow-hidden group">
              <Image
                src={project?.poster}
                alt={project?.title}
                className="h-full w-full object-cover "
                loading="lazy"
                height={300}
                width={500}
              />
              <div className="absolute z-10 top-0 left-0 w-full h-full transition-all bg-primary-blue text-xl font-semibold pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto flex items-center justify-center bg-opacity-90 backdrop-blur">
                <a
                  href={project?.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase flex gap-3 text-sm tracking-[2px] px-10 py-4 rounded-full font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
                >
                  <EyeIcon className="fill-white text-xl" /> Visit
                </a>
              </div>
            </div>
          </div>
          <h2 className="text-xl md:text-3xl font-semibold my-4">Screenshot</h2>
          <Gallery images={project?.images} title={project?.title} />
          <h2 className="text-xl md:text-3xl font-semibold my-4">Visit</h2>
          <div className="flex flex-col md:flex-row items-center my-4 gap-4">
            <a
              href={project?.source}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase flex gap-3 text-sm tracking-[2px] px-10 py-4 rounded-full font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
            >
              <GitHUbIcon className="fill-white text-xl" /> Get Code
            </a>
            <a
              href={project?.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase flex gap-3 text-sm tracking-[2px] px-10 py-4 rounded-full font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
            >
              <EyeIcon className="fill-white text-xl" /> Visit Online
            </a>
          </div>
          <h2 className="text-xl md:text-3xl font-semibold my-4">Detail</h2>
          <Content content={project?.content} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Project;
