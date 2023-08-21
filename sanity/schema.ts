import { type SchemaTypeDefinition } from "sanity";

// schema
import { projectSchema } from "./schema/project-schema";
import { contactSchema } from "./schema/contact-schema";
import { technologySchema } from "./schema/technology-schema";
import { articleSchema } from "./schema/article-schema";
import { youtubeSchema } from "./schema/youtube-schema";
// import { categorySchema } from "./schema/category-schema";
// import { authorSchema } from "./schema/author-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectSchema,
    contactSchema,
    technologySchema,
    // categorySchema,
    // authorSchema,
    articleSchema,
    youtubeSchema,
  ],
};
