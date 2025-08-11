interface IPaymentStrategy{
    pay(amount:number):void;

    validateDetails(details:object):boolean;
}

//Concerte fns
class CreditCardPayment implements IPaymentStrategy{
    validateDetails(details: any): boolean {
            return (
                typeof details.cardNumber=== "string" && details.cardNumber.length===16 &&
                typeof details.expiryDate === "string" && 
                details.expiryDate.length>=4 && typeof details.cvv ==="string"&& details.cvv.length===3
            );
    }

    pay(amount:number):void{
        const total= amount+amount*0.015//1.5%fee
        console.log("Paid 5 rupee via credit card wih 1.5% fee");
    }
}

class PayPalPayment implements IPaymentStrategy{
    validateDetails(details: any): boolean {
        return typeof details.email ==="string"&& details.email.includes("@");
    }
    pay(amount:number):void{
        const total= amount+amount*0.025
        console.log("paid 5rupee via Paypal inc 2.5% fee");

    }
}
class CryptoPayement implements IPaymentStrategy{
    validateDetails(details: any): boolean {
        return typeof details.walletAddress==="string" && details.walletAddress.length>10;

    }
    pay(amount:number):void{
        const total= amount+50;
        console.log("Paid 5 rupees via crypto incl 50rupee feee");
    }
}
class PaymentProcesssor{
    private strategy :IPaymentStrategy| 
    null=null;
    setStrategy(strategy:IPaymentStrategy){
        this.strategy=strategy;
    }
    processPayement(details:object ,amount:number){
        if(!this.strategy){
            console.log("no payment method selected");
            return;
        }
        if(this.strategy.validateDetails(details)){
            this.strategy.pay(amount);

        }else{
            console.log("payment details validation failed");
        }
    }
}

const processor = new PaymentProcesssor();
//Pay with credit Card
processor.setStrategy(new CreditCardPayment());
processor.processPayement(
    {cardNumber:"123456789012345",
        expirydate:"12/26",cvv:"123"
    },1000
);
//switch to paypal
processor.setStrategy(new PayPalPayment());

processor.processPayement({
    email:"Invalid-email.com"
},1500);
//swict to crypto
processor.setStrategy(new CryptoPayement());
processor.processPayement(
    {walletAddress:"Dwrocno[p!6aasna#$"},2000
);
