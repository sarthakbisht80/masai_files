import { Latte } from "./coffee/ConcreteCoffees";
import { Milk,Caramel } from "./coffee/CoffeeDecorators";
import { Order } from "./order/Order";
import { CreditCardPayment } from "./payment/Payment";
import { CustomerDisplay } from "./display/CustomerDisplay";
import { ObjectManager } from "./order/OrderManager";

async function main {
    let coffee= new Latte();
    coffee= new Milk(coffee);
    coffee= new Caramel(coffee);
    console.log("order Created",
    coffee.getDescription());
    console.log("Cost :$",coffee.getCost().toFixed(2))

    //ordder creattion
    const order= new Order(coffee);

    const display= new order.registerObserver(display);
     
    const manager= OrderManger.getInstance();
    manager.addOrder(order);
    order.setPaymentStarategy(new 
        CreditCardPayment("1234-5678-4532")
    );
    await order.processPayment();


    console.log("state:", order.getStateName());
    order.proceed();

    console.log("State:",order.getStateName());
    order.proceed();
    console.log("State:", order.getStateName());
    order.proceed();

    console.log("state", order.getStateName());

}
main().catch(console.error);