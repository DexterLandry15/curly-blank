/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {
      colors: {
        'custom': '#322255',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}