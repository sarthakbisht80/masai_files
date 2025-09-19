import { OrderState } from './OrderState';
import {Order} from "./Order";
export interface OrderState{
    proceed(order:Order):void;
    cancel(order:Order):void;
    name():string;

}
export class PendingState implements OrderState{
    proceed(order: Order): void {
        order.setState(new PrepairingState());
    }
    cancel(order: Order): void {
        order.setState(new CancelledState());
        order.notifyObservers();
    }
    name(): string {
        return "Pending";
    }
}
export class PreparingState implements OrderState{
    proceed(order: Order): void {
        order.setState(new ReadyState());
    }
    cancel(order: Order): void {
        order.setState(new CancelledState());
        order.notifyObservers();
    }
    name(): string {
        return "Preparing";
    }
}
export class ReadyState implements OrderState{
    proceed(order: Order): void {
        order.setState(new CompletedState());
        order.notifyObservers();
    }
    cancel(order: Order): void {
        order.setState(new CancelledState());
        order.notifyObservers();
    }
    name(): string {
        return "Ready";
    }
}

export class CompletedState implements OrderState{

    proceed(order: Order): void {}
    cancel(order: Order): void {}
    name(): string {
        return "completed";
    }
}
export class CancelledState implements OrderState{

    proceed(order: Order): void {}
    cancel(order: Order): void {}
    name(): string {
        return "Cancelled";
    }
}