const readline = require("readline");

class Estudiante {
    constructor(id, nombre, edad, carrera, activo, promedio) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.activo = activo;
        this.promedio = promedio;
    }
}

class SistemaEstudiantes {
    constructor() {
        this.estudiantes = [];
    }

    agregar(est) {
        if (this.estudiantes.find(e => e.id === est.id))
            return "ID ya registrado";

        this.estudiantes.push(est);
        return "Estudiante agregado";
    }

    listar() {
        return this.estudiantes;
    }

    buscarPorId(id) {
        return this.estudiantes.find(e => e.id === id);
    }

    actualizarPromedio(id, promedio) {
        const est = this.buscarPorId(id);
        if (est) {
            est.promedio = promedio;
            return "Promedio actualizado";
        }
        return "No encontrado";
    }

    cambiarEstado(id, activo) {
        const est = this.buscarPorId(id);
        if (est) {
            est.activo = activo;
            return "Estado actualizado";
        }
        return "No encontrado";
    }

    listarActivos() {
        return this.estudiantes.filter(e => e.activo);
    }

    promedioGeneral() {
        if (this.estudiantes.length === 0) return 0;
        return this.estudiantes.reduce((a, b) => a + b.promedio, 0) / this.estudiantes.length;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistema = new SistemaEstudiantes();

function menu() {
    console.log(`
===== SISTEMA ESTUDIANTES =====
1. Agregar estudiante
2. Listar estudiantes
3. Buscar por ID
4. Actualizar promedio
5. Cambiar estado
6. Listar activos
7. Promedio general
0. Salir
`);

    rl.question("Seleccione opción: ", opcion => {

        switch(opcion) {

            case "1":
                rl.question("ID: ", id => {
                    rl.question("Nombre: ", nombre => {
                        rl.question("Edad: ", edad => {
                            rl.question("Carrera: ", carrera => {
                                rl.question("Promedio: ", promedio => {

                                    const nuevo = new Estudiante(
                                        Number(id),
                                        nombre,
                                        Number(edad),
                                        carrera,
                                        true,
                                        Number(promedio)
                                    );

                                    console.log(sistema.agregar(nuevo));
                                    menu();
                                });
                            });
                        });
                    });
                });
                break;

            case "2":
                console.log(sistema.listar());
                menu();
                break;

            case "3":
                rl.question("Ingrese ID: ", id => {
                    console.log(sistema.buscarPorId(Number(id)));
                    menu();
                });
                break;

            case "4":
                rl.question("ID: ", id => {
                    rl.question("Nuevo promedio: ", p => {
                        console.log(sistema.actualizarPromedio(Number(id), Number(p)));
                        menu();
                    });
                });
                break;

            case "5":
                rl.question("ID: ", id => {
                    rl.question("Activo (true/false): ", estado => {
                        console.log(
                            sistema.cambiarEstado(Number(id), estado === "true")
                        );
                        menu();
                    });
                });
                break;

            case "6":
                console.log(sistema.listarActivos());
                menu();
                break;

            case "7":
                console.log("Promedio:", sistema.promedioGeneral());
                menu();
                break;

            case "0":
                rl.close();
                break;

            default:
                console.log("Opción inválida");
                menu();
        }
    });
}

menu();
