// const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: {
          moderate: `hsl(263, 55%, 52%)`,
        },
        gray: {
          light: `hsl(0, 0%, 81%)`,
        },
        blue: {
          "dark-grayish": `hsl(217, 19%, 35%)`,
          "dark-blackish": `hsl(217, 19%, 35%)`,
          "light-grayish": `hsl(210, 46%, 95%)`,
        },
      },
    },

    boxShadow: {
      DEFAULT: `40px 60px 50px -47px rgba(72, 85, 106, 0.247378)`,
    },
  },
  plugins: [],
};
