/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'dist/*.{html,js}'
  ],
  theme: {
    extend: {
      spacing: {
        '85': '22.25rem'
      },
    },
    fontFamily: {
      Inter: ['Inter, sans-serif']
    },
  },
  plugins: [],
}