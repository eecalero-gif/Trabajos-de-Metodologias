// ===============================
// MODELOS (INTERFACES)
// ===============================
// ===============================
// CLASE ESTUDIANTE
// ===============================
var Estudiante = /** @class */ (function () {
    function Estudiante(id, nombre, edad, carrera, activo, promedio) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.activo = activo;
        this.promedio = promedio;
    }
    return Estudiante;
}());
// ===============================
// CLASE SISTEMA
// ===============================
var SistemaEstudiantes = /** @class */ (function () {
    function SistemaEstudiantes() {
        this.estudiantes = [];
    }
    // Agregar estudiante
    SistemaEstudiantes.prototype.agregar = function (est) {
        // Validar ID repetido
        for (var _i = 0, _a = this.estudiantes; _i < _a.length; _i++) {
            var e = _a[_i];
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
    };
    // Listar todos
    SistemaEstudiantes.prototype.listar = function () {
        return this.estudiantes;
    };
    // Buscar por ID
    SistemaEstudiantes.prototype.buscarPorId = function (id) {
        for (var _i = 0, _a = this.estudiantes; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.id === id) {
                return { ok: true, mensaje: "Estudiante encontrado.", data: e };
            }
        }
        return { ok: false, mensaje: "Estudiante no encontrado." };
    };
    // Actualizar promedio
    SistemaEstudiantes.prototype.actualizarPromedio = function (id, nuevoPromedio) {
        if (nuevoPromedio < 0 || nuevoPromedio > 10) {
            return { ok: false, mensaje: "Promedio inválido (0-10)." };
        }
        for (var _i = 0, _a = this.estudiantes; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.id === id) {
                e.promedio = nuevoPromedio;
                return { ok: true, mensaje: "Promedio actualizado.", data: e };
            }
        }
        return { ok: false, mensaje: "Estudiante no encontrado." };
    };
    // Cambiar estado
    SistemaEstudiantes.prototype.cambiarEstado = function (id, activo) {
        for (var _i = 0, _a = this.estudiantes; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.id === id) {
                e.activo = activo;
                return { ok: true, mensaje: "Estado actualizado.", data: e };
            }
        }
        return { ok: false, mensaje: "Estudiante no encontrado." };
    };
    // Listar activos
    SistemaEstudiantes.prototype.listarActivos = function () {
        var activos = [];
        for (var _i = 0, _a = this.estudiantes; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.activo) {
                activos.push(e);
            }
        }
        return activos;
    };
    // Promedio general
    SistemaEstudiantes.prototype.promedioGeneral = function () {
        if (this.estudiantes.length === 0)
            return 0;
        var suma = 0;
        for (var _i = 0, _a = this.estudiantes; _i < _a.length; _i++) {
            var e = _a[_i];
            suma += e.promedio;
        }
        return suma / this.estudiantes.length;
    };
    return SistemaEstudiantes;
}());
// ===============================
// FUNCIONES EXTRA
// ===============================
function mostrarMenu() {
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
function ejecutarDemo(sistema) {
    console.log("\n--- AGREGANDO ESTUDIANTES ---");
    console.log(sistema.agregar(new Estudiante(1, "Carlos", 20, "Ingeniería", true, 8.5)));
    console.log(sistema.agregar(new Estudiante(2, "María", 22, "Medicina", true, 9.2)));
    console.log(sistema.agregar(new Estudiante(3, "Luis", 19, "Derecho", true, 7.8)));
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
var sistema = new SistemaEstudiantes();
ejecutarDemo(sistema);
