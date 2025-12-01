// Auto.ts
export class Auto {
  acelerar(velocidadActual: number, incremento: number): number {
    return velocidadActual + incremento;
  }

  frenar(velocidadActual: number, decremento: number): number {
    const nuevaVelocidad = velocidadActual - decremento;
    return nuevaVelocidad < 0 ? 0 : nuevaVelocidad;
  }

  recorrer(distancia: number, tiempo: number): number {
    return distancia / tiempo;
  }
}
