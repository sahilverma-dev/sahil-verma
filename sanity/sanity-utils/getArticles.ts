import { Article } from "@/interfaces";
import { groq } from "next-sanity";
import { client } from "../lib/client";

export const getArticles: () => Promise<Article[]> = async () => {
  return client.fetch(
    groq`*[_type == 'article']{
      _id,
      _createdAt,
      title,
      description,
      'slug': slug.current,
      'poster': poster.asset->url,
    } | order(_createdAt desc)`,
    {
      caches: "no-cache",
    }
  );
};
