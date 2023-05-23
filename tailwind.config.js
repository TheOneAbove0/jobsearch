/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        "blueColor": '#2a68ff',
        "grayIsh": '#f1f4f8',
        'cardShadow': '#f7f8f9',
        "textColor": '#252b36'
      }
    },
  },
  plugins: [],
}