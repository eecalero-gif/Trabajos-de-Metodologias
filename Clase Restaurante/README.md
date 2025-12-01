# Restaurante - Cálculo de Pedidos

Este proyecto en TypeScript permite calcular el costo de un pedido en un restaurante, aplicar descuentos y calcular la propina.

## Archivos

- `Restaurante.ts`: Contiene la clase `Restaurante` con métodos para calcular el total de un pedido, aplicar descuentos y calcular la propina.
- `test.ts`: Archivo de prueba donde se crea una instancia de la clase y se ejecutan los métodos.
- `tsconfig.json`: Configuración de TypeScript.
- `package.json`: Contiene las dependencias y los scripts para compilar y ejecutar el proyecto.

## Cómo Ejecutar

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Compila el código con `npm run build`.
4. Ejecuta el código con `npm start`.

## Métodos

### `calcularTotal(precio: number, cantidad: number): number`

Este método calcula el total a pagar por un producto.

### `aplicarDescuento(total: number, descuento: number): number`

Este método aplica un descuento al total del pedido.

### `calcularPropina(total: number, porcentaje: number): number`

Este método calcula el valor de la propina basado en un porcentaje.
