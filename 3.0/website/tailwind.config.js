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
          'primaryLight': 'rgb(14, 1, 4, 0.25)',
          'textPrimary': '#D2B1B8',
          'brightPrimary': '#FF365D',
          'bgPrimary': '#45111D',
          'bgSecondary': '#AB2B48',
          'bgSecondaryLight': 'rgb(146, 50, 72, 0.1)'
        }
      },
    },
    plugins: [],
  }