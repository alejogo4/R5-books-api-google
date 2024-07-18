/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6C63FF', // Un tono lila claro, muy agradable y calmante
          DEFAULT: '#4C51BF', // Un tono azul intenso, ideal para destacar
          dark: '#3B49DF', // Un tono azul oscuro, para énfasis
        },
        secondary: {
          light: '#FF6584', // Un rosa claro, agradable y acogedor
          DEFAULT: '#FF3366', // Un rosa brillante, para llamar la atención
          dark: '#D62246', // Un tono rosa más oscuro, para mayor contraste
        },
        background: {
          light: '#F7FAFC', // Blanco ligeramente gris, muy limpio
          DEFAULT: '#EDF2F7', // Gris claro, ideal para fondos
          dark: '#E2E8F0', // Gris más oscuro, para secciones contrastantes
        },
        text: {
          light: '#2D3748', // Gris oscuro, ideal para texto
          DEFAULT: '#1A202C', // Negro casi puro, para texto principal
          dark: '#171923', // Negro intenso, para énfasis
        },
        accent: {
          light: '#F6AD55', // Naranja claro, para resaltar elementos
          DEFAULT: '#ED8936', // Naranja medio, para botones y enlaces
          dark: '#DD6B20', // Naranja oscuro, para detalles importantes
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], // Una fuente suave y moderna
      },
    },
  },
  plugins: [],
}
