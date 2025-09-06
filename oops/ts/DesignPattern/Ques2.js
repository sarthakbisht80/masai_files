// Car implements IVehicle
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Car is starting");
    };
    return Car;
}());
// Bike implements IVehicle
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.start = function () {
        console.log("Bike is starting");
    };
    return Bike;
}());
// Driver class depends on IVehicle (not concrete classes)
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
var car = new Car();
var bike = new Bike();
var carDriver = new Driver(car);
carDriver.drive();
var bikeDriver = new Driver(bike);
bikeDriver.drive();
