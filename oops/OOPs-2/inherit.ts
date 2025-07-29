//Question 1-

// class Duck{
//     swim():void{
//         console.log(`I now swimming`);
//     }
// }
// class MallardDuck extends Duck{
// //it inheritis the properites of parent clas s as well 
// // so the fucntion swim we can also acces from this clas obj;


// }

// let animal=new MallardDuck();//creting object of Mallardduck class

// animal.swim();





// ----------------------------------------------------------------------------------------



// // Question 2-

// class Bird{
//     fly():void{
//         console.log(`i can fly..`);

//     }
// }
// class Penguin extends Bird{
//     fly(): void {//this child class method ovrrides the fucntion 
//         //in parent class bird 
//         console.log("i cannot fly");

//     }
// }

// //initiating both classs
// let Birdobject = new Bird();//parent class object 
// Birdobject.fly();
// let PenguinObj= new Penguin();//penguin class obejct
// PenguinObj.fly();


//--------------------------------------------------------------------------------------------------------------------

//Question 3

// interface IDuck{
//     swim():void;
//     fly():void;
//     sound():void;

// }
// class ToyDuck implements IDuck{
//     swim(): void {
//         console.log(`cannot float on water..`);

//     }
//     fly(): void {
//         console.log("cannot fly")
//     }
//     sound(): void {
//         console.log("cannot sound");
//     }

// }
// let toy= new ToyDuck();
// toy.fly();
// toy.sound();
// toy.swim();