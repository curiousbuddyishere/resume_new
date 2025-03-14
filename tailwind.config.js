/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#000033',
        link: '#8888ff',
        secondary: '#4444aa',
      },
      fontFamily: {
        mono: ['YourMonospaceFont', 'monospace'],
      },
    },
  },
  plugins: [],
};