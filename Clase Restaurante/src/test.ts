import { Restaurante } from './Restaurante';

// Crear una instancia de la clase Restaurante
const restaurante = new Restaurante();

// Calcular total de un pedido
const precioUnitario = 20;
const cantidad = 3;
const total = restaurante.calcularTotal(precioUnitario, cantidad);
console.log(`Total por ${cantidad} unidades a ${precioUnitario} cada una: $${total}`);

// Aplicar descuento
const descuento = 10; // 10%
const totalConDescuento = restaurante.aplicarDescuento(total, descuento);
console.log(`Total con descuento de ${descuento}%: $${totalConDescuento}`);

// Calcular propina
const porcentajePropina = 15; // 15%
const propina = restaurante.calcularPropina(totalConDescuento, porcentajePropina);
console.log(`Propina con ${porcentajePropina}%: $${propina}`);
