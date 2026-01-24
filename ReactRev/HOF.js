const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob",   age: 17, email: "bob@example.com"   },
  { name: "Carol", age: 30, email: "carol@example.com" },
  { name: "Dave",  age: 22, email: "dave@example.com"  },
  { name: "Eve",   age: 19, email: "eve@example.com"   }
];

// const filtered = users.filter((el)=>{
//     return el.age<=22;
// });
// console.log(filtered);

//  const sortedAsc= users.sort((a,b)=>a.age-b.age);
//  console.log(sortedAsc);

// Ascending Order Alphabetically :

// const NameOnly= [...users].sort((a,b)=>a.name.localeCompare(b.name));
// console.log(NameOnly);

// Desc order alphadbeticlaly :

// const Desc= users.sort((a,b)=>b.age-a.age);
// console.log(Desc);

// const DescAlphabetically= users.sort((a,b)=>a.name.localeCompare(b.name));
// console.log(DescAlphabetically);

// // const UserExist= users.some(el=>el.email==="dave@example.com")
// // console.log(UserExist);


// // console.log(users);
// // Arrays


// 2. **Find the second highest number in a given array**
//     - **Sample Input:** `[10, 5, 8, 20, 20]`
//     - **Expected Output:** `10`

// function Second(nums){

//         let first=-Infinity;//smallest el
//         let second=-Infinity;
        
//     for(let i=0;i<nums.length;i++){
//         let el=nums[i]; //captures elements of array
//          if(el> first){
//             second=first;
//             first=el;
            
//             // console.log(first);
//          }
//          else if( second < el  && el <first){
//             second=el;
//          }
//     }
//     return second === -Infinity ? null: second;

// }
// console.log(Second([10,5,8,20,20]));

// //valid Pallindrom 

// // n="Tinin";
 
// // const user = {
// //   name: "Alice",
// //   getName:()=>{
// //     console.log(this.n);
// //   }
// // };

// // user.getName();

// function Ltranversal(N){
  
//     for(let i=1;i<N;i++){

//       console.log("*");
//     }
//     let notom="";
//     for(let j=0;j<N;j++){
//         notom+= "* ";
//     }
//     console.log(notom);
    
// }
// Ltranversal(5);

//  INverted L
// function INverted(N){
//   let temp="";
//     for(let i=N;i>0;i--){
//       temp+="* "
//         }
//         console.log(temp);
      
//         for(let i=1;i<N;i++){
//           console.log("*");
//         }
// }
// INverted(5);

// function Fact(N){
  
//     let fact=1;

//     while(N>0){
//         fact= fact*N;
//         N--;
//     }
//     console.log(fact);
// }
// Fact(3);