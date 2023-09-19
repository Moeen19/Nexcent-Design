/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Project/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 4px 0px rgba(171, 190, 209, 0.20)',
        'custom2': '0px 8px 16px 0px rgba(171, 190, 209, 0.40)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

