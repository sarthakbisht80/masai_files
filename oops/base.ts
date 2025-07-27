class Base{
    protected username:String;
    constructor(username:string){
        this.username= username;
    }

}
class Admin extends Base{
  showUsername():void{
        console.log(`username is ${super.username}`)
    }
}
const admin= new Admin("Ricu");
admin.showUsername();