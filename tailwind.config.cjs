const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",  
  content: ["./src/**/*.{astro,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        accent: colors.amber,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
