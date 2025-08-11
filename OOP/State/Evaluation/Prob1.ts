abstract class CourseSubscrption{
abstract  getCost(): number;

abstract  getFeatures():string[];


}
class BasicSubcription extends CourseSubscrption{
    getCost(): number {
        return 499;
    }
    getFeatures(): string[] {
        return["Access to all basic Courses"];
    }

}

//decorator
abstract class SubscriptionDecorator extends CourseSubscrption{
    protected subscription: CourseSubscrption;

    constructor(subscription:CourseSubscrption){
        super();
        this.subscription=subscription;
    }
}
//certificate addon

class CertificateAddon extends SubscriptionDecorator{
    getCost(): number {
        return this.subscription.getCost()+200;
    }
    getFeatures(): string[] {
        return [...this.subscription.getFeatures(),"Official certificate of Completion"];
    }
}

class DoubtSupportAddon extends SubscriptionDecorator{
    getCost(): number {
        return this.subscription.getCost()+300;

    }
    getFeatures(): string[] {
        return [...this.subscription.getFeatures(),"24*7 Doubt support via chat"];
    }
}

class MentorAccessAdon extends SubscriptionDecorator{
    getCost(): number {
        return this.subscription.getCost()+500;
    }
    getFeatures(): string[] {
        return [...this.subscription.getFeatures(),"Weeekly 1on1 mentor Sessions"];

    }
}
class PromotionalBundle extends SubscriptionDecorator{
    getCost(): number {
        let totalCost=this.subscription.getCost();
        if(this.hasDoubtSupport() && this.hasMentorAccess()){
            totalCost=totalCost* 0.85;

        }
        return totalCost;
    }

    getFeatures(): string[] {
        return this.subscription.getFeatures();
    }
    private hasDoubtSupport():boolean{
        let current:CourseSubscrption=this.subscription;
        while(current instanceof SubscriptionDecorator){
            if(current instanceof DoubtSupportAddon) return true;

            current= (current as SubscriptionDecorator).subscription;
        }
        return false;
    }
    private  hasMentorAccess():boolean{
        let current: CourseSubscrption=this.subscription;
        while(current instanceof SubscriptionDecorator){
            if(current instanceof MentorAccessAdon) return true;
            current=(current as SubscriptionDecorator).subscription;
        }
        return false;
    }
}


const sub1= new CertificateAddon(new BasicSubcription());
console.log("Cost",sub1.getCost());
console.log("features",sub1.getFeatures());

const sub2= new PromotionalBundle(
    new MentorAccessAdon(
        new DoubtSupportAddon(
            new CertificateAddon(
                new BasicSubcription()
            )
        )
    )
);
console.log("cost",sub2.getCost());
console.log("Festures",sub2.getFeatures());