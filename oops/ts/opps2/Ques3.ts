
class ToyDuck {
    fly() {
        console.log("Cannot fly");
    }

    sound() {
        console.log("Cannot sound");
    }

    swim() {
        console.log("Can float on water");
    }
}

const toy = new ToyDuck();
toy.fly();   // Output: Cannot fly
toy.sound(); // Output: Cannot sound
toy.swim();  // Output: Can float on water
