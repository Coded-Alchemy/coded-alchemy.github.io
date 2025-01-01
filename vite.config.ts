import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
  build: {
    outDir: "build/server", // Make sure this is the folder you want your build to go to
  },
  base: "/coded-alchemy.github.io/", // Set the base URL for GitHub Pages
});
