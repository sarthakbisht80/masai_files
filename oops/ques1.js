class student {
    //constructor to initialize objects
    constructor( name , age , rollNo){
        this.name= name;
        this.age=age;
        this.rollNo=rollNo;
    }
    //function 
    displayDetails() {
    console.log(`Student: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`);
  }

}
//cretaing objects 
const stud1= new student("ricky",22,29);
const stud2= new student("pankaj",23,28);

stud1.displayDetails();
stud2.displayDetails();

