class Hospital {

  // Método para calcular la dosis de medicamento
  calcularDosis(peso: number, mgPorKg: number): number {
    return peso * mgPorKg;
  }

  // Método para calcular el Índice de Masa Corporal (IMC)
  calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
  }

  // Método para registrar las visitas
  registrarVisitas(visitasActuales: number, nuevas: number): number {
    return visitasActuales + nuevas;
  }
}

export { Hospital };
