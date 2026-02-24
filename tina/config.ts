import { defineConfig } from "tinacms";

// Hardcode the branch to avoid "process" errors
const branch = 'main';

export default defineConfig({
  branch,
  
  // REPLACE THESE WITH YOUR NEW KEYS FROM STEP 1
  clientId: "95f0867b-a1c2-40a8-949a-b640ee12f24d",
  token: "136ae977685dd7b8869f8f42eb389d5a8f127b13",

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