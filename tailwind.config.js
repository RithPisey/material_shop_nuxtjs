/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: "#0277FA",
      secondary: "#E8E8E8",
      lightGray: "#F5F5F5",
      gray: "#B3B4BB",
      white: "#ffffff",
      darkPurple: "#080133",
    },
    extend: {},
  },
  plugins: [],
  prefix: "tw-",
};
