// let obj={
//   name:{
//     UserName:[1,2,3,4,5,6],
//   },
//   age:{
//     ages:[22,34,11],
//   },
//  bloodGroup:{
//    groups:["A","B","O"],
//  },
// }
// console.log(obj.name);


//hoisting 
// print();

// function print(){
//     console.log("hellow world")
// }


///varibales example of hoisting 
// console.log(a);
// var a="ricky";

// myname="ricky";
// console.log(myname);
// var myname;

//fuinction expressions  fuction is encapusolated within a vvaribale
// newFun();
// let newFun= function(){
//     console.log("i am nw funciton");
// }
// Hoisting takes place in the local scope as well
// function doSomething(){
//   x = 33;
//   console.log(x);
// var x;
// }

// let arr=["Masai", "School","assignment", "problem", "media", "upload"];
// let newarr= arr.filter((el)=>{
//   let n= el.length;
//   if(el[0]=="a" || el[n-1]=="a"){
//     return el;
//   }
// });
// console.log(newarr);
//Reverse array:
// let arr=[1, 2, 2, 3, 4, 4, 5];

// let j=arr.length-1;
// for(let i=0;i<j;i++ ,j--){
//     [arr[i], arr[j]] = [arr[j], arr[i]]; 
   
// }
// console.log(arr);

//remove duplicates from array
// let arr=[1, 2, 2, 3, 4, 4, 5];
// let n= arr.length;
// let j=1;
// for(let i=1;i<n;i++){
//   if(arr[i]!=arr[i-1]){
//     arr[j]=arr[i];
//     j++;
//   }
// }
  
// console.log(arr);  


//second highset num in array
let arr= [1, 2, 2, 3, 3, 3]