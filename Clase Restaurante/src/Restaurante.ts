export class Restaurante {
  // Método para calcular el total de un producto
  calcularTotal(precio: number, cantidad: number): number {
    return precio * cantidad;
  }

  // Método para aplicar descuento
  aplicarDescuento(total: number, descuento: number): number {
    return total - (total * descuento / 100);
  }

  // Método para calcular la propina
  calcularPropina(total: number, porcentaje: number): number {
    return total * (porcentaje / 100);
  }
}
