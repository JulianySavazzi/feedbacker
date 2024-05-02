/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts,jsx,html}",
    "./layouts/**/*.{vue,jsx,html}",
    "./pages/**/*.{vue,jsx,html}",
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

