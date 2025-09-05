
abstract class Bird {
  abstract eat(): void;
}

interface Flyable {
  fly(): void;
}


class Sparrow extends Bird implements Flyable {
  eat(): void {
    console.log("Sparrow eating...");
  }

  fly(): void {
    console.log("Sparrow flying...");
  }
}


class Ostrich extends Bird {
  eat(): void {
    console.log("Ostrich eating...");
  }
}

// Usage
const birds: Bird[] = [new Sparrow(), new Ostrich()];

for (const bird of birds) {
  bird.eat();
  // Only call fly() if it's Flyable
  if ("fly" in bird) {
    (bird as Flyable).fly();
  }
}
