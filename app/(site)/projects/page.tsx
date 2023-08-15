import { getProjects } from "@/sanity/sanity-utils/getProjects";

import FilterProjects from "./components/FilterProjects";

export const metadata = {
  title: "Projects",
  description: "Have a look at my projects!",
};

const Projects = async () => {
  const projects = await getProjects();

  return (
    <div>
      <div className="min-h-screen flex items-center w-full max-w-7xl mx-auto">
        <div className="w-full p-2  min-h-screen">
          <div className="mt-[130px]">
            <FilterProjects projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
