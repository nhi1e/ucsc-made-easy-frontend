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
        dark: '#C8CCD5'
      },
      blue: {
        DEFAULT:'#3b82f6'
      },
      yellow: {
        DEFAULT: '#F7DB6A'
      },
    }
  },
  plugins: [],
}