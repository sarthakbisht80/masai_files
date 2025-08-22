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
var Person = /** @class */ (function () {
    function Person(Username, Age) {
        this.name = Username;
        this.age = Age;
    }
    Person.prototype.Introduce = function () {
        console.log("Hi, I'm ".concat(this.name, ", and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this; // calling parent constructor
        _this.grade = grade;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, " is studying in grade ").concat(this.grade, "."));
    };
    return Student;
}(Person));
//object creation
var Per1 = new Person("RIcky", 22);
var Stud1 = new Student("Sarthak", 22, "12th");
Stud1.Introduce();
Stud1.study();
