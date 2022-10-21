/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': {
            transform: 'translatey(0px) scale(1.1)'
          },
          '50%': {
            transform: 'translatey(-20px) scale(1.1)'
          },
          '100%': {
            transform: 'translatey(0px) scale(1.1)'
          }
        },
        floatdown: {
          '0%': {
            transform: 'translatey(0px) scale(1.1)'
          },
          '50%': {
            transform: 'translatey(20px) scale(1.1)'
          },
          '100%': {
            transform: 'translatey(0px) scale(1.1)'
          }
        },
        slideInFromLeft: {
          '0%': {
            transform: 'translateX(-100 %)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-down': 'floatdown 6s ease-in-out infinite reverse',
        'slide-left': '1s ease-out 0s 1 slideInFromLeft'
      }
    },
  },
  plugins: [],
}