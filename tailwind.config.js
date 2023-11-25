/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        transparent: `transparent`,
        current: `currentColor`,
        white: `#ffffff`,
        ash: `#343334`,
      },
    },
  },
  plugins: [],
};
