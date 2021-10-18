module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'sans': ['SF Pro'],
          'display': ['SF Pro Display'],
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
