/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        prime: {
          500: 'hsl(27, 91%, 57%)',
          600: 'hsl(27, 100%, 67%)',
        },
        graphite: {
          400: 'hsl(0, 0%, 40%)',
          500: 'hsl(0, 0%, 29%)',
          600: 'hsl(0, 0%, 21%)',
          700: 'hsl(0deg 0% 16%)',
          800: 'hsl(0, 0%, 13%)',
          900: 'hsl(0, 0%, 9%)',
        },
        letter: {
          unset: {
            normal: 'hsl(0, 0%, 40%)',
            hover: 'hsl(0, 0%, 50%)',
          },
          incorrect: {
            normal: 'hsl(0, 0%, 20%)',
            hover: 'hsl(0, 0%, 30%)',
          },
          partlyCorrect: {
            normal: 'hsl(60, 62%, 29%)',
            hover: 'hsl(60, 61%, 42%)',
          },
          correct: {
            normal: 'hsl(102, 79%, 28%)',
            hover: 'hsl(102, 79%, 38%)',
          },
        },
      },
      textColor: {
        normal: 'hsl(0, 0%, 87%)',
        error: {
          normal: 'hsl(0, 100%, 66%)',
        },
      },
      fontFamily: {
        primary: ['Cairo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        secondary: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        special: ['Oxanium', 'system-ui', 'sans-serif'],
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        'wiggle-fast': 'wiggle 1.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
