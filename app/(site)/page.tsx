import AboutMeSection from "./components/AboutMeSection";
import ArticlesSection from "./components/ArticlesSection";
import Hero from "./components/Hero";
import PageWrapper from "./components/PageWrapper";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";

// get from sanity
import { getProjects } from "@/sanity/sanity-utils/getProjects";
import { getArticles } from "@/sanity/sanity-utils/getArticles";

const Home = async () => {
  const articles = await getArticles();
  const projects = await getProjects();

  return (
    <PageWrapper>
      <Hero />
      <div className="bg-slate-800">
        <div className="md:py-14 py-4 max-w-7xl mx-auto px-3 ">
          <AboutMeSection />
        </div>
      </div>
      <div className="md:py-14 py-4 max-w-7xl mx-auto px-3 ">
        <SkillSection />
      </div>
      <div className="bg-slate-800">
        <div className="md:py-14 py-4 max-w-7xl mx-auto px-3 ">
          <ProjectsSection projects={projects} />
        </div>
      </div>
      <div className="md:py-14 py-4 max-w-7xl mx-auto px-3 ">
        <ArticlesSection articles={articles} />
      </div>
    </PageWrapper>
  );
};

export default Home;
