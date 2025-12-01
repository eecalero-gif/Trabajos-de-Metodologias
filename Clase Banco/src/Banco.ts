// src/Banco.ts

export class Banco {
  static depositar(saldo: number, monto: number): number {
    return saldo + monto;
  }

  static retirar(saldo: number, monto: number): number {
    if (monto > saldo) {
      throw new Error("Fondos insuficientes");
    }
    return saldo - monto;
  }

  static transferir(saldoOrigen: number, monto: number): number {
    if (monto > saldoOrigen) {
      throw new Error("No se puede transferir más del saldo disponible");
    }
    return saldoOrigen - monto;
  }
}
