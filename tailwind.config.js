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
        200:'#ABB1BF',
      },
      blue: {
        DEFAULT:'#3b82f6',
        pastel:'#778DA9',
      },
      yellow: {
        DEFAULT: '#F7DB6A',
        pastel:'#FAEDCB',
      },
      green: {
        DEFAULT: '#bbf7d0',
        pastel:'#D2E3C8',
      },
      red: {
        DEFAULT: '#EF6262',
        pastel:'#F2C6DE',
      },
      orange: {
        pastel: '#F7D9C4',
      },
      white: {
        DEFAULT: "#FFFBFE",
        dark1: "#DDDDDD", // temporary
        dark2: "#BBBBBB",
      },
      black: {
        DEFAULT: "#000000",
        light1:'#4C5464',
        light2:'#2D374C',
        dark1: '#212A3E',
        dark2:'#1A202C',
        dark3:'#101725',
      }

    }
  },
  plugins: [],
}