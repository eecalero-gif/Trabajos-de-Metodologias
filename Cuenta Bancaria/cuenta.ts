class CuentaBancaria {
    // Atributo privado
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    // Método para depositar dinero
    public depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso: $${monto}`);
        } else {
            console.log("El monto a depositar debe ser positivo.");
        }
    }

    // Método para mostrar saldo (acceso controlado)
    public mostrarSaldo(): void {
        console.log(`Saldo actual: $${this.saldo}`);
    }
}

// Ejemplo de uso:
const cuenta = new CuentaBancaria(100);
cuenta.mostrarSaldo();
cuenta.depositar(50);
cuenta.mostrarSaldo();
