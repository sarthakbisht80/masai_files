interface Coder{
    code():void;//left it empty
}
class Person {

    walk():void{
   console.log("walking");
    }
}
class Developer extends Person implements Coder{

code():void{
console.log("Coding ");
}

}
const obj= new Person();


const dev= new Developer();
dev.code();
dev.walk();