import { Hospital } from './Hospital';

const hospital = new Hospital();

// Probar calcularDosis
const dosis = hospital.calcularDosis(70, 5);
console.log(`La dosis de medicamento es: ${dosis} mg`); // Esperado: 350 mg

// Probar calcularIMC
const imc = hospital.calcularIMC(70, 1.75);
console.log(`El IMC es: ${imc.toFixed(2)}`); // Esperado: 22.86

// Probar registrarVisitas
const visitasTotales = hospital.registrarVisitas(5, 3);
console.log(`El total de visitas es: ${visitasTotales}`); // Esperado: 8
