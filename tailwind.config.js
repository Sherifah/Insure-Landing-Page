/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(256, 26%, 20%)',
          200: 'hsl(216, 30%, 68%)',
        },
        neutral: {
          100: 'hsl(270, 9%, 17%)',
          200: 'hsl(273, 4%, 51%)',
          300: 'hsl(0, 0%, 98%)',
        }
      },
      fontFamily: {
        headings: ['DM Serif Display'],
        body: ['Karla'],
      },
    },
  },
  plugins: [],
}
