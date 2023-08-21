import { defineField } from "sanity";

// icons
import { AiFillYoutube as YoutubeIcon } from "react-icons/ai";

export const articleSchema = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    // {
    //   name: "author",
    //   title: "Author",
    //   type: "reference",
    //   to: { type: "author" },
    // },
    // {
    //   name: "categories",
    //   title: "Categories",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "category" } }],
    // },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    {
      name: "poster",
      title: "Poster",
      type: "image",
      felids: {
        name: "alt",
        title: "Alt",
        type: "string",
      },
    },
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Image caption",
              description: "Caption displayed below the image.",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility.",
            },
          ],
        },
        {
          type: "code",
          title: "Code",
        },
        {
          type: "youtube",
          title: "Youtube",
          icon: YoutubeIcon,
        },
      ],
    }),
  ],
};
