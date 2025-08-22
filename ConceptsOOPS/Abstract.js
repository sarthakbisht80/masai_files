// abstract class Animal{
//     abstract name:string;
//     abstract display():number;
var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.getArea = function () {
        console.log("Area of circle");
        return Math.PI * this.radius * this.radius;
    };
    circle.prototype.getPerimeter = function () {
        console.log("Perimeter of circle");
        return Math.PI * 2 * this.radius;
    };
    return circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        console.log("Area of Rect");
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        console.log("Perimeter of Rect");
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
//Array Shape here
var shapes = [
    new circle(7),
    new Rectangle(12, 16)
];
shapes.forEach(function (sh) {
    console.log("Area", sh.getArea()),
        console.log("Perimeter", sh.getPerimeter());
});
