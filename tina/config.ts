import { defineConfig } from "tinacms";

// Your hosting and auth config
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d3b7d778-a442-4ca8-a0ca-744680ec24d3", // Get this from tina.io
  token: "e701c499a6cad569edf9d05fe5fa925f05f1eb78", // Get this from tina.io

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
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages", // This MUST match your folder name
        format: "md",
        fields: [
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle" },
          { type: "string", name: "heroDescription", label: "Hero Description" },
          {
            name: "aboutSection",
            label: "About Section",
            type: "object",
            fields: [
              { type: "image", name: "aboutImage", label: "Image" },
              { type: "string", name: "aboutTitle", label: "Title" },
              { type: "rich-text", name: "aboutText", label: "Text" },
            ],
          },
          {
            name: "bookSection",
            label: "Book Section",
            type: "object",
            fields: [
              { type: "string", name: "bookTitle", label: "Title" },
              { type: "string", name: "bookQuote", label: "Quote" },
              { type: "image", name: "bookCover", label: "Cover" },
              { type: "rich-text", name: "bookText", label: "Text" },
            ],
          },
        ],
      },
    ],
  },
});