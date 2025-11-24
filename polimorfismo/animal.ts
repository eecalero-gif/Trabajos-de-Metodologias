// Clase base
class Animal {
    public sonar(): void {
        console.log("El animal hace un sonido.");
    }
}

// Clase Perro sobrescribe sonar()
class Perro extends Animal {
    public sonar(): void {
        console.log("El perro dice: ¡Guau guau!");
    }
}

// Clase Gato sobrescribe sonar()
class Gato extends Animal {
    public sonar(): void {
        console.log("El gato dice: ¡Miau!");
    }
}

// Función que demuestra polimorfismo
function hacerSonar(animal: Animal): void {
    animal.sonar();
}

// Ejemplo de uso
const perro = new Perro();
const gato = new Gato();

hacerSonar(perro);  // "El perro dice: ¡Guau guau!"
hacerSonar(gato);   // "El gato dice: ¡Miau!"
