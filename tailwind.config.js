/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
    }
  },
  content: ["*.{html,php}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
