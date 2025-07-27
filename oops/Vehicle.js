class Vehicle{
    constructor(brand,speed){
        this.brand= brand;
        this.speed= speed;
    }
    drive(){
        console.log(`Speed is around:${this.speed}Km/hr`);
    }

}
class Car extends Vehicle{

    constructor(brand, speed,fuelType){
        super(brand,speed,fuelType);
        this.fuelType=fuelType;
    }
    refuel(){
        console.log(`Refueling :${this.fuelType}`);
    }

}

const car1= new Car("toyata",120,'Diesal');
car1.drive();
car1.refuel();