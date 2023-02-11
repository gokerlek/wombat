/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      colors: {
        pGray: {
          50: "#f9f9f9",
          75: "#fafafA",
          100: "#f2f2f2",
          200: "#e6e6e6",
          300: "#d3d3d3",
          400: "#f5f5f5",
          500:"#eeeeee",
          550:'#e7e7e7',
          600: "#969696",
          650: "#5e5e5e",
          700: "#444444",
          800: "#464646",
          850: "#555555",
          900: "#2b2b2b",
        },
        pBlack: {
            400: "#333333",
        },

        pBorder: {
          50:'#cccccc',
          100: "#cecece",
          200: "#d1d1d1",
          300: "#b7b7b7",
          400: "#ebebeb",
          500: "#e0dbdb",
        },
        pGreen: {
          100: "#c7f5cd",
          300:"#7ff08e",
          400:"#4acb55",
            500: "#2fa439",
          550:'#23a42e',
          600:'#55d960',
        },

        pRed: {
          200: '#fd999a',
          300: "#fa2e2e",
          400: "#c30000",
          450: "#c2181f",
          500: "#dc363d",
          600: '#eb3838',
          700: "#520101",
        },
        pBlue: {
          100: "#Eff3f9",
          600: '#1a73e8',
        },

        pYellow: {
          100: "#FFFCF3",
          200:'#F1363D',
          500:"#ffd92a",
          600: "#ebc828",
          700:"#ae9210",
          800:'#786405',
        },

        pOrange: {
          100:'#FB7E62',
          200:'#E85433',
          300:'#F1363D',
          400:'#fdb037',
          600: "#ff5500",
          700: "#e85433",
        },
      },

      boxShadow: {
        card: "0px 34px 3px rgba(0, 0, 0, 0.86)",
        toggle:
          "0px 1px 3px rgba(0, 0, 0, 0.1) 0px 1px 2px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
