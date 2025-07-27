function sumEvenNum(num:number[]):number{
let sum=0;
for(let key of num){
    if(key %2 ==0){
        sum+=key;
    }
}
return sum;
    
}