/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: "#9AE17B",
      greenaction: "#56AD31",
      grey: "#E4E4E4",
      white: "#ffffff",
      black: "#000000",
      red: "#c40b0b",
    },

    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
