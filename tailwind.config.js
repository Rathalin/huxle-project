/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        prime: {
          500: 'hwb(27 18% 4%)',
          600: 'hwb(27 33% 0%)',
        },
        graphite: {
          600: '#363636',
          800: '#212121',
          900: '#171717',
        },
      },
      fontFamily: {
        primary: ['Cairo', 'ui-sans-serif', 'system-ui'],
        secondary: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
