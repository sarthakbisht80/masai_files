function isFact(num){
  let fact=1;
  
    if(num<0){
        return ;

    }
  
while(num>0){
    fact= fact*num;
    num--;

}
return fact;
}
module.exports=isFact;