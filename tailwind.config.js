/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "primary-color": "#353333",
        "main-color": "#FDFEEC",
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
