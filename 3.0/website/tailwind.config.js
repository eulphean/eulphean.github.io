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
          'bgPrimary': '#45111D',
          'bgSecondary': '#AB2B48'
        }
      },
    },
    plugins: [],
  }