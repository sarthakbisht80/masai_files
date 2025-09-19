export interface PayemetStrategy{
    pay(amount:number):Promise<boolean>;
}
export class CreditCardPayment implements PayemetStrategy{
    constructor(private cardNumber:string){}

    async pay(amount: number): Promise<boolean> {
        console.log(`processing credit Card of amount $${amount.toFixed(2)}
        using card ${this.cardNumber}`);
        await new Promise(res=> setTimeout(res,200));
        console.log("credid card pay successfully done");
    }

}

export class DigitalWalletPayment implements PayemetStrategy{
    constructor(private walletId :string){}
      async pay(amount: number): Promise<boolean> {
        console.log(`processing digital wallet payment of amount $${amount.toFixed(2)}
        using card ${this.walletId}`);
        await new Promise(res=> setTimeout(res,150));
        console.log("Digital walled payment successfully done");
    }
}


