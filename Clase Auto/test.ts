// test.ts
import { Auto } from './Auto';

const auto = new Auto();

let velocidad = 50; // km/h

// Test: Acelerar
console.log(`Velocidad inicial: ${velocidad} km/h`);
velocidad = auto.acelerar(velocidad, 20);
console.log(`Velocidad después de acelerar: ${velocidad} km/h`);

// Test: Frenar
velocidad = auto.frenar(velocidad, 30);
console.log(`Velocidad después de frenar: ${velocidad} km/h`);

// Test: Recorrer
const distancia = 100; // km
const tiempo = 2; // horas
const velocidadMedia = auto.recorrer(distancia, tiempo);
console.log(`Velocidad media: ${velocidadMedia} km/h`);
