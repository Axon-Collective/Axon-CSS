const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--primary), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--primary), var(${opacityVariable}, 1))`
        }
        return `rgb(var(--primary))`
      },
      secondary: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--secondary), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--secondary), var(${opacityVariable}, 1))`
        }
        return `rgb(var(--secondary))`
      },
      grey:'#525252',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
