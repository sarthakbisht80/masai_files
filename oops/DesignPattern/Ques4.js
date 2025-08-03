// 2. Implementing Classes
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.start = function () {
        console.log("Bike is starting");
    };
    return Bike;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Car is starting");
    };
    return Car;
}());
// 3. Driver Class (Strategy Context)
var Driver = /** @class */ (function () {
    function Driver(vehicle) {
        this.vehicle = vehicle;
    }
    Driver.prototype.setVehicle = function (vehicle) {
        this.vehicle = vehicle;
    };
    Driver.prototype.drive = function () {
        this.vehicle.start();
        console.log("Driving...");
    };
    return Driver;
}());
// 4. Usage
var driver = new Driver(new Bike());
driver.drive(); // Bike is starting \n Driving...
driver.setVehicle(new Car());
driver.drive(); // Car is starting \n Driving...
