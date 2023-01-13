/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],

  theme: {
    extend: {
      colors: {
        "wg": "#f8fafc",
        "primary": "#111827",
        "secondary": "#1f2937",
        "danger": "#ef4444",
        "success": "#10b981",
        "warning": "#fbbf24",
        "info": "#0891b2",
        "light": {
          "border": {
            DEFAULT: "#374151",
            "hover": "#cbd5e1"
          }
        }
      }
    }
  },
  plugins: []
};