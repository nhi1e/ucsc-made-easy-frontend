/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: {
        DEFAULT: '#e5e7eb',
        dark: '#C8CCD5',
        darker: '#70747B',
        100:'#f2f2f2',
        200:'#DEE2E7',
        300:'#D5D9DD',
        400:'#D0D4D8',
      },
      blue: {
        DEFAULT:'#3b82f6',
        //pastel:'#C6DEF1',
        // pastel:'#D7E9F7',
        pastel:'#778DA9',
        dark:'#86A7FC',
      },
      yellow: {
        DEFAULT: '#F7DB6A',
        pastel:'#FAEDCB',
        dark:'#F6D776'
      },
      green: {
        DEFAULT: '#bbf7d0',
        pastel:'#D2E3C8',
        dark:'#A6CF98',
      },
      red: {
        DEFAULT: '#EF6262',
        pastel:'#F2C6DE',
      },
      orange: {
        pastel: '#F7D9C4',
        dark:'#FAAB78'
      },
      white: {
        DEFAULT: "#FFFFFF",
      }

    }
  },
  plugins: [],
}