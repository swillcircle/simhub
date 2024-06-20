/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sm-gradient': 'linear-gradient(135deg, rgb(17, 168, 173) 0%, rgb(33, 57, 58) 15%, rgb(9, 16, 20) 50%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(12px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        translateDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(2px)' },
        },
      },
      animation: {
        float: 'float 2s infinite ease-in-out',
        translateDown: 'translateDown 0.3s ease-in-out forwards',
      },
      brightness: {
        25: '.25',
      },
      opacity: {
        '95': '.95',
      },
    },
  },
  plugins: [],
}
