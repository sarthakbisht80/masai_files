var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log("Engine started");
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.drive = function () {
        this.engine.start();
        console.log("Car is driving");
    };
    return Car;
}());
// Usage
var engine = new Engine();
var car = new Car(engine);
car.drive();
