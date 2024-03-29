/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kodchasan: ["Kodchasan", "sans-serif"],
        judson: ["Judson", "serif"],
        "chakra-petch": ["Chakra Petch", "sans-serif"],
      },
      colors: {
        "accent-color": "#FF6947",
        "border-accent": "#D04E31",
        "hover-accent": "#B24128",
        "bg-accent": "#FFD6CD",
        "primary-color": "#353333",
        "secondary-color": "#254127",
        "secondary-hover": "#2A532C",
        "main-color": "#FFFFF7",
        "yellow-color": "#FDFEEC",
        "main-hover": "#FDFDE5",
        "section-color": "#E2E1CB",
        "tabbutton-text-color": "#7e755f",
        "tabbutton-bg-color": "#b8ac8d84",
        "tabbutton-border-color": "#a0957a",
        "clear-grey": "#9C8F8C",
        "primary-border": "#868282",
        "green-hover": "#949E8A",
        "skeleton-bg": "#CDFF9B",
        "addcart-button": "#FF6947",
        "addcart-hover": "#FFA590",
        "footer-bg": "#0E1A0F",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#254127",
          secondary: "#353333",
          accent: "#FF6947",
          neutral: "#E2E1CB",
          "base-100": "#FDFEEC",
          info: "#00b5ff",
          success: "#ffffff",
          warning: "#ffbe00",
          error: "#ff5861",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
