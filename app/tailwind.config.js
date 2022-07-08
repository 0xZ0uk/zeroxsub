const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      emerald: {
        ...colors.emerald,
        500: "#66FE89",
        600: "#52D770",
        700: "#3DB058",
        900: "#003C0E",
      },
      stone: {
        ...colors.stone,
        900: "#1C1C1C",
      },
    },
    extend: {},
  },
  plugins: [],
};
