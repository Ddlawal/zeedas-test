/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zeedas: {
          'border-gray': '##D8DAE5',
          'menu-bg-10': '#1018401A',
          'text-blue': '#23B3E8',
        },
      },
      boxShadow: {
        zeedas: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
