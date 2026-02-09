import { listasDePrueba } from "../no_modificar/ejercicio1";
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    const n = nums.length;
    // Si la lista está vacía, devolvemos un arreglo vacío
    if (n === 0) return [];

    const result = new Array(n).fill(1);

    // 1. Validar que la lista contenga solo números 
    if (!nums.every(n => typeof n === 'number')) {
        throw new Error("Solo se permiten números");
    }

    // Método B: Optimizado (O(n)) con prefijos y sufijos [cite: 3, 4]
    
    let prefijo = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefijo;
        // El "!" después de nums[i] le dice a TS que el valor NO es undefined
        prefijo *= nums[i]!; 
    }

    let sufijo = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= sufijo;
        sufijo *= nums[i]!;
    }

    return result;
}