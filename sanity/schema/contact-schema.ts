export const contactSchema = {
  name: "contact",
  title: "Contacts",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
  ],
};
