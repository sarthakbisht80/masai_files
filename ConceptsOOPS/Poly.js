//method Overloading
// class Poly{
//     name:string;
//     age:number;
//  constructor(UName:string,Age:number){
//     this.name=UName;
//     this.age=Age;
//  }
// Prepare(item:number):void;
// Prepare(item:number, quantity:number):void;
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
// Prepare(item:number, quantity?:number):void{
//     if(quantity==undefined){
//         console.log(`no of items are ${item}`);
//     }
//     else{
//         console.log(`no of items are ${item} and quanitity is ${quantity}`);
//     }
// }
// }
// //method overloadiing
// let Obj= new Poly("Sarthak",22);
// Obj.Prepare(22);
// Obj.Prepare(22,100);
//Method Overriding
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.makeSound = function () {
        console.log("Animal make sound 🫏");
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.makeSound = function () {
        console.log("Dog makes Sound🐶");
    };
    return dog;
}(animal));
var objAni = new animal();
var objDog = new dog();
objAni.makeSound(); // will print annimal make sound
objDog.makeSound(); //will print dog says 
objDog.makeSound();
