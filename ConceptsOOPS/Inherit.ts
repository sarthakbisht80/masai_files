class Person{

    public name:string;
    public age:number;
    constructor(Username:string,Age:number){

        this.name=Username;
        this.age=Age;
    }

      Introduce(): void {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }

}
class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age); // calling parent constructor
  }


  study(): void {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}
//object creation
const Per1= new Person("RIcky",22);
const Stud1= new Student("Sarthak",22,"12th");
Stud1.Introduce();
