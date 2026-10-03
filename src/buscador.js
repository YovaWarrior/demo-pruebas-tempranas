// Buscador de productos de la tienda.
//
// DEMO EN VIVO: esta versión tiene un defecto a propósito.
// Compara el texto tal cual, así que buscar "MONITOR" no encuentra "Monitor 24 pulgadas".
// La corrección es una sola línea (está comentada abajo).

function buscar(catalogo, termino) {
  return catalogo.filter((producto) => producto.nombre.includes(termino));

  // Corrección:
  //return catalogo.filter((producto) => producto.nombre.toLowerCase().includes(termino.toLowerCase()));
}

module.exports = { buscar };
