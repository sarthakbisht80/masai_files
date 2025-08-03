// Car class implements IVehicle
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Car is starting");
    };
    return Car;
}());
// Bike class implements IVehicle
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.start = function () {
        console.log("Bike is starting");
    };
    return Bike;
}());
// Driver class is loosely coupled with IVehicle
var Driver = /** @class */ (function () {
    function Driver(vehicle) {
        this.vehicle = vehicle;
    }
    Driver.prototype.drive = function () {
        this.vehicle.start();
        console.log("Driving...");
    };
    return Driver;
}());
// Usage
var carDriver = new Driver(new Car());
carDriver.drive();
var bikeDriver = new Driver(new Bike());
bikeDriver.drive();
