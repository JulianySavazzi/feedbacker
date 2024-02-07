/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
		// eslint-disable-next-line no-undef
      colors: require('./palette.js')
    },
    fontFamily:{
      regular: ['RobotoRegular'],
      medium: ['RobotoMedium'],
      bold: ['RobotoBold'],
      black: ['RobotoBlack']
    }
  },
  plugins: [],
}

