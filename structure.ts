import { DefaultDocumentNodeResolver } from "sanity/desk";
import { Iframe } from "sanity-plugin-iframe-pane";

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "article") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
          }/api/preview`,
          defaultSize: "desktop",
          reload: {
            button: true,
          },
          attributes: {},
        })
        .title("Preview"),
    ]);
  }
};
