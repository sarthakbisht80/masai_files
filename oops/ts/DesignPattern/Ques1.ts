class Engine {
    start(): void {
        console.log("Engine started");
    }
}

class Car {
    engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    drive(): void {
        this.engine.start();
        console.log("Car is driving");
    }
}

const engine = new Engine();
const car = new Car(engine);
car.drive();
