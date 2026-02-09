/**
 * ⚠️ NO MODIFICAR ESTE ARCHIVO
 * Validación automática del Ejercicio 3
 */

import { sumaMaximaCincoNumeros } from "../ejercicio3/index";

/** Casos de prueba (15 números cada uno) */
const casosDePrueba: { entrada: number[]; esperado: number }[] = [
  {
    entrada: [1, 5, 3, 9, 7, 2, 8, 4, 6, 10, 11, 12, 13, 14, 15],
    esperado: 65, // 15+14+13+12+11
  },
  {
    entrada: [-5, -1, -3, -2, -4, 10, 8, 7, 6, 9, 0, 1, 2, 3, 4],
    esperado: 38, // 10+9+8+7+4
  },
  {
    entrada: [100, 90, 80, 70, 60, 1, 2, 3, 4, 5, -1, -2, -3, -4, -5],
    esperado: 400,
  },
];

/** Validación */
function ejecutarValidacion() {
  console.log("\n===== VALIDACIÓN EJERCICIO 3 =====");

  casosDePrueba.forEach((caso, index) => {
    console.log(`\nCaso ${index + 1}`);
    console.log("Entrada:", caso.entrada);

    const resultado = sumaMaximaCincoNumeros(caso.entrada);

    console.log("Resultado:", resultado);
    console.log("Esperado: ", caso.esperado);

    const ok = resultado === caso.esperado;
    console.log(ok ? "✅ CORRECTO" : "❌ INCORRECTO");
  });
}

/** ✅ Auto-ejecución */
ejecutarValidacion();
