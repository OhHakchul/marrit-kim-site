import { defineConfig } from "tinacms";

// Hardcode branch
const branch = 'main';

export default defineConfig({
  branch,
  
  // LEAVE THESE BLANK FOR NOW - WE WILL FILL THEM IN STEP 4
  clientId: "PLACEHOLDER_ID",
  token: "PLACEHOLDER_TOKEN",

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
          // NESTED SECTION 1: ABOUT
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
          // NESTED SECTION 2: BOOK
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