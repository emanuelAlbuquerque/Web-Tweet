/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '19': '19px',
      '20': '20px',
      '22': '22px',
      '40': '40px'
    },
    colors: {
      'black': '#0F1419',
      'primary-blue': '#1DA1F2',
      'white': '#FFFFFF',
      'transparent': 'transparent',
      'bg-like': '#F4245E',
      dark: {
        1: '#17202A',
        2: '#1C2733',
        3: '#283340',
        4: '#3A444C',
        5: '#5B7083',
        6: '#8899A6',
        7: '#EBEEF0',
        8: '#F7F9FA',
      },
      'bg-img': '#C4C4C4'
      
    },
    fontWeight: {
      '700': 700,
      '500': 500
    },

    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
