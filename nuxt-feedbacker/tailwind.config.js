/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    ],
    theme: {
      extend: {
        // eslint-disable-next-line no-undef
        colors: require('./assets/js/palette.js')
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

