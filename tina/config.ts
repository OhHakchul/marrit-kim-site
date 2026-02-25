import { defineConfig } from "tinacms";

// Safety: hardcode to 'main' to avoid the 'process' errors from before
const branch = "main";

export default defineConfig({
  branch,
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
        name: "post",
        label: "Posts",
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});