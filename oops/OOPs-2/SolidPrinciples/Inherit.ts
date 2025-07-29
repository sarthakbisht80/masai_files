// Liskov Substitution Principle (LSP)?
// "Objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of the program."

interface Flyable {
  fly(): void;
}

class Bird {
  // general bird properties or behaviors
}

class Eagle extends Bird implements Flyable {
  fly(): void {
    console.log("Flying...");
  }
}

class Ostrich extends Bird {
  // No fly method — because it doesn't fly
}

const eagle= new Eagle();
eagle.fly();

const ostrich= new Ostrich();
// ostrich.fly()// cannt allowed