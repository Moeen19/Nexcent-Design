/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Project/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 4px 0px rgba(171, 190, 209, 0.20)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

