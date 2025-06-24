const express= require("express");

const PORT=3006;
const app= express();
app.use(express.json());


app.get("/home",(req,res)=>{

    res.send("<h2>Welcome to Home Page.</h2>")
});
app.get('/aboutUS',(req,res)=>{

    res.json({msg:"Welcome to About us"});
});
app.get("/contactUS",(req,res)=>{
    res.json({
         email: "bishtsarthak80@gmail.com",
        phone: "123-456-7890",
        address: "haldwwani Uttrakhand ",
    })
})
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});
app.listen(PORT,()=>{
    console.log(`server stared at ${PORT}`);

})