export class Estudiante {
  constructor(
    private nombre: string,
    private faltas: number = 0,
    private promedio: number = 0
  ) {}

  // Método para agregar una nueva nota y actualizar el promedio
  agregarNota(promedio: number, nuevaNota: number): number {
    this.promedio = (promedio + nuevaNota) / 2;
    return this.promedio;
  }

  // Método para verificar si el estudiante aprueba
  aprobar(nota: number, minima: number): boolean {
    return nota >= minima;
  }

  // Método para calcular el total de faltas
  calcularFaltas(faltasActuales: number, nuevas: number): number {
    this.faltas = faltasActuales + nuevas;
    return this.faltas;
  }

  // Método para obtener el nombre del estudiante
  getNombre(): string {
    return this.nombre;
  }
}
