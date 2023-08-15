export const technologySchema = {
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    {
      required: true,
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
  ],
};
