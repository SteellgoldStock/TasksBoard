/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',

  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
