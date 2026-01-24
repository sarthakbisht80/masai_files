const express= require("express");
const PORT=3007;
const fs= require("fs");
const app = express();
const path= require("path")
app.use(express.json());//middleware

const os= require("os");


app.get("/home",(req,res)=>{
    
  // console.log("os type-",os.type());

//  res.json({msg:"Home page"})
res.send("<h2>this is Home page</>h2")

})

app.get("/data",(req,res)=>{
 let data=fs.readFileSync("output.txt","utf-8");
console.log(data)
res.json({msg:"data is ",data});
})


// fs.writeFileSync("output.txt", "Hello, this is written by Node.js!");
// console.log("File written successfully!");

//route for users data



// fs.readFile("output.txt","utf-8",(err,data)=>{
//   if(err){
//     console.log(err);
//     return ;
//   }
//   else{
//    console.log(data);
//   }
// })




app.listen(PORT,()=>{
  console.log(`App runs on port ${PORT}`);
})