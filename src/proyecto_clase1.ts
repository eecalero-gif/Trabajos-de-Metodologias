// ================= INTERFACES =================

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

// ================= CLASE ESTUDIANTE =================

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

// ================= SISTEMA =================

class SistemaEstudiantes {
  private estudiantes: Estudiante[] = [];

  agregar(est: Estudiante): IResultado<Estudiante> {
    for (let e of this.estudiantes) {
      if (e.id === est.id) {
        return { ok: false, mensaje: "ID repetido" };
      }
    }

    if (est.edad < 15 || est.edad > 80) {
      return { ok: false, mensaje: "Edad no válida" };
    }

    if (est.promedio < 0 || est.promedio > 10) {
      return { ok: false, mensaje: "Promedio no válido" };
    }

    this.estudiantes.push(est);
    return { ok: true, mensaje: "Estudiante agregado", data: est };
  }

  listar(): Estudiante[] {
    for (let e of this.estudiantes) {
      console.log(e);
    }
    return this.estudiantes;
  }

  buscarPorId(id: number): IResultado<Estudiante> {
    for (let e of this.estudiantes) {
      if (e.id === id) {
        return { ok: true, mensaje: "Encontrado", data: e };
      }
    }
    return { ok: false, mensaje: "Estudiante no existe" };
  }

  actualizarPromedio(id: number, nuevoPromedio: number): IResultado<Estudiante> {
    if (nuevoPromedio < 0 || nuevoPromedio > 10) {
      return { ok: false, mensaje: "Promedio inválido" };
    }

    for (let e of this.estudiantes) {
      if (e.id === id) {
        e.promedio = nuevoPromedio;
        return { ok: true, mensaje: "Promedio actualizado", data: e };
      }
    }
    return { ok: false, mensaje: "Estudiante no existe" };
  }

  cambiarEstado(id: number, activo: boolean): IResultado<Estudiante> {
    for (let e of this.estudiantes) {
      if (e.id === id) {
        e.activo = activo;
        return { ok: true, mensaje: "Estado actualizado", data: e };
      }
    }
    return { ok: false, mensaje: "Estudiante no existe" };
  }

  listarActivos(): Estudiante[] {
    const activos: Estudiante[] = [];
    for (let e of this.estudiantes) {
      if (e.activo) {
        activos.push(e);
      }
    }
    return activos;
  }

  promedioGeneral(): number {
    let suma = 0;
    for (let e of this.estudiantes) {
      suma += e.promedio;
    }
    return this.estudiantes.length > 0
      ? suma / this.estudiantes.length
      : 0;
  }
}

// ================= FUNCIONES =================

function mostrarMenu(): void {
  console.log("Mini Sistema de Gestión de Estudiantes");
}

function ejecutarDemo(sistema: SistemaEstudiantes): void {
  console.log("\n--- AGREGANDO ESTUDIANTES ---");
  sistema.agregar(new Estudiante(1, "Ana", 20, "Sistemas", true, 8.5));
  sistema.agregar(new Estudiante(2, "Luis", 22, "Contabilidad", true, 7.8));
  sistema.agregar(new Estudiante(3, "Maria", 19, "Derecho", true, 9.2));

  console.log("\n--- LISTA COMPLETA ---");
  sistema.listar();

  console.log("\n--- BUSCAR ID 2 ---");
  console.log(sistema.buscarPorId(2));

  console.log("\n--- ACTUALIZAR PROMEDIO ---");
  console.log(sistema.actualizarPromedio(1, 9.1));

  console.log("\n--- CAMBIAR ESTADO ---");
  sistema.cambiarEstado(2, false);

  console.log("\n--- LISTAR ACTIVOS ---");
  console.log(sistema.listarActivos());

  console.log("\n--- PROMEDIO GENERAL ---");
  console.log(sistema.promedioGeneral());
}

// ================= EJECUCIÓN =================

mostrarMenu();
const sistema = new SistemaEstudiantes();
ejecutarDemo(sistema);
