/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // cosmic latte
        "cosmic-latte-50": "#FFFEFD",
        "cosmic-latte-100": "#FEFDF8",
        "cosmic-latte-200": "#FDFCF5",
        "cosmic-latte-300": "#FCFAF1",
        "cosmic-latte-400": "#FCF9EE",
        "cosmic-latte-500": "#FBF8EA",
        "cosmic-latte-600": "#E4E2D5",
        "cosmic-latte-700": "#B2B0A6",
        "cosmic-latte-800": "#8A8881",
        "cosmic-latte-900": "#696862",

        // bootstrap colors
        primary: "#3B71CA",
        secondary: "#9FA6B2",
        success: "#14A44D",
        danger: "#DC4C64",
        warning: "#E4A11B",
        info: "#54B4D3",
        light: "#FBFBFB",
        dark: "#332D2D",
      },
      fontFamily: {
        sans: ["Shantell Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
