import { defineConfig } from "tinacms";

// 1. Hardcoded branch to prevent "process is not defined" error
const branch = 'main';

export default defineConfig({
  branch,

  // 2. PASTE YOUR KEYS HERE
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
          // --- HERO SECTION (Flat) ---
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

          // --- ABOUT SECTION (Flat - Matches your Screenshot) ---
          {
            type: "image",
            name: "aboutImage",
            label: "About: Portrait Image"
          },
          {
            type: "string",
            name: "aboutTitle",
            label: "About: Section Title"
          },
          {
            type: "rich-text",
            name: "aboutText",
            label: "About: Text"
          },

          // --- BOOK SECTION (Flat - Matches your Screenshot) ---
          {
            type: "string",
            name: "bookTitle",
            label: "Book: Title"
          },
          {
            type: "string",
            name: "bookQuote",
            label: "Book: Quote"
          },
          {
            type: "image",
            name: "bookCover",
            label: "Book: Cover Image"
          },
          {
            type: "rich-text",
            name: "bookText",
            label: "Book: Description"
          },
        ],
      },
    ],
  },
});