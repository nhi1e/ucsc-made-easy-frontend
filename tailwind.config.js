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
        darker: '#70747B'
      },
      blue: {
        DEFAULT:'#3b82f6'
      },
      yellow: {
        DEFAULT: '#F7DB6A'
      },
      green: {
        DEFAULT: '#bbf7d0',
      },
      red: {
        DEFAULT: '#F17A7A',
      },
    }
  },
  plugins: [],
}