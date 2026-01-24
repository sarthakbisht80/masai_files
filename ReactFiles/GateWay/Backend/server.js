const express= require("express");
const dotenv= require("dotenv")
const fs= require("fs");


dotenv.config();
const app= express();
app.use(express.json());




app.get("/home",(req,res)=>{
try {
        const d= fs.readFileSync("./data.tt","utf-8");
        res.send(`data is ,${d}`) ; 
} catch (error) {
    console.log(error.messgae);
    res.status(400).send("error loading");
}
        
})
app.listen(process.env.Port,()=>{
    console.log(`App started at port ${process.env.Port}`);
})
