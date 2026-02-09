export function sumaMaximaCincoNumeros(lista: number[]): number {
    // 1. Ordenamos la lista de mayor a menor
    // Usamos slice() para no modificar el arreglo original
    const listaOrdenada = lista.slice().sort((a, b) => b - a);

    // 2. Tomamos los primeros 5 elementos (los más grandes)
    const losCincoMasAltos = listaOrdenada.slice(0, 5);

    // 3. Sumamos esos 5 elementos
    const suma = losCincoMasAltos.reduce((acumulado, actual) => acumulado + actual, 0);

    return suma;
}

console.log(
  sumaMaximaCincoNumeros([7, 2, 5, 4, 9, 0, 13, 54, 12, 10, 111, 3, 19, 6, 15]) // Salida: 212
);