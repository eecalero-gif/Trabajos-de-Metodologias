import * as readline from "readline";
;

// ===============================
// INTERFAZ
// ===============================
interface IEstudiante {
    id: number;
    nombre: string;
    edad: number;
    carrera: string;
    activo: boolean;
    promedio: number;
}

// ===============================
// CLASE ESTUDIANTE
// ===============================
class Estudiante implements IEstudiante {
    constructor(
        public id: number,
        public nombre: string,
        public edad: number,
        public carrera: string,
        public activo: boolean,
        public promedio: number
    ) {}
}

// ===============================
// CLASE SISTEMA
// ===============================
class SistemaEstudiantes {

    private estudiantes: Estudiante[] = [];

    agregar(est: Estudiante): string {

        if (this.estudiantes.find(e => e.id === est.id))
            return "ID ya registrado";

        this.estudiantes.push(est);
        return "Estudiante agregado";
    }

    listar(): Estudiante[] {
        return this.estudiantes;
    }

    buscarPorId(id: number): Estudiante | undefined {
        return this.estudiantes.find(e => e.id === id);
    }

    actualizarPromedio(id: number, promedio: number): string {

        const est = this.buscarPorId(id);

        if (!est) return "No encontrado";

        est.promedio = promedio;
        return "Promedio actualizado";
    }

    cambiarEstado(id: number, activo: boolean): string {

        const est = this.buscarPorId(id);

        if (!est) return "No encontrado";

        est.activo = activo;
        return "Estado actualizado";
    }

    listarActivos(): Estudiante[] {
        return this.estudiantes.filter(e => e.activo);
    }

    promedioGeneral(): number {

        if (this.estudiantes.length === 0) return 0;

        return this.estudiantes.reduce((a, b) => a + b.promedio, 0) / this.estudiantes.length;
    }
}

// ===============================
// CONFIG READLINE
// ===============================
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistema = new SistemaEstudiantes();

// ================
