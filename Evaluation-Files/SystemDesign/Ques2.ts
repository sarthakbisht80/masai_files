//susbuscriber interface
interface Subscriber{
    update(postTitle:string):void;

}
//blog class

class Blog {
    private subscribers:Subscriber[]=[];

    subscribe(subscriber:Subscriber):void{
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber:Subscriber):void{
        this.subscribers=this.subscribers.filter(sub=> sub !== subscriber);
    }
    publish(postTitle:string):void{
        for(const subscriber of this.subscribers){
            subscriber.update(postTitle);
        }
    }
}


//Email Subscribver class
class EmailSubscriber implements Subscriber{
    update(postTitle: string): void {
        console.log(`Email : new blog post titiles ${postTitle}`);
    }
}

class SMSSubscriber implements Subscriber{
    update(postTitle: string): void {
        console.log(`SMS : New blog post titled ${postTitle}`);
    }
}

const blogObj = new Blog();
 
const emailSubscriberObbj= new EmailSubscriber();

const smssubscriberObj=  new SMSSubscriber();

blogObj.subscribe(emailSubscriberObbj);
blogObj.subscribe(smssubscriberObj);

blogObj.publish("Design patterns in java script");
blogObj.publish("Oberserver pattern simplified");