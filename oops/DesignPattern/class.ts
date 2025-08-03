class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine;

  constructor() {
    this.engine = new Engine(); // Tightly coupled to Engine
  }

  drive(): void {
    this.engine.start();
    console.log("Car is driving");
  }
}

// Usage
const car = new Car();
car.drive();
