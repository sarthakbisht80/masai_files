// 1. Interface
interface Vehicle {
  start(): void;
}

// 2. Implementing Classes
class Bike implements Vehicle {
  start(): void {
    console.log("Bike is starting");
  }
}

class Car implements Vehicle {
  start(): void {
    console.log("Car is starting");
  }
}

// 3. Driver Class (Strategy Context)
class Driver {
  private vehicle: Vehicle;

  constructor(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }

  setVehicle(vehicle: Vehicle): void {
    this.vehicle = vehicle;
  }

  drive(): void {
    this.vehicle.start();
    console.log("Driving...");
  }
}

// 4. Usage
const driver = new Driver(new Bike());
driver.drive(); // Bike is starting \n Driving...

driver.setVehicle(new Car());
driver.drive(); // Car is starting \n Driving...
