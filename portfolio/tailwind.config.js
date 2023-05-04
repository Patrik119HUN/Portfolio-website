/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "Light-green": "#CAD2C5",
        "Lime-green": "#84A98C",
        "Dark-cyan": "#52796F",
        "Very-Dark-cyan": "#354F52",
        "Grayish-blue": "#2F3E46",
      },
      fontFamily: {
        "fira-code": ["Fira code", "monospace"],
      },
    },
  },
  plugins: [],
};
