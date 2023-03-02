module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#363853',
        primary: '#0012FF',
        green: '#67D4CA',
        red: '#F28080',
        'dark-light': '#F8FAFB'
      }
    },
  },
  plugins: [],
}
