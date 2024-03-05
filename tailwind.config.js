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
        "primary-color": "#353333",
        "secondary-color": "#254127",
        "secondary-hover": "#2A532C",
        "main-color": "#FFFFF7",
        "yellow-main-color": "FDFEEC",
        "main-hover": "#FDFDE5",
        "section-color": "#E2E1CB",
        "tabbutton-text-color": "#7e755f",
        "tabbutton-bg-color": "#b8ac8d84",
        "tabbutton-border-color": "#a0957a",
        "clear-grey": "#9C8F8C",
        "primary-border": "#868282",
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
