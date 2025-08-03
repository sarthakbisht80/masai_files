// Define an interface
interface IVehicle {
  start(): void;
}

// Car class implements IVehicle
class Car implements IVehicle {
  start(): void {
    console.log("Car is starting");
  }
}

// Bike class implements IVehicle
class Bike implements IVehicle {
  start(): void {
    console.log("Bike is starting");
  }
}

// Driver class is loosely coupled with IVehicle
class Driver {
  private vehicle: IVehicle;

  constructor(vehicle: IVehicle) {
    this.vehicle = vehicle;
  }

  drive(): void {
    this.vehicle.start();
    console.log("Driving...");
  }
}

// Usage
const carDriver = new Driver(new Car());
carDriver.drive();

const bikeDriver = new Driver(new Bike());
bikeDriver.drive();
