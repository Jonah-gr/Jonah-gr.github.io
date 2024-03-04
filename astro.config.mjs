import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://Jonah-gr.github.io",
  integrations: [preact()]
});