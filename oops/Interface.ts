interface Printable{
    print():void;

}
class Doc implements Printable {
  print(): void {
    console.log("Printing Document...");
  }
}
class Photo implements Printable {
    print(): void {
        console.log("Printing Phots....")
    }
}

const doc = new Doc();
const pic= new Photo();

const Printables: Printable[]=[doc,pic];

Printables.forEach(item=>item.print());