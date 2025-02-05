import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [tailwindcss(), sveltekit()],
  server: {
    proxy: {
      "/api": "http://localhost:5125",
    },
  },
};

export default config;
