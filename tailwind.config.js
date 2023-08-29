/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {
      backgroundImage: {
        // streamers
        'nodarbatman': "url('/assets/streamers/nodarbatman.png')",
        'k0kashechka': "url('/assets/streamers/k0kashechka.png')",
        'KoksyaChan': "url('/assets/streamers/KoksyaChan.png')",
        'mikamore_': "url('/assets/streamers/mikamore_.png')",
        'aikasan_': "url('/assets/streamers/aikasan_.png')",
        'ex1zon': "url('/assets/streamers/ex1zon.png')",
        'akiafk': "url('/assets/streamers/akiafk.png')",
        'unoteka': "url('/assets/streamers/unoteka.png')",
        'aaannnw_192': "url('/assets/streamers/aaannnw_192.png')",

        //dev page
        'dev': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to top, rgba(34, 34, 34, 1) 10%, rgba(34, 34, 34, 0) 40%), url('/assets/server/adm-bg.jpg')",

        //server adm

        'wayplay': "url('/assets/team/wayplay.jpg')",
        'frandly': "url('/assets/team/frandly.jpg')",
        'sogood': "url('/assets/team/sogood.jpg')",

        //server assets
        'server': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(0deg, rgba(34, 34, 34, 1) 12%, rgba(34, 34, 34, 0) 40%), url('/assets/server/server-bg.png')",
        'tab-logo': "url('/assets/server/tab-logo.png')",



      },
      colors: {
        'navbar': '#0A0A0A',
        'body': '#111111',
        'card': '#00000051',
        'player': '#9e9e9e41',
      },
    },
  },
  plugins: [
  //  require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}