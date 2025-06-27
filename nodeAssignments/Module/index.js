const express = require("express");
const ReadContent= require("./read.js");
const Port=4000;
const app= express();
const os= require("os");


app.use(express.json());


app.get("/test",(req,res)=>{
    res.send("test route is running");

});

app.get("/readFile",(req,res)=>{
        res.send(ReadContent());
})

app.get("/systemDetails",(req,res)=>{
    const  cpu = os.cpus();
    // console.log(details);
    res.json({
        "platform":os.platform(),
        "toalMemory":(os.totalmem()/(1024 ** 3)).toFixed(2),
        "freememory":(os.freemem()/(1024 ** 3)).toFixed(2),
        

    })
})
app.listen(Port,()=>{

    console.log(`server started on port ${Port}`);
})