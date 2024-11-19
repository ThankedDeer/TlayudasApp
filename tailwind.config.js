/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrantPink: "#FF009E",
        turquoise: "#00BFA6",
        cornYellow: "#FFD700",
        deepGreen: "#228B22",
        brightOrange: "#FF5733",
        deepPurple: "#8B008B",
        boneWhite: "#FFF8DC",
        Lowgary: "#939393",
        primary: {
          DEFAULT: "#FF009E",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8B008B",
          foreground: "#FFFFFF",
        },
      },
     
      spacing: {
        500: "590px",
      },
    },
  },

  darkMode: "class",
  plugins: [],
};
