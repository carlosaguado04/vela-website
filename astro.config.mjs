import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://orza.acidity.lol",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
  server: {
    host: "127.0.0.1",
    port: 4322,
  },
});
