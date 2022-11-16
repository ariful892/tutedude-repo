const { primary, secondary } = require('daisyui/src/colors/colorNames');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderColor: "linearGradient(toRight, primary, secondary)"
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#800080",
          secondary: "#ff864c",
          accent: "#E5E5E5",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
