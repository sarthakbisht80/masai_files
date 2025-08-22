class car{
    //varibales// properties of the class
    brand:string;
    model:string;
    year:number;

    //constructor to initialize the object of the class
    constructor(brandName:string,model:string, year:number){
        this.brand = brandName;
        this.model=model;
        this.year=year;
    }
    display():void{
        console.log(`Brand name is ${this.brand} model ${this.model} manufactured in ${this.year}`);

    }


}



//creating object of vlass
const myCar = new car('Toyota', 'Camry', 2023);

myCar.display();