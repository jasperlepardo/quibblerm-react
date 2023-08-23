/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      maxWidth: '100%',
      '@screen sm': {
        maxWidth: '540px',
      },
      '@screen md': {
        maxWidth: '720px',
      },
      '@screen lg': {
        maxWidth: '960px',
      },
      '@screen xl': {
        maxWidth: '1140px',
      },
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
      'commissioner': ['Commissioner', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
