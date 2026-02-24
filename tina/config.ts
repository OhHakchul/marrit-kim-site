import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = 'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "9b3a0357-86c1-46fd-a49a-d1e2644389fe",
  // Get this from tina.io
  token: "c5ad6f279d49b5d8aa38a493273483b83fb6ee06",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Internal Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title (Name)",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle (Korean Name)",
          },
          {
            type: "string",
            name: "heroDescription",
            label: "Hero Description",
          },
          {
            type: "object",
            name: "aboutSection",
            label: "About Section",
            fields: [
              { type: "image", name: "aboutImage", label: "Portrait Image" },
              { type: "string", name: "aboutTitle", label: "Section Title" },
              { type: "rich-text", name: "aboutText", label: "About Text" },
            ]
          },
          {
            type: "object",
            name: "bookSection",
            label: "Book Section",
            fields: [
              { type: "string", name: "bookTitle", label: "Book Title" },
              { type: "string", name: "bookQuote", label: "Book Quote" },
              { type: "image", name: "bookCover", label: "Book Cover" },
              { type: "rich-text", name: "bookText", label: "Book Description" },
            ]
          },
        ],
      },
    ],
  },
});
// Force re-index update