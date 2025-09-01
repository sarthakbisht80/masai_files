var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Vehicle.prototype.drive = function () {
        console.log("Driving at ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
// Derived class
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, speed, fuelType) {
        var _this = _super.call(this, brand, speed) || this; // call the parent constructor
        _this.fuelType = fuelType;
        return _this;
    }
    Car.prototype.refuel = function () {
        console.log("Refueling ".concat(this.fuelType));
    };
    return Car;
}(Vehicle));
// Creating an instance
var myCar = new Car("Toyota", 120, "Petrol");
// Calling methods
myCar.drive(); // Driving at 120 km/h
myCar.refuel(); // Refueling Petrol
