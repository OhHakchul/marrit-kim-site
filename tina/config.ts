import { defineConfig } from "tinacms";

// Hardcoding the branch name to fix the 'process' errors
const branch = 'main';

export default defineConfig({
  branch,

  // Get these from your project settings at app.tina.io
  clientId: "5dbf021d-14b4-4378-9dea-8bf05a00dba0", 
  token: "fcde249659887db0420f47caca58394520969579",

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
            label: "Hero Title",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
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