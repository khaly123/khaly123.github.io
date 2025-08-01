// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2D42",
        "primary-dark": "#1E2032", // 👈 Add this line (custom dark variant of primary)
        secondary: "#8D99AE",
        light: "#EDF2F4",
        accent: "#EF233C",
        accentDark: "#D90429",
      },
    },
  },
  plugins: [],
};
