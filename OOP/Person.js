// class Persons {
//     name:string;
//     intrest:string;
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
//     intoduce():void{
//         console.log(`my name is ${this.name} and i ave intrest  in $${this.intrest}`);
//     }
//     constructor(name:string, intrest:string){
//         this.name= name;
//         this.intrest=intrest
//     }
//     //this refers to the cuurent instance - memeroy reps -variables with same name
// } 
// let person2= new Persons("ricky","astronomy");
// ///new triggers constructor of that class
// person2.intoduce();
var IndianDuck = /** @class */ (function () {
    function IndianDuck() {
    }
    IndianDuck.prototype.swim = function () {
        console.log("i know swimming");
    };
    IndianDuck.prototype.sound = function () {
        console.log("FUck Fuck");
    };
    return IndianDuck;
}());
//duck is child class after extendig its parent IndianDuck it will
//get all the properties of parent class
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Duck;
}(IndianDuck));
var duck1 = new Duck();
duck1.swim();
