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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'blue': '#0483e5',
      'blue-strong': '#0477c9',
      'gray-200': '#e5e7eb',
      'gray-100': '#f3f4f6',
      'gray': '#9ca3af',
      'gray-dark': '#374151',
      'red-500': '#ef4444',
      'black': '#000000'
    }
  },
  plugins: [],
}