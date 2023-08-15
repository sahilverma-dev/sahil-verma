import { groq } from "next-sanity";

import { client } from "../lib/client";
import { Article } from "@/interfaces";

export const getArticle: (slug: string) => Promise<Article> = async (slug) => {
  const result = await client.fetch(
    groq`*[_type == 'article' && slug.current == $slug ]{
        _id,
      _createdAt,
      title,
      'slug': slug.current,
      'poster': poster.asset->url,
      content
    }`,
    {
      slug,
    }
  );

  return result[0];
};
