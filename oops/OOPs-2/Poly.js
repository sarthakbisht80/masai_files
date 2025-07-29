// class PolyDuck {
//     fly(): void {
//         console.log("Duck is flying");
//     }
// }
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
// class DesiDuck extends PolyDuck {
//     fly(): void {
//         console.log("DesiDuck flies at 10kmph");
//     }
// }
// class VidesiDuck extends PolyDuck {
//     fly(): void {
//         console.log("VidesiDuck flies at 20kmph");
//     }
// }
// class SmartDuck extends PolyDuck {
//     fly(): void {
//         console.log("SmartDuck flies at 50kmph");
//     }
// }
// function makeDuckFly(duck: PolyDuck): void {
//     duck.fly();
// }
// makeDuckFly(new DesiDuck());
// makeDuckFly(new VidesiDuck());
// makeDuckFly(new SmartDuck());
//=----------------------------------------------------------------------------------------------------------------------------------
//Question 2- acccess modifier exploration
var User = /** @class */ (function () {
    function User(name, role) {
        this.orgCode = "DuckCorp";
        this.name = name;
        this.role = role;
    }
    User.prototype.introduce = function () {
        console.log("I am ".concat(this.name, " from ").concat(this.orgCode));
    };
    return User;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getRole = function () {
        console.log(this.role); // ✅ Protected: accessible in subclass
    };
    return Manager;
}(User));
var user = new User("Daffy", "Employee");
user.introduce();
var manager = new Manager("Daffy", "Manager");
manager.getRole();
//Error: Property 'orgCode' is private and only accessible within class 'User'
// console.log(user.orgCode); 
