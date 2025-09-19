import {order} from "./Order";
export interface Oberserver{
    update(order:Order):void;
}
export interface Subject{
    registerObserver(o:Oberserver):void;
    unregisteredObserver(o:Oberserver):void;
    notifyObservers():void;
}