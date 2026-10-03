// Configuración de Cucumber.
//   npm test        -> salida en la terminal, paso por paso y en colores
//   npm run test:ci -> lo que usan GitHub Actions y Jenkins (reportes HTML y JUnit)
const comun = {
  paths: ['features/**/*.feature'],
  require: ['features/step_definitions/**/*.js'],
};

module.exports = {
  default: {
    ...comun,
    format: ['pretty'],
    formatOptions: { snippetInterface: 'synchronous' },
  },
  ci: {
    ...comun,
    format: [
      'pretty',
      'html:reportes/cucumber.html',
      'junit:reportes/cucumber.xml',
    ],
  },
};
