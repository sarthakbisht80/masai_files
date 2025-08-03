var PetrolEngine = /** @class */ (function () {
    function PetrolEngine() {
    }
    PetrolEngine.prototype.start = function () {
        console.log("Petrol engine started");
    };
    return PetrolEngine;
}());
var Car = /** @class */ (function () {
    function Car() {
        this.engine = new PetrolEngine(); // Direct dependency
    }
    Car.prototype.drive = function () {
        this.engine.start();
        console.log("Driving car");
    };
    return Car;
}());
