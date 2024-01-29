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
        light: '#C8D2E3',
        lighter:'#D9E0EC',
        dark:'#C6D0E2',
        dark2:'#A4B4D1',
        pastel_dark:'#8298C0',
      },
      yellow: {
        DEFAULT: '#F7DB6A',
        pastel:'#FAEDCB',
        pastel_dark:'#EEBD3E',
      },
      green: {
        DEFAULT: '#bbf7d0',
        pastel:'#D2E3C8',
        light:'#B6D2A6',
        pastel_dark:'#9AC184'
      },
      red: {
        DEFAULT: '#EF6262',
        pastel:'#F2C6DE',
        light:'#E3C8D2'
      },
      orange: {
        pastel: '#F7D9C4',
        pastel_dark:'#EB9F6A',
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