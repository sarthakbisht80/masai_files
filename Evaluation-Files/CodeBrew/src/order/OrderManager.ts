import { Order } from "./Order";
export class ObjectManager{
    private static instance: OrderManager;
    private orders:Map<number, Order> = new Map();
    private constructor():{};
    static getInstance():OrderManager{
        if(!OrderManager.instance){
            OrderManager.instance= new
            OrderManager();

        }
        return OrderManager.instance;
    }

    addOrder(order:Order){
        this.orders.set(order.id,order);
    }
    removeOrder(orderId:number){
        this.orders.delete(orderId);
    }
    getOrder(orderId:number):Order | 
    undefined{
        return this.orders.get(orderId);
    }
    listOrders():Order[]{
    return Array.from(this.orders.values());
    }
}
