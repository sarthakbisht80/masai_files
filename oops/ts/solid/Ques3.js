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
var Bird = /** @class */ (function () {
    function Bird() {
    }
    return Bird;
}());
var Sparrow = /** @class */ (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sparrow.prototype.eat = function () {
        console.log("Sparrow eating...");
    };
    Sparrow.prototype.fly = function () {
        console.log("Sparrow flying...");
    };
    return Sparrow;
}(Bird));
var Ostrich = /** @class */ (function (_super) {
    __extends(Ostrich, _super);
    function Ostrich() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ostrich.prototype.eat = function () {
        console.log("Ostrich eating...");
    };
    return Ostrich;
}(Bird));
// Usage
var birds = [new Sparrow(), new Ostrich()];
for (var _i = 0, birds_1 = birds; _i < birds_1.length; _i++) {
    var bird = birds_1[_i];
    bird.eat();
    // Only call fly() if it's Flyable
    if ("fly" in bird) {
        bird.fly();
    }
}
