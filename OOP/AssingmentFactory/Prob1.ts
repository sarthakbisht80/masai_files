// Enum for pizza size
enum Size {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

class Pizza {
    readonly size: Size;
    readonly cheese: boolean;
    readonly pepperoni: boolean;
    readonly mushrooms: boolean;

    constructor(builder: PizzaBuilder) {
        this.size = builder.size!;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.mushrooms = builder.mushrooms;
    }

    toString(): string {
        return `Pizza[size=${this.size}, cheese=${this.cheese}, pepperoni=${this.pepperoni}, mushrooms=${this.mushrooms}]`;
    }
}

// Builder class
class PizzaBuilder {
    size?: Size;
    cheese: boolean = false;
    pepperoni: boolean = false;
    mushrooms: boolean = false;

    setSize(size: Size): this {
        this.size = size;
        return this;
    }

    setCheese(cheese: boolean): this {
        this.cheese = cheese;
        return this;
    }

    setPepperoni(pepperoni: boolean): this {
        this.pepperoni = pepperoni;
        return this;
    }

    setMushrooms(mushrooms: boolean): this {
        this.mushrooms = mushrooms;
        return this;
    }

    build(): Pizza {
        if (!this.size) {
            throw new Error("Size must be set before building the pizza.");
        }
        return new Pizza(this);
    }
}

const myPizza = new PizzaBuilder()
    .setSize(Size.LARGE)
    .setCheese(true)
    .setMushrooms(true)
    .setPepperoni(false)
    .build();

console.log("Built pizza:");
console.log(myPizza.toString());
