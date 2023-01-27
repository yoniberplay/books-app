/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      primario: '#219e9a',
      primario700: '#78EBE7',
      primario800: '#166B68',
      footer:"#9E4D21",
      navmenu:"#521D01",

    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}