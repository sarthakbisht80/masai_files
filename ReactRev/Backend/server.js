const express= require("express");
const fs= require("fs");
const dotenv= require("dotenv")
const connectTODB= require("./Config/config");
dotenv.config();
const UserRouter = require("./routes/UserRoutes");
const protect= require("./Middleware/Middle");

const app= express();
connectTODB();
app.use(express.json());

app.use('/test',(req,res)=>{
    res.json({msh:"test route"});

})
//Reading file 

// app.use("/read",(req,res)=>{
//     fs.readFile("./output.txt","utf-8",(err,data)=>{
//         if(err){ 
//           return res.status(400).json({msg:" error reading file"});
//         }
//         res.json({msg:"data is :",data});
//     })
// })

// reading using fs.readFileSync





// app.use("/read",(req,res)=>{
//   const data=fs.readFileSync("./output.txt","utf-8");
//   res.json({msg:"data",data});
// })

 app.use("/api",UserRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/protect",protect, (req,res)=>{
        res.json({msg:"yes"});
})