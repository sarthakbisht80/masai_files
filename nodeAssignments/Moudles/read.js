const fs= require("fs");

function readFile(){

const data= fs.readFileSync("./data.txt","utf-8");
console.log(data);
return data;

}
readFile();
module.exports=readFile;
