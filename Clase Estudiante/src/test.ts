import { Estudiante } from './Estudiante';

// Crear un estudiante
const estudiante1 = new Estudiante("Juan Pérez", 3, 7);

// Agregar una nueva nota y mostrar el nuevo promedio
const nuevoPromedio = estudiante1.agregarNota(estudiante1["promedio"], 9);
console.log(`Nuevo promedio de ${estudiante1.getNombre()}: ${nuevoPromedio}`);

// Verificar si aprueba
const aprueba = estudiante1.aprobar(8, 6);
console.log(`${estudiante1.getNombre()} aprueba: ${aprueba ? "Sí" : "No"}`);

// Calcular las faltas
const faltasTotales = estudiante1.calcularFaltas(3, 2);
console.log(`Faltas totales de ${estudiante1.getNombre()}: ${faltasTotales}`);
