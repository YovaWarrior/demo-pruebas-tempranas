# language: es
Característica: Búsqueda de productos
  Como cliente de la tienda
  Quiero buscar productos por su nombre
  Para encontrar rápido lo que necesito

  Antecedentes:
    Dado que el catálogo tiene estos productos:
      | nombre              | precio |
      | Laptop Lenovo       | 5500   |
      | Laptop HP           | 4800   |
      | Mouse inalámbrico   | 150    |
      | Monitor 24 pulgadas | 1200   |

  Escenario: Buscar un producto que existe
    Cuando busco "Laptop"
    Entonces veo 2 resultados

  Escenario: La búsqueda no distingue mayúsculas de minúsculas
    Cuando busco "MONITOR"
    Entonces veo 1 resultado

  Escenario: La búsqueda responde en menos de 2 segundos con 500 usuarios
    Cuando 500 usuarios buscan "mouse" al mismo tiempo
    Entonces todas las respuestas llegan en menos de 2 segundos
