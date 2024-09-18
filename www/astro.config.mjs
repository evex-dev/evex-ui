import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    robotsTxt(),
    compress(),
  ],
  output: "static",
  site: "https://ui.evex.land",
  vite: {
    resolve: {
      alias: {
        "@styles": "/src/styles",
        "@layouts": "/src/layouts",
        "@evex-ui": "/src/evex-ui",
        "types/react": "../node_modules/@types/react/index.d.ts",
      },
    },
  },
});
