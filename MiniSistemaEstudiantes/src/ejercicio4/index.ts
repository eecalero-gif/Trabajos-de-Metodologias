export function busquedaBinariaRecursiva(
  lista: number[], 
  objetivo: number, 
  inicio: number = 0, 
  fin: number = lista.length - 1
): number {
  if (inicio > fin) return -1;

  const mitad = Math.floor((inicio + fin) / 2);
  const valorActual = lista[mitad]; // Extraemos el valor

  // El error suele ser: "Object is possibly 'undefined'"
  if (valorActual === undefined) return -1; 

  if (valorActual === objetivo) return mitad;

  return valorActual < objetivo 
    ? busquedaBinariaRecursiva(lista, objetivo, mitad + 1, fin)
    : busquedaBinariaRecursiva(lista, objetivo, inicio, mitad - 1);
}