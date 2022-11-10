/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '34': '34px',
      '40': '40px',
      '42': '42px'
    },
    colors: {
      'black': '#0F1419',
      'primary-blue-active': '#1DA1F2',
      'primary-blue-disable': 'rgba(29, 161, 242, .5)',
      'white': '#FFFFFF',
      'transparent': 'transparent',
      'bg-like': '#F4245E',
      'red': 'rgb(255, 0, 0)',
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
      'bg-img': '#C4C4C4',
      'bg-opacity': 'rgba(0, 0, 0, .5)'
    },
    fontWeight: {
      '700': 700,
      '500': 500
    },
    backgroundImage: {
      'profile': "url('../../../src/assets/bg-profile.png')",
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
