import { Project } from "@/interfaces";
import { groq } from "next-sanity";
import { client } from "../lib/client";

export const getProjects: () => Promise<Project[]> = async () => {
  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'poster': poster.asset->url,
      type,
      technologies
    }`,
    {
      caches: "no-cache",
    }
  );
};
