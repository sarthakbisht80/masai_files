import { Coffee } from "./coffee";

export class Espresso implements Coffee{
    getCost(): number {
        return 2.0;
    }
    getDescription(): string {
        return "Espresso";
    }
}

export class Latte implements Coffee{
    getCost(): number {
        return 3.5;

    }
    getDescription(): string {
        return "Latte";
    }
}
