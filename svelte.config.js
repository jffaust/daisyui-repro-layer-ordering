import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      assets: "build",
      pages: "build",
      fallback: "test.html",
    }),
  },
  onwarn: (warning, handler) => {
    if (warning.code.includes("a11y")) return;
    handler(warning);
  },
};

export default config;
