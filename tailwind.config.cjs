module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        creep: "#bb86fc",
        black: "#27272a",
        white: "#F4F4F5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
