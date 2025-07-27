class person{
name:string;
age:number;

constructor(name:string,age:number){
    this.name=name;
    this.age=age;
}

greet():string{
    return `hellow my name is ${this.name} and i am ${this.age} years old`;
}
isAdult(age:number):boolean{
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}
}
const person1= new person("Ricky",22);//creating person 1
console.log(person1.greet()) ;//cheking the name and age 
console.log(person1.isAdult(person1.age));

const person2= new person("Krishna",18);
