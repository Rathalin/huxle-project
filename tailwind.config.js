/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          100: 'hsl(0, 0%, 70%)',
          200: 'hsl(0, 0%, 55%)',
          300: 'hsl(0, 0%, 40%)',
          400: 'hsl(0, 0%, 29%)',
          500: 'hsl(0, 0%, 21%)',
          600: 'hsl(0, 0%, 16%)',
          700: 'hsl(0, 0%, 13%)',
          800: 'hsl(0, 0%, 9%)',
          900: 'hsl(0, 0%, 0%)',
        },
        light: {
          letter: {
            unset: {
              normal: 'hsl(200, 5%, 65%)',
              hover: 'hsl(200, 5%, 60%)',
            },
            absent: {
              normal: 'hsl(0, 3%, 60%)',
              hover: 'hsl(0, 3%, 55%)',
            },
            present: {
              normal: 'hsl(60, 80%, 48%)',
              hover: 'hsl(60, 75%, 45%)',
            },
            correct: {
              normal: 'hsl(102, 81%, 41%)',
              hover: 'hsl(102, 75%, 38%)',
            },
          },
          dialog: {
            backdrop: 'hsla(0, 0%, 10%, 0.75)',
          },
        },
        dark: {
          letter: {
            unset: {
              normal: 'hsl(0, 0%, 40%)',
              hover: 'hsl(0, 0%, 50%)',
            },
            absent: {
              normal: 'hsl(0, 0%, 20%)',
              hover: 'hsl(0, 0%, 30%)',
            },
            present: {
              normal: 'hsl(60, 62%, 29%)',
              hover: 'hsl(60, 61%, 42%)',
            },
            correct: {
              normal: 'hsl(102, 79%, 28%)',
              hover: 'hsl(102, 79%, 38%)',
            },
          },
          dialog: {
            backdrop: 'hsla(0, 0%, 80%, 0.25)',
          },
        },
      },
      textColor: {
        light: {
          normal: 'hsl(0, 0%, 10%)',
          error: 'hsl(0, 91%, 45%)',
          success: 'hsl(142, 50%, 40%)',
        },
        dark: {
          normal: 'hsl(0, 0%, 90%)',
          error: 'hsl(0, 91%, 71%)',
          success: 'hsl(142, 69%, 58%)',
        },
      },
      fontFamily: {
        primary: ['Cairo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        secondary: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        special: ['Oxanium', 'system-ui', 'sans-serif'],
        grogu: ['Indie Flower', 'system-ui', 'sans-serif'],
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        'wiggle-fast': 'wiggle 1.5s ease-in-out infinite',
        'spin-slow': 'spin 5s linear infinite',
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
