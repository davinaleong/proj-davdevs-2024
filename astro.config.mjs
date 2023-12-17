import { defineConfig } from "astro/config"
import mkcert from "vite-plugin-mkcert"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      https: true,
    },
    plugins: [mkcert()],
  },
})
