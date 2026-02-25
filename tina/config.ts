import { defineConfig } from "tinacms";

// Hardcoding 'main' clears the "Cannot find name 'process'" error
const branch = "main";

export default defineConfig({
  branch,
  
  // Replace these with your current active keys from app.tina.io
  clientId: "95f0867b-a1c2-40a8-949a-b640ee12f24d",
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