//method Overloading
// class Poly{
//     name:string;
//     age:number;
//  constructor(UName:string,Age:number){
//     this.name=UName;
//     this.age=Age;
//  }
// Prepare(item:number):void;
// Prepare(item:number, quantity:number):void;

// Prepare(item:number, quantity?:number):void{
//     if(quantity==undefined){
//         console.log(`no of items are ${item}`);
//     }
//     else{
//         console.log(`no of items are ${item} and quanitity is ${quantity}`);
//     }
// }

// }
// //method overloadiing
// let Obj= new Poly("Sarthak",22);
// Obj.Prepare(22);
// Obj.Prepare(22,100);



//Method Overriding

class animal{

    makeSound():void{
        console.log("Animal make sound 🫏");
    }

}
class dog extends animal{
    makeSound():void{
        console.log("Dog makes Sound🐶");
    }
}

const objAni= new animal();
const objDog= new dog();
objAni.makeSound();// will print annimal make sound

objDog.makeSound();//will print dog says 

objDog.makeSound();