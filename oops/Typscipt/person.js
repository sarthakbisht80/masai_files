var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        return "hellow my name is ".concat(this.name, " and i am ").concat(this.age, " years old");
    };
    person.prototype.isAdult = function (age) {
        if (age >= 18) {
            return true;
        }
        else {
            return false;
        }
    };
    return person;
}());
var person1 = new person("Ricky", 22);
console.log(person1.greet());
console.log(person1.isAdult(person1.age));
var person2 = new person("Krishna", 18);
