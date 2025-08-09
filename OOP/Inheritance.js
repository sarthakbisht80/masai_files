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
var africanDuck = /** @class */ (function () {
    function africanDuck() {
    }
    africanDuck.prototype.swim = function () {
        console.log("i know swimming");
    };
    africanDuck.prototype.sound = function () {
        console.log("FUck Fuck");
    };
    return africanDuck;
}());
//duck is child class after extendig its parent IndianDuck it will
//get all the properties of parent class
var TanzaniaDuck = /** @class */ (function (_super) {
    __extends(TanzaniaDuck, _super);
    function TanzaniaDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TanzaniaDuck.prototype.maar = function () {
        console.log("maar amardrchod");
    };
    return TanzaniaDuck;
}(africanDuck));
var obj = new TanzaniaDuck();
obj.swim();
obj.maar();
