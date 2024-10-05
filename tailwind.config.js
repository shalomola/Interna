/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        primary: '#594635',
        secondary: '#BBA78E',
        first: '#E3D8C8',
        second: '#B2A697',
        third: '#C4B8A4',
        fourth: '#BBA78E',
        fifth: '#A59380',
      },
      'calc-custom': 'calc(100% + 15px)',
    },
  },
  plugins: [],
}