const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#191A19",
        "gray-30": "#b0b3b0",
        "gray-50": "#F8F4EB",
        "gray-500": "#5E0000",
        "primary-100": "#EDF1D6",
        "primary-300": "#9DC08B",
        "primary-500": "#40513B",
        "secondary-400": "#609966",
        "secondary-500": "#73b079",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
        "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url(./assets/images/homepage.png)",

      }),
      fontFamily: {
        dmsans : ["DM Sans", "sans-serif"],
        monserrat: ["Monserrat", "sans-serif"]
      },
    
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}
