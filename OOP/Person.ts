// class Persons {
//     name:string;
//     intrest:string;

//     intoduce():void{
//         console.log(`my name is ${this.name} and i ave intrest  in $${this.intrest}`);

//     }
//     constructor(name:string, intrest:string){
//         this.name= name;
//         this.intrest=intrest
//     }
//     //this refers to the cuurent instance - memeroy reps -variables with same name


// } 
// let person2= new Persons("ricky","astronomy");
// ///new triggers constructor of that class
// person2.intoduce();

//inheritance


class IndianDuck{
    swim():void{
        console.log("i know swimming");

    }
    sound():void{
        console.log("FUck Fuck");

    }
}

//duck is child class after extendig its parent IndianDuck it will
//get all the properties of parent class

class Duck extends IndianDuck{


}
let duck1= new Duck();
duck1.swim();