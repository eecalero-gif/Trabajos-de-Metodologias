// ===============================
// MODELOS (INTERFACES)
// ===============================

interface IEstudiante {
    id: number;
    nombre: string;
    edad: number;
    carrera: string;
    activo: boolean;
    promedio: number;
}

interface IResultado<T> {
    ok: boolean;
    mensaje: string;
    data?: T;
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

    // Agregar estudiante
    agregar(est: Estudiante): IResultado<Estudiante> {

        // Validar ID repetido
        for (let e of this.estudiantes) {
            if (e.id === est.id) {
                return { ok: false, mensaje: "ID ya registrado." };
            }
        }

        // Validar edad
        if (est.edad < 15 || est.edad > 80) {
            return { ok: false, mensaje: "Edad inválida (15-80)." };
        }

        // Validar promedio
        if (est.promedio < 0 || est.promedio > 10) {
            return { ok: false, mensaje: "Promedio inválido (0-10)." };
        }

        this.estudiantes.push(est);

        return { ok: true, mensaje: "Estudiante agregado correctamente.", data: est };
    }

    // Listar todos
    listar(): Estudiante[] {
        return this.estudiantes;
    }

    // Buscar por ID
    buscarPorId(id: number): IResultado<Estudiante> {

        for (let e of this.estudiantes) {
            if (e.id === id) {
                return { ok: true, mensaje: "Estudiante encontrado.", data: e };
            }
        }

        return { ok: false, mensaje: "Estudiante no encontrado." };
    }

    // Actualizar promedio
    actualizarPromedio(id: number, nuevoPromedio: number): IResultado<Estudiante> {

        if (nuevoPromedio < 0 || nuevoPromedio > 10) {
            return { ok: false, mensaje: "Promedio inválido (0-10)." };
        }

        for (let e of this.estudiantes) {
            if (e.id === id) {
                e.promedio = nuevoPromedio;
                return { ok: true, mensaje: "Promedio actualizado.", data: e };
            }
        }

        return { ok: false, mensaje: "Estudiante no encontrado." };
    }

    // Cambiar estado
    cambiarEstado(id: number, activo: boolean): IResultado<Estudiante> {

        for (let e of this.estudiantes) {
            if (e.id === id) {
                e.activo = activo;
                return { ok: true, mensaje: "Estado actualizado.", data: e };
            }
        }

        return { ok: false, mensaje: "Estudiante no encontrado." };
    }

    // Listar activos
    listarActivos(): Estudiante[] {

        let activos: Estudiante[] = [];

        for (let e of this.estudiantes) {
            if (e.activo) {
                activos.push(e);
            }
        }

        return activos;
    }

    // Promedio general
    promedioGeneral(): number {

        if (this.estudiantes.length === 0) return 0;

        let suma = 0;

        for (let e of this.estudiantes) {
            suma += e.promedio;
        }

        return suma / this.estudiantes.length;
    }
}

// ===============================
// FUNCIONES EXTRA
// ===============================

function mostrarMenu(): void {
    console.log("\n===== SISTEMA DE ESTUDIANTES =====");
    console.log("1. Agregar");
    console.log("2. Listar");
    console.log("3. Buscar por ID");
    console.log("4. Actualizar promedio");
    console.log("5. Cambiar estado");
    console.log("6. Listar activos");
    console.log("7. Promedio general");
    console.log("==================================");
}

// Demo automática
function ejecutarDemo(sistema: SistemaEstudiantes): void {

    console.log("\n--- AGREGANDO ESTUDIANTES ---");

    console.log(
        sistema.agregar(new Estudiante(1, "Carlos", 20, "Ingeniería", true, 8.5))
    );

    console.log(
        sistema.agregar(new Estudiante(2, "María", 22, "Medicina", true, 9.2))
    );

    console.log(
        sistema.agregar(new Estudiante(3, "Luis", 19, "Derecho", true, 7.8))
    );

    console.log("\n--- LISTAR TODOS ---");
    console.log(sistema.listar());

    console.log("\n--- BUSCAR ID 2 ---");
    console.log(sistema.buscarPorId(2));

    console.log("\n--- ACTUALIZAR PROMEDIO ID 1 ---");
    console.log(sistema.actualizarPromedio(1, 9.0));

    console.log("\n--- CAMBIAR ESTADO ID 3 (INACTIVO) ---");
    console.log(sistema.cambiarEstado(3, false));

    console.log("\n--- LISTAR ACTIVOS ---");
    console.log(sistema.listarActivos());

    console.log("\n--- PROMEDIO GENERAL ---");
    console.log("Promedio General:", sistema.promedioGeneral());
}

// ===============================
// EJECUCIÓN
// ===============================

const sistema = new SistemaEstudiantes();
ejecutarDemo(sistema);
