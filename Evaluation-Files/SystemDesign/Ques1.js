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
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    return animal;
}());
//subclass 
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " says woof!"));
    };
    return dog;
}(animal));
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " says Meeau!"));
    };
    return cat;
}(animal));
//main Logic
var animals = [
    new dog("Buddy"),
    new cat("Whiskers"),
];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var ani = animals_1[_i];
    ani.makeSound();
}
