/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {
      backgroundImage: {
        'nodarbatman': "url('/assets/streamers/nodarbatman.png')",
        'k0kashechka': "url('/assets/streamers/k0kashechka.png')",
        'KoksyaChan': "url('/assets/streamers/KoksyaChan.jpg')",
        'mikamore_': "url('/assets/streamers/mikamore_.jpg')",
        'aikasan_': "url('/assets/streamers/aikasan_.png')",
        'ex1zon': "url('/assets/streamers/ex1zon.png')",
        'akiafk': "url('/assets/streamers/akiafk.png')",
        'unoteka': "url('/assets/streamers/unoteka.png')",
        'aaannnw_192': "url('/assets/streamers/aaannnw_192.png')",
        'curlyvanilla': "url('/assets/server/bg.jpg')",
      },
      spacing: {
        '18': '4.5rem',
      },
      colors: {
        'custom': '#322255',
        'card': '#544186',
        'players-list': '#44336d88',
        'player': '#54418688',
      },
    },
  },
  plugins: [
  //  require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}