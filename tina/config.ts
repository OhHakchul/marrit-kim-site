import { defineConfig } from "tinacms";

// This is the safety fix: we tell it exactly which branch to use
const branch = "main";

export default defineConfig({
  branch,
  
  // PASTE YOUR LATEST KEYS HERE
  clientId: "95f0867b-a1c2-40a8-949a-b640ee12f24d",
  token: "PASTE_YOUR_NEW_TOKEN_HERE",

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
            label: "Title",
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
        ],
      },
    ],
  },
});