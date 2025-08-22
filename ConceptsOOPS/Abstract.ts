// abstract class Animal{
//     abstract name:string;
//     abstract display():number;

// }

// //definedabstract class with no impleneted fucnitons 

// class cow extends Animal{

//     constructor(Name:string){
//      super();   
//     }
// }   


// Interface
interface Shape{
    getArea():number;
    getPerimeter():number;

}

class circle implements Shape{

constructor(public radius:number){}

    getArea() {
        console.log("Area of circle");
        return Math.PI * this.radius*this.radius;
    }
    getPerimeter(): number {
            console.log("Perimeter of circle");
        return Math.PI *2 *this.radius;
    }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  getArea(): number {
 console.log("Area of Rect");
    return this.width * this.height;
  }

  getPerimeter(): number {
    console.log("Perimeter of Rect");
    return 2 * (this.width + this.height);
  }
}
//Array Shape here
const shapes: Shape[]=[
    new circle(7),
    new Rectangle(12,16)
]

shapes.forEach(sh=>{
    
    console.log("Area",sh.getArea()),
    console.log("Perimeter",sh.getPerimeter())
});
