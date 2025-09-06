// Define the interface
interface IVehicle {
    start(): void;
}

class Car implements IVehicle {
    start(): void {
        console.log("Car is starting");
    }
}

class Bike implements IVehicle {
    start(): void {
        console.log("Bike is starting");
    }
}

class Driver {
    vehicle: IVehicle;

    constructor(vehicle: IVehicle) {
        this.vehicle = vehicle;
    }

    drive(): void {
        this.vehicle.start();
        console.log("Driving...");
    }
}


const car = new Car();
const bike = new Bike();

const carDriver = new Driver(car);
carDriver.drive();

const bikeDriver = new Driver(bike);
bikeDriver.drive();

