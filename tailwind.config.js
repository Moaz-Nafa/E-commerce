/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4db5ff",
        secondary: "#2c2c6c",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        },
      },
    },
  },
  plugins: [],
}

