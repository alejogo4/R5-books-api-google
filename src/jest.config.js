// jest.config.js
module.exports = {
  // ...otras configuraciones...
  moduleNameMapper: {
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1'
    // Agrega otros alias aquí si es necesario
  },
  // Configuración adicional si usas TypeScript
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
  // ...otras configuraciones...
};
