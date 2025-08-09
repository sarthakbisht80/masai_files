class africanDuck{
    swim():void{
        console.log("i know swimming");

    }
    sound():void{
        console.log("FUck Fuck");

    }
}

//duck is child class after extendig its parent IndianDuck it will
//get all the properties of parent class

class TanzaniaDuck extends africanDuck{


maar():void{
    console.log("maar amardrchod");
}
}
 let obj= new TanzaniaDuck();
 obj.swim();
 obj.maar();