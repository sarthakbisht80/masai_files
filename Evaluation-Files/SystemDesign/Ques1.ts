abstract class animal{
    name:string;

    constructor(name:string){
        this.name=name;

    }
   abstract makeSound():void;
   

}
//subclass 
class dog extends animal{
    makeSound(): void {
        console.log(`${this.name} says woof!`);
    }
}
class cat extends animal{
    makeSound(): void {
        console.log(`${this.name} says Meeau!`);
    }
}
//main Logic

const animals:animal[]=[
    new dog("Buddy"),
    new cat("Whiskers"),
];
for(const ani of animals){
    ani.makeSound();
}