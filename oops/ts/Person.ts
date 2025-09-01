class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }


  greet(): string {
    return `Hello! My name is ${this.name} and I am ${this.age} years old.`;
  }

  static isAdult(age: number): boolean {
    return age >= 18;
  }
}


const person1 = new Person("Alice", 25);
console.log(person1.greet());                 
console.log(Person.isAdult(person1.age));      // Output: true

const person2 = new Person("Bob", 16);
console.log(person2.greet());                 
console.log(Person.isAdult(person2.age));     
