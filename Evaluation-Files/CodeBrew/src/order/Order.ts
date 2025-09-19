import { Coffee } from "../coffee/coffee";
import { PayemetStrategy } from "../payment/Payment";
import { Subject,Oberserver } from "./Observer";
import { OrderState,PendingState } from "./OrderState";

let nextId=1;

export class Order implements Subject{

    public readonly id:number;
    private state:OrderState;
    private  observers:Oberserver[]=[];
    private paid=false;

    constructor(private coffee:Coffee, private payment?:PayemetStrategy){
        this.id=nextId++;
        this.state= new PendingState();
    }
    getCoffeeDesc():string{
        return this.coffee.getDescription();
    }
    getTotal():number{
        return this.coffee.getCost();

    }
    setPaymentStarategy(ps:PayemetStrategy){
        this.payment=ps;
    }

async processPayment():Promise<boolean>{
    if(!this.payment) throw new Error("Payemnet method not set");
    this.paid= await this.payment.pay(this.getTotal());
    return this.paid;
}
    proceed():void{
        this.state.proceed(this);
    }
    cancel():void{
        this.state.cancel(this);

    }
    setState(state:OrderState){
        this.state=state;
    }
    getStateName():string{
        return this.state.name();
    }
    isPaid():boolean{
        return this.paid;
    }
    registerObserver(o: Oberserver): void {
        this.observers.push(o);
    }
    unregisteredObserver(o: Oberserver): void {
        this.observers= this.observers.filter(obs=>obs!==o);
    }
    notifyObservers(): void {
        this.observers.forEach(obs=>obs.update(this));
    }
}