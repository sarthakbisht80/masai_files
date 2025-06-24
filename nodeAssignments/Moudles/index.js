const express= require("express");
const app = express();
const readFile= require("./read");
const PORT=3001;
const os = require("os");


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>This is home page</h1>");
});
app.get("/test",(req,res)=>{
    res.send("Test route is working !");
})

app.get("/readfile",(req,res)=>{
    res.send(readFile());
})

app.get("/systemdetails",(req,res)=>{

res.json({msg:{
    "platform":os.platform(),
    "totalMemory":os.totalmem(),
    "freeMemory":os.freemem(),
    "cpuModel":os.cpus()[0].model,
}});

})

app.listen(PORT,()=>{
    console.log("Server started at port",PORT);
})
