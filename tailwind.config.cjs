/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',

  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#111827',
        'secondary': '#1F2937',
        'danger': '#b91c1c',
        'success': '#15803d',
        'warning': '#fbbf24',
        'info': '#0369a1',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
