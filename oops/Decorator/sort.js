//sorteed array removing duplicates
function sortarray(arr){

    let n=1;
    for(let i=1;i<arr.length;i++){
        if(arr[i] !=arr[i-1]){
            arr[n]=arr[i];
            n++;
        }
    }
    console.log("unique el",n);
    return arr.slice(0,n);
}
// arr=[1,1,2,4]
let a=sortarray([1,1,2,4]);
console.log(a);

