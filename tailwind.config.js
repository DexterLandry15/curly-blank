/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {
      backgroundImage: {
        'nodar': "url('/assets/streamers/nodar.png')",
        'kokash': "url('/assets/streamers/kokash.png')",
        'kokos': "url('/assets/streamers/kokos.jpg')",
        'mika': "url('/assets/streamers/mika.jpg')",
        'aika': "url('/assets/streamers/aika.png')"
      },
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