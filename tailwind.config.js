/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        clr: "#0891b2",
        dark: "#0f172a",
        white: "#ffff",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
