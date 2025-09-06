interface Engine {
  start(): void;
}

class PetrolEngine implements Engine {
  start(): void {
    console.log("Petrol engine started");
  }
}

class DieselEngine implements Engine {
  start(): void {
    console.log("Diesel engine started");
  }
}


class Car {
  engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  drive(): void {
    this.engine.start();
    console.log("Driving car");
  }
}


const petrolCar = new Car(new PetrolEngine());
petrolCar.drive();
// Output:
// Petrol engine started
// Driving car

const dieselCar = new Car(new DieselEngine());
dieselCar.drive();
// Output:
// Diesel engine started
// Driving car
