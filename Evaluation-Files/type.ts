

// class shape{
//     public name:string;
//     constructor(name:string){
//         this.name=name;

//     }
//     getName():string{
//         return this.name;
//     }
// }
// class Rectangle extends shape{
//     public height:number;
//     public width:number;
//     constructor(width:number, height:number){
//        super('Rectangle');
//         this.width= width;
//         this.height=height;
//     }
//     area():number{
//         return this.height * this.width;
//     }

// }

// const obj= new Rectangle(12,10);
// console.log(obj.getName());
// console.log(obj.area());





// encapulsation

// class animal{
//     private breed:string;

//     constructor(breed:string){
//         this.breed=breed;

//     }

//     getBreed(name:string){
//         console.log(`name of breed is ${name}`);
//     }

// }

// let object= new animal("dog");

// object.getBreed("German shpeherd");


//Inheritance
//  class animal{
//     getData():string{
//        return "i am animal";
//     }
//     }

//     class dog extends animal{
//        getdog():string{
//         return("i am dog")
//        }
//     }

// let obj= new dog();
//  console.log("i am function of child class",obj.getdog());
//  console.log(obj.getData());


//polymorphism\

class Bank{
    public balance:number;
    
    constructor(amount:number){
        this.balance=amount;
    }np
        getbalance():void{
            console.log(  `curr balance is ${this.balance}`);
        }
}
class Sbi extends Bank{
    constructor(amount:number){
        super(amount);
    }
    getbalance(): void {
        console.log(" i am sbi");
    }
}
  const obj= new Bank(12000);
  const sbiobj= new Sbi(1000);
  sbiobj.getbalance();
  obj.getbalance();