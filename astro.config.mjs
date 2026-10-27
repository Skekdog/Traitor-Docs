// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://skekdog.github.io",
  base: "/Traitor-Docs",
  output: "static",
  integrations: [
    starlight({
      title: "Traitor! Docs",
      favicon: "/logo.svg",
      logo: {
        src: "./src/assets/logo.svg",
      },

      components: {
        Head: "./src/components/head.astro"
      },

      plugins: [starlightLinksValidator()],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Skekdog/Traitor-Docs",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [{ autogenerate: { directory: "guides" }, }]
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" }, }]
        },
      ],
    }),
  ],
});
