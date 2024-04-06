import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import icon from "astro-icon";

export default defineConfig({
  site: "https://Jonah-gr.github.io",
  integrations: [preact(), icon({iconDir: "public/icons",})]
});