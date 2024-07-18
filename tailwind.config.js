/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6C63FF', 
          DEFAULT: '#4C51BF',
          dark: '#3B49DF', 
        },
        secondary: {
          light: '#FF6584', 
          DEFAULT: '#FF3366', 
          dark: '#D62246',
        },
        background: {
          light: '#F7FAFC', 
          DEFAULT: '#EDF2F7',
          dark: '#E2E8F0',
        },
        text: {
          light: '#2D3748', 
          DEFAULT: '#1A202C',
          dark: '#171923', 
        },
        accent: {
          light: '#F6AD55', 
          DEFAULT: '#ED8936', 
          dark: '#DD6B20', 
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
