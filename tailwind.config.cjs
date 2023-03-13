module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}"],
  theme: {
    fontFamily: {
      alagard: ["alagard", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        creep: "#bb86fc",
        dark: "#27272a",
        black: "#232325",
        grey: "#1f1f21",
        white: "#F4F4F5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
