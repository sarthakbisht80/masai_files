import { Oberserver } from "../order/Observer";
import {Order} from "../order/Order";

export class CustomerDisplay implements Oberserver{
    constructor(private id :string){

    }
    update(order: Order): void {
        console.log(`[Display
            ${this.id}] Order ${order.id} is now ${order.getStateName()} `)
    }
}