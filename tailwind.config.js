/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        themeBlue : '#0B1324',
        themeBlueLight : '#182748',
        themeGreen : '#2FD1A9',
        themeGreenLight : '#45d6b2',
        themeWhite : '#FFFFFF'
      }
      ,
      screens : {
        extraSm : '400px',
        semiMd : '950px',
        semiSm : '500px'
      }
    },
  },
  plugins: [],
}

