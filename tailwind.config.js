/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
      },
      colors: {
        'custom': '#322255',
        'card': '#544186',
      },
    },
  },
  plugins: [
  //  require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}