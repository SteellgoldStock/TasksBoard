/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "media",

  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "default": {
          "primary": "#1f2937",
          "secondary": "#374151",
          "danger": "#dc2626",
          "success": "#047857",
          "warning": "#f59e0b",
          "info": "#075985",
          DEFAULT: "#e2e8f0",
          "light": {
            "border": {
              DEFAULT: "#64748b",
              "hover": "#cbd5e1"
            }
          }
        },

        "dark": {
          "primary": "#111827",
          "secondary": "#1f2937",
          "danger": "#ef4444",
          "success": "#10b981",
          "warning": "#fbbf24",
          "info": "#0891b2",
          DEFAULT: "#f8fafc",
          "light": {
            "border": {
              DEFAULT: "#374151",
              "hover": "#cbd5e1"
            }
          }
        }
      }
    }
  },
  plugins: []
};