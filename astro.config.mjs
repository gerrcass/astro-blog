import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astrojs.org",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !/https:\/\/astrojs\.org\/blog\/[0-9]+/.test(page),
      customPages: [
        "https://astrojs.org/discord",
        "https://astrojs.org/twitch",
        "https://astrojs.org/twitter",
      ],
      changefreq: "weekly",
      lastmod: new Date(),
      priority: 0.85,
      serialize: (item) => {
        // Remove trailing slashes
        if (item.url.at(-1) === "/") {
          item.url = item.url.slice(0, -1);
        }
        return item;
      },
      i18n: {
        defaultLocale: "en",
        // Just an example, we're not actually implementing i18n
        locales: {
          en: "en-US",
          es: "es-ES",
          fr: "fr-CA",
        },
      },
    }),
  ],
});
