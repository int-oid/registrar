import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://int-oid.github.io/",
  base: "/registrar",
    vite: {
    plugins: [tailwindcss()],
  },
});
