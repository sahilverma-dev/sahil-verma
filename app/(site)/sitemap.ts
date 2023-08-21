import { getArticles } from "@/sanity/sanity-utils/getArticles";
import { getProjects } from "@/sanity/sanity-utils/getProjects";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sahilverma.dev";
  const projects = await getProjects();
  const articles = await getArticles();

  const projectUrls =
    projects.map((project) => ({
      url: `${baseUrl}/project/${project.slug}`,
      lastModified: new Date(),
    })) ?? [];
  const articleUrls =
    articles.map((article) => ({
      url: `${baseUrl}/article/${article.slug}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...projectUrls,
    ...articleUrls,
  ];
}
