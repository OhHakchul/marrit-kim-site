import { defineConfig } from "tinacms";

// Hardcoding 'main' to prevent the "process is not defined" error
const branch = "main";

export default defineConfig({
  branch,

  // Your new keys
  clientId: "d3b7d778-a442-4ca8-a0ca-744680ec24d3",
  token: "e701c499a6cad569edf9d05fe5fa925f05f1eb78",

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