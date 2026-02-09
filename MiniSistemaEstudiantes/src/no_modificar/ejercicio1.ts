/**
 * ⚠️ NO MODIFICAR ESTE ARCHIVO
 * Contiene los datos de prueba y la validación automática
 */

import { productoExceptoActual } from "../ejercicio1/index";

/** Listas de prueba */
export const listasDePrueba: number[][] = [
  [1, 2, 3, 4],
  [2, 0, 4, 5],
  [-1, 2, -3, 4],
];

/** Resultados esperados */
const resultadosEsperados: number[][] = [
  [24, 12, 8, 6],
  [0, 40, 0, 0],
  [-24, 12, -8, 6],
];

/** Comparación de arreglos */
function compararResultados(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((valor, i) => valor === b[i]);
}

/** Runner de validación */
function ejecutarValidacion() {
  console.log("\n===== VALIDACIÓN EJERCICIO 1 =====");

  listasDePrueba.forEach((lista, index) => {
    console.log(`\nCaso ${index + 1}`);
    console.log("Entrada:", lista);


    const resultado = productoExceptoActual(lista);
    const esperado = resultadosEsperados[index]!;
    console.log("Resultado estudiante:", resultado);
    console.log("Resultado esperado: ", esperado);

    const ok = compararResultados(resultado, esperado);
    console.log(ok ? "✅ CORRECTO" : "❌ INCORRECTO");
  });
}
ejecutarValidacion();