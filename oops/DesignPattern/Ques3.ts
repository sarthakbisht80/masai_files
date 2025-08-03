class PetrolEngine {
  start(): void {
    console.log("Petrol engine started");
  }
}

class Car {
  engine: PetrolEngine = new PetrolEngine(); // Direct dependency

  drive(): void {
    this.engine.start();
    console.log("Driving car");
  }
}
