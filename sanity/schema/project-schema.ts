export const projectSchema = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      options: { hotspot: true },
      felids: {
        name: "alt",
        title: "Alt",
        type: "string",
      },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Web", value: "web" },
          { title: "App", value: "app" },
          { title: "Design", value: "design" },
        ],
      },
    },
    {
      name: "technologies",
      type: "array",
      title: "Technologies",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "source",
      title: "Source URL",
      type: "url",
    },
    {
      name: "preview",
      title: "Preview URL",
      type: "url",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
          },
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
