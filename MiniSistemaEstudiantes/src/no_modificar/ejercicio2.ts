/**
 * ⚠️ NO MODIFICAR ESTE ARCHIVO
 * Validación automática del Ejercicio 2
 */

import { transformarCadena } from "../ejercicio2/index";

/** Casos de prueba */
const casosDePrueba: { entrada: string; esperado: string }[] = [
  { entrada: "hola", esperado: ")()(" },
  { entrada: "mundo", esperado: "*)*)(" },
  { entrada: "MENSAJE", esperado: "*(*()((" },
  { entrada: "TypeScript", esperado: ")()*)*)()*)" },
  { entrada: "aeiou", esperado: "( * *" },
];

/** Ejecuta validación */
function ejecutarValidacion() {
  console.log("\n===== VALIDACIÓN EJERCICIO 2 =====");

  casosDePrueba.forEach((caso, index) => {
    console.log(`\nCaso ${index + 1}`);
    console.log("Entrada:   ", caso.entrada);

    const resultado = transformarCadena(caso.entrada);

    console.log("Resultado: ", resultado);
    console.log("Esperado:  ", caso.esperado);

    const ok = resultado === caso.esperado;
    console.log(ok ? "✅ CORRECTO" : "❌ INCORRECTO");
  });
}

/** ✅ Auto-ejecución */
ejecutarValidacion();
