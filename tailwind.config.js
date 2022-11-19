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
          400: 'hwb(0 40% 60%)',
          500: 'hwb(0 29% 71%)',
          600: '#363636',
          800: '#212121',
          900: '#171717',
        },
        letter: {
          incorrect: '#333333',
          incorrectHover: 'hwb(0 30% 70%)',
          partlyCorrect: '#76761c',
          partlyCorrectHover: '#abab29',
          correct: '#317e0f',
          correctHover: '#5cf01b',
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
