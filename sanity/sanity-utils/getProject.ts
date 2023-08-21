import { groq } from "next-sanity";

import { client } from "../lib/client";
import { Project } from "@/interfaces";

export const getProject: (slug: string) => Promise<Project> = async (slug) => {
  const result = await client.fetch(
    groq`*[_type == 'project' && slug.current == $slug ]{
        _id,
        _createdAt,
        title,
        description,
        'slug': slug.current,
        'poster': poster.asset->url,
        type,
        'technologies':technologies[]->{
          name,
          'slug':slug.current,
          'icon':icon.asset->url
        },
        'images':images[].asset->url,
        source,
        preview,
        content
    }`,
    {
      slug,
    }
  );

  return result[0];
};
