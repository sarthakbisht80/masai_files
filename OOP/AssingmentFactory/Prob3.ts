class Car {
    readonly brand: string;
    readonly engine: string;
    readonly color: string;
    readonly sunroof: boolean;
    readonly automaticTransmission: boolean;

    constructor(builder: CarBuilder) {
        this.brand = builder.brand!;
        this.engine = builder.engine!;
        this.color = builder.color!;
        this.sunroof = builder.sunroof;
        this.automaticTransmission = builder.automaticTransmission;
    }

    toString(): string {
        return `Car[brand=${this.brand}, engine=${this.engine}, color=${this.color}, sunroof=${this.sunroof}, automaticTransmission=${this.automaticTransmission}]`;
    }
}

class CarBuilder {
    brand?: string;
    engine?: string;
    color?: string;
    sunroof: boolean = false;
    automaticTransmission: boolean = false;

    setBrand(brand: string): this {
        this.brand = brand;
        return this;
    }

    setEngine(engine: string): this {
        this.engine = engine;
        return this;
    }

    setColor(color: string): this {
        this.color = color;
        return this;
    }

    setSunroof(sunroof: boolean): this {
        this.sunroof = sunroof;
        return this;
    }

    setAutomaticTransmission(auto: boolean): this {
        this.automaticTransmission = auto;
        return this;
    }

    build(): Car {
        if (!this.brand || !this.engine || !this.color) {
            throw new Error("Brand, engine, and color must be set before building the car.");
        }
        return new Car(this);
    }
}


const myTesla = new CarBuilder()
    .setBrand("Tesla Model S")
    .setEngine("Electric")
    .setColor("Black")
    .setSunroof(true)
    .setAutomaticTransmission(true)
    .build();

console.log(myTesla.toString());
