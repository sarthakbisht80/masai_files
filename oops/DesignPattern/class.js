var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log("Engine started");
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car() {
        this.engine = new Engine(); // Tightly coupled to Engine
    }
    Car.prototype.drive = function () {
        this.engine.start();
        console.log("Car is driving");
    };
    return Car;
}());
// Usage
var car = new Car();
car.drive();
