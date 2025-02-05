/** @type {import('tailwindcss').Config} */
export default {
  // safelist.txt is to ensure style is loaded  for class names that are dynamic
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./safelist.txt",
    // "./node_modules/layerchart/**/*.{svelte,js}",
  ],
};
