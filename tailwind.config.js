const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#D373F4',
        secondary: '#9F62DB',
        darkblack: '#232834',
        lightbackground: 'rgba(211, 115, 244, 0.1)',
        mediumbackground: 'rgba(211, 115, 244, 0.3)',
        darkbackground: '#1E2022',
        darkmainbackground: '#1B1D1E',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        signika: ['Signika', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: { 
      display: ['dark'], 
    },
  },
  plugins: [],
}