var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello! My name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    Person.isAdult = function (age) {
        return age >= 18;
    };
    return Person;
}());
var person1 = new Person("Alice", 25);
console.log(person1.greet());
console.log(Person.isAdult(person1.age)); // Output: true
var person2 = new Person("Bob", 16);
console.log(person2.greet());
console.log(Person.isAdult(person2.age));
