import { FC } from "react";
import PageWrapper from "../../components/PageWrapper";
import { getArticle } from "@/sanity/sanity-utils/getArticle";
import Content from "./components/Content";
import { formatDate } from "@/utils";
import Poster from "./components/Poster";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getArticle(params?.slug);

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [project.poster],
      title: project.title,
      description: project.description,
    },
    alternates: {
      canonical: `/article/${params.slug}`,
    },
  };
}

// @ts-ignore
const Article: FC<Props> = async ({ params }) => {
  const article = await getArticle(params.slug);

  return (
    <PageWrapper>
      <div className="min-h-screen md:mt-32 mt-24 p-4 w-full max-w-7xl mx-auto flex flex-col gap-4">
        <Poster _id={article._id} alt={article.title} src={article.poster} />
        <div className="text-gray-300 uppercase">
          {formatDate(article._createdAt)}
        </div>
        <h2 className="font-bold text-4xl mb-3 md:mb-7 font-spacegrotesk">
          {article.title}
        </h2>
        <Content content={article.content} />
      </div>
    </PageWrapper>
  );
};

export default Article;
