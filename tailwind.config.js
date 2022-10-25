/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cs: "#02bf90",
        gr: "#c4c4c4",
      },
    },
  },
  plugins: [],
  important: "#__next",
  corePlugins: {
    preflight: false,
  },
};
