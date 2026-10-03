// Cada frase en español del archivo .feature se conecta aquí con código.
const { Given, When, Then } = require('@cucumber/cucumber');
const { buscar } = require('../../src/buscador');

Given('que el catálogo tiene estos productos:', function (tabla) {
  this.catalogo = tabla.hashes().map((fila) => ({ nombre: fila.nombre, precio: Number(fila.precio) }));
});

When('busco {string}', function (termino) {
  this.resultados = buscar(this.catalogo, termino);
});

Then('veo {int} resultado(s)', function (esperados) {
  if (this.resultados.length !== esperados) {
    throw new Error(`Se esperaban ${esperados} resultado(s) pero hubo ${this.resultados.length}`);
  }
});

When('{int} usuarios buscan {string} al mismo tiempo', async function (usuarios, termino) {
  const inicio = performance.now();
  await Promise.all(Array.from({ length: usuarios }, async () => buscar(this.catalogo, termino)));
  this.milisegundos = performance.now() - inicio;
});

Then('todas las respuestas llegan en menos de {int} segundos', function (segundos) {
  if (this.milisegundos >= segundos * 1000) {
    throw new Error(`Tardó ${this.milisegundos.toFixed(0)} ms; el límite es ${segundos * 1000} ms`);
  }
});
