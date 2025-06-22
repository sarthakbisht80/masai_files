const  boxen= require("boxen");
console.log(boxen("I am using my first external module",{title:"Hurray !",titleAlignment:"center"}));

console.log("Classic Style");

console.log(boxen(" Ricky ",{padding:1,margin:1,textAlignment:"center",borderColor:"red",borderStyle:"classic"}));
console.log("singleDouble");
console.log(boxen(" Ricky ",{padding:1,margin:1,textAlignment:"center",borderColor:"red",borderStyle:"doubleSingle",backgroundColor:"black"}));

console.log("ROund");

console.log(boxen(" Ricky ",{padding:1,margin:1,textAlignment:"center",borderColor:"red",borderStyle:"round",backgroundColor:"black"}));
