const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-Suisse)', ...fontFamily.sans],
      },
      colors: {
        'black': '#000',
        'white': '#FFF',
        'off-white': '#CFCFC3',
        'grey': '#DBDBDB',
        'light-orange': '#DCD2C7',
        'orange': '#E27400',
      }
    },
  },
  plugins: []
}