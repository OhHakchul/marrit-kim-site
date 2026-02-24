declare const process: any;
import { defineConfig } from "tinacms";
import { BlogCollection } from "./collections/blog";
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "49edd256-9bff-43fc-86cc-7f91d5de2b05",
  // Get this from tina.io
  token: "75af8b14d85832a6f37207e88d0cc391f9be9b6b",

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
