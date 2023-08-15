import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import ArticleCard from "../components/ArticleCard";
import { getArticles } from "@/sanity/sanity-utils/getArticles";

export const metadata = {
  title: "Articles",
  description: "Read some articles written by me.",
};

const Articles = async () => {
  const articles = await getArticles();

  return (
    <PageWrapper>
      <div className="min-h-screen md:mt-32 mt-24 p-4 w-full max-w-7xl mx-auto flex flex-col gap-4">
        <SectionTitle title="Articles" />
        <div className="flex flex-col gap-5 my-6 w-full">
          {articles.map((article) => (
            <ArticleCard article={article} key={article._id} />
          ))}
        </div>
        {/* <div className="w-full text-center">
          <button className="uppercase text-sm tracking-[2px] px-10 py-4 rounded-full  font-semibold transition-all mt-12 text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110">
            Load More Articles
          </button>
        </div> */}
      </div>
    </PageWrapper>
  );
};

export default Articles;
