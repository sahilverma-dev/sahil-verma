import { Project } from "@/interfaces";
import { groq } from "next-sanity";
import { client } from "../lib/client";

export const getProjects: () => Promise<Project[]> = async () => {
  try {
    const projects = await client.fetch(
      groq`*[_type == 'project']{
        _id,
        _createdAt,
        title,
        'slug': slug.current,
        'poster': poster.asset->url,
        type,
        technologies
      } | order(_createdAt desc)`,
      {
        caches: "no-cache",
      }
    );

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
