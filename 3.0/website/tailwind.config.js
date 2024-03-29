const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          'istok': ['Istok Web', 'serif'],
        },
        colors: {
          'primary': '#45111D',
          'primaryLight': 'rgb(14, 1, 4, 0.25)',
          'primaryBright': '#FF365D',
          'secondary': '#AB2B48',
          'secondaryLight': 'rgb(146, 50, 72, 0.1)',
          'secondaryBright': '#F0D6CF'
        },
        screens: {
          'xs': '440px',
          ...defaultTheme.screens,
        },
        height: {
          'top': '10%',
          'middle': '85.0%',
          'bottom': '5.0%',
          '88': '22rem',
          'mediumRoom': '36rem'
        },
        minHeight: {
          'medium': '32rem',
        }
      },
    },
    plugins: [],
  }