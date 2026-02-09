/**
 * ⚠️ NO MODIFICAR ESTE ARCHIVO
 * Validación automática del Ejercicio 4
 */

import { ordenarBurbuja, busquedaBinaria } from "../ejercicio4/index";

/** Casos de prueba */
const casosDePrueba: {
  lista: number[];
  buscar: number;
  posicionEsperada: number;
}[] = [
  {
    lista: [5, 3, 8, 4, 2],
    buscar: 4,
    posicionEsperada: 2, // lista ordenada: [2,3,4,5,8]
  },
  {
    lista: [10, 1, 7, 6, 2, 9],
    buscar: 9,
    posicionEsperada: 4, // [1,2,6,7,9,10]
  },
  {
    lista: [15, 12, 11, 14, 13],
    buscar: 20,
    posicionEsperada: -1,
  },
];

/** Validación */
function ejecutarValidacion() {
  console.log("\n===== VALIDACIÓN EJERCICIO 4 =====");

  casosDePrueba.forEach((caso, index) => {
    console.log(`\nCaso ${index + 1}`);
    console.log("Lista original:", caso.lista);

    const ordenada = ordenarBurbuja(caso.lista);
    console.log("Lista ordenada:", ordenada);

    const posicion = busquedaBinaria(ordenada, caso.buscar);

    console.log("Número buscado:", caso.buscar);
    console.log("Posición obtenida:", posicion);
    console.log("Posición esperada:", caso.posicionEsperada);

    const ok = posicion === caso.posicionEsperada;
    console.log(ok ? "✅ CORRECTO" : "❌ INCORRECTO");
  });
}

/** ✅ Auto-ejecución */
ejecutarValidacion();
