export function transformarCadena(texto: string): string {
  let resultado = "";

  // Usamos for...of para evitar errores de índice texto[i]
  for (const caracter of texto) {
    // Pasamos a minúscula para comparar, pero guardamos el original si es necesario
    const charLower = caracter.toLowerCase();

    // 1. Prioridad: Letras 'm' y 'n' -> '*' 
    if (charLower === 'm' || charLower === 'n') {
      resultado += "*";
    } 
    // 2. Vocales (a, e, i, o, u) -> '(' 
    else if ("aeiou".includes(charLower)) {
      resultado += "(";
    } 
    // 3. Consonantes -> ')' 
    // Verificamos que sea una letra entre 'a' y 'z'
    else if (charLower >= 'a' && charLower <= 'z') {
      resultado += ")";
    } 
    // 4. Caracteres no alfabéticos (espacios, números, etc.) -> sin cambios 
    else {
      resultado += caracter;
    }
  }

  return resultado;
}

// Ejemplo de prueba
console.log(transformarCadena("mundo")); // Resultado: *(*)(