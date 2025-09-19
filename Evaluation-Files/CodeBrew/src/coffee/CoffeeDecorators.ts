import { Coffee } from "./coffee";
 export abstract class CoffeeDecorator implements Coffee{
    protected coffee :Coffee;
    constructor( cofee:Coffee){
        this.coffee=cofee;

    }
    abstract getCost():number;
    abstract getDescription(): string;
 }

//decorators
export class Milk extends CoffeeDecorator{
    getCost(): number {
        return this.coffee.getCost()+0.5;

    }
    getDescription(): string {
        return this.coffee.getDescription()+", Milk";
    }
 }

 export class Caramel extends CoffeeDecorator{
    getCost(): number {
        return this.coffee.getCost()+0.7;

    }
    getDescription(): string {
        return this.coffee.getDescription()+", Caramel";
    }
 }

 export class WhippedCream extends CoffeeDecorator{
    getCost(): number {
        return this.coffee.getCost()+0.8;
    }
    getDescription(): string {
        return this.coffee.getDescription()+", Whipped Cream";
    }
 }
