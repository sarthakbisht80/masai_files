interface IDuck {
  swim(): void;
  fly(): void;
  sound(): void;
}

// Implement the interface in ToyDuck
class ToyDuck implements IDuck {
  swim(): void {
    console.log("Can float on water");
  }

  fly(): void {
    console.log("Cannot fly");
  }

  sound(): void {
    console.log("Cannot sound");
  }
}

// Test
const duck: IDuck = new ToyDuck();
duck.fly();   
duck.sound(); 