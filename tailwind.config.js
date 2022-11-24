/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a855f7",
          secondary: "#FDE047",
          // secondary: "#9333ea",
          accent: "#192132",
          neutral: "#021431",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
