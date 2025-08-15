const express = require("express");

const port=4001;

const app= express();
const getFileInfo = require("./FileInfo");
const UrlParser= require("./urlParser");
app.use(express.json());

// middleware
// request - function (middleware) => validate
//  - response

app.get("/", (req,res)=>{
    res.send("ok")
})

// const validateQuery = (req,res,next)=>{
//     if(JSON.stringify(req.query) == JSON.stringify({})){
//         return res.send("Missing query params");
//     } else next()
// }

// middleware = validation
// middleware = authentication

app.get("/test", (req,res)=>{

    res.send("Test route is running");

})
app.get("/fileinfo",(req,res)=>{
    const {filepath} = req.query;//geting whaterver the file path will after ?

    if(!filepath){
        return res.status(400).json({error:"missin file path"})
    }
    const info= getFileInfo(filepath);
    res.json(info);


})
app.listen(port,()=>{
    console.log(`port started at ${port}`);
})