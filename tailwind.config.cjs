/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        zeedas: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        zeedas: {
          'border-gray': '#D8DAE5',
          'btn-default': '#1018400D',
          'btn-primary': '#229BE0',
          'bg-chart': '#23B3E80D',
          'bg-body': '#F9FAFC',
          'menu-bg-10': '#1018401A',
          'text-blue': '#23B3E8',
          'text-gray': '#696F8C',
          'text-dark': '#1F242B',
          'text-primary': '#101840',
          'text-secondary': '#474D66',
          green: '#429777',
          orange: '#F15832',
          android: '#4CE4AB',
          flutter: '#48B4E2',
          nodejs: '#63EDF6',
          php: '#FF9162',
          python: '#2C8CC2',
          ruby: '#FC8B82',
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
