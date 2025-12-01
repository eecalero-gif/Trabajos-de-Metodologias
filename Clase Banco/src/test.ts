// src/test.ts
import { Banco } from './Banco';

let saldo = 1000;

console.log("Saldo inicial:", saldo);

try {
  saldo = Banco.depositar(saldo, 500);
  console.log("Saldo después de depósito de 500:", saldo);

  saldo = Banco.retirar(saldo, 300);
  console.log("Saldo después de retiro de 300:", saldo);

  saldo = Banco.transferir(saldo, 200);
  console.log("Saldo después de transferencia de 200:", saldo);

  // Intentar una transferencia mayor que el saldo
  saldo = Banco.transferir(saldo, 1500);  // Esto lanzará un error
} catch (error) {
  console.error("Error:", error.message);
}
