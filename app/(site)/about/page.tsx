import AboutMeSection from "../components/AboutMeSection";
import PageWrapper from "../components/PageWrapper";

export const metadata = {
  title: "About Me",
  description: "Here are some details about me.",
};

const About = () => {
  return (
    <PageWrapper>
      <div className="md:min-h-screen w-full max-w-7xl mx-auto mt-[130px]  h-full">
        <AboutMeSection />
      </div>
    </PageWrapper>
  );
};

export default About;
