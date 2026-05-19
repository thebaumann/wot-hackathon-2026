/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        trumpf: {
          blue: '#003F87',
          'blue-dark': '#002D6B',
          green: '#A3C831',
          'green-dark': '#8DB227',
          dark: '#1A1A1A',
          gray: '#4A4A4A',
          'gray-light': '#F5F5F5',
          'gray-mid': '#E8E8E8',
          'gray-border': '#D0D0D0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', '-apple-system', 'sans-serif']
      },
      maxWidth: {
        '8xl': '1440px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'count-up': 'countUp 1.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
