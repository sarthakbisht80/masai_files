// class shape{
//     public name:string;
//     constructor(name:string){
//         this.name=name;
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
//     }
//     getName():string{
//         return this.name;
//     }
// }
// class Rectangle extends shape{
//     public height:number;
//     public width:number;
//     constructor(width:number, height:number){
//        super('Rectangle');
//         this.width= width;
//         this.height=height;
//     }
//     area():number{
//         return this.height * this.width;
//     }
// }
// const obj= new Rectangle(12,10);
// console.log(obj.getName());
// console.log(obj.area());
// encapulsation
// class animal{
//     private breed:string;
//     constructor(breed:string){
//         this.breed=breed;
//     }
//     getBreed(name:string){
//         console.log(`name of breed is ${name}`);
//     }
// }
// let object= new animal("dog");
// object.getBreed("German shpeherd");
//Inheritance
//  class animal{
//     getData():string{
//        return "i am animal";
//     }
//     }
//     class dog extends animal{
//        getdog():string{
//         return("i am dog")
//        }
//     }
// let obj= new dog();
//  console.log("i am function of child class",obj.getdog());
//  console.log(obj.getData());
//polymorphism\
var Bank = /** @class */ (function () {
    function Bank(amount) {
        this.balance = amount;
    }
    Bank.prototype.getbalance = function () {
        console.log("curr balance is ".concat(this.balance));
    };
    return Bank;
}());
var Sbi = /** @class */ (function (_super) {
    __extends(Sbi, _super);
    function Sbi(amount) {
        return _super.call(this, amount) || this;
    }
    Sbi.prototype.getbalance = function () {
        console.log(" i am sbi");
    };
    return Sbi;
}(Bank));
var obj = new Bank(12000);
var sbiobj = new Sbi(1000);
sbiobj.getbalance();
obj.getbalance();
