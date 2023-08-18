/** @type {import('tailwindcss').Config} */
const debugScreens = require('tailwindcss-debug-screens');
const scrollBar = require('tailwind-scrollbar');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    debugScreens: {
      style: {
        background: 'red',
        color: 'white',
        fontSize: '18px',
      },
    },
    extend: {},
  },
  plugins: [
    debugScreens,
    scrollBar({
      nocompatible: true,
    }),
  ],
};
