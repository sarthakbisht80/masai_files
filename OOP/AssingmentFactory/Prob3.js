var Car = /** @class */ (function () {
    function Car(builder) {
        this.brand = builder.brand;
        this.engine = builder.engine;
        this.color = builder.color;
        this.sunroof = builder.sunroof;
        this.automaticTransmission = builder.automaticTransmission;
    }
    Car.prototype.toString = function () {
        return "Car[brand=".concat(this.brand, ", engine=").concat(this.engine, ", color=").concat(this.color, ", sunroof=").concat(this.sunroof, ", automaticTransmission=").concat(this.automaticTransmission, "]");
    };
    return Car;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.sunroof = false;
        this.automaticTransmission = false;
    }
    CarBuilder.prototype.setBrand = function (brand) {
        this.brand = brand;
        return this;
    };
    CarBuilder.prototype.setEngine = function (engine) {
        this.engine = engine;
        return this;
    };
    CarBuilder.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    CarBuilder.prototype.setSunroof = function (sunroof) {
        this.sunroof = sunroof;
        return this;
    };
    CarBuilder.prototype.setAutomaticTransmission = function (auto) {
        this.automaticTransmission = auto;
        return this;
    };
    CarBuilder.prototype.build = function () {
        if (!this.brand || !this.engine || !this.color) {
            throw new Error("Brand, engine, and color must be set before building the car.");
        }
        return new Car(this);
    };
    return CarBuilder;
}());
var myTesla = new CarBuilder()
    .setBrand("Tesla Model S")
    .setEngine("Electric")
    .setColor("Black")
    .setSunroof(true)
    .setAutomaticTransmission(true)
    .build();
console.log(myTesla.toString());
