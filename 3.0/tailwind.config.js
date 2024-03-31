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
          'tall': { 'raw': '(min-height: 800px)' },
          // => @media (min-height: 800px) { ... }
          ...defaultTheme.screens,
        },
        height: {
          'top': '10%',
          'middle': '85.0%',
          'bottom': '5.0%',
          'large': '36rem',
          'xLarge': '42rem',
          'xxLarge': '48rem'
        },
        width: {
          '88': '22rem',
          '102': '28rem',
          '110': '30rem',
          '118': '32rem'
        }
      },
    },
    plugins: [],
  }