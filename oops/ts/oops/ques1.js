var Student = /** @class */ (function () {
    function Student(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    Student.prototype.displayDetails = function () {
        console.log("Student: ".concat(this.name, ", Age: ").concat(this.age, ", Roll No: ").concat(this.rollNo));
    };
    return Student;
}());
// Creating two instances
var student1 = new Student("Alice", 20, 101);
var student2 = new Student("Bob", 22, 102);
// Calling displayDetails() for each
student1.displayDetails();
student2.displayDetails();
