const express= require("express");

const app= express();
const PORT=3000;



app.use(express.json());

app.get("/",(req,res)=>{
    res.status(202).send('Welcome');
})

app.get("/home",(req,res)=>{
    res.status(202).send('this is Home page.');
})
app.get("/contactus",(req,res)=>{
    res.status(202).send('Contact us at bishtsarthak80@gmail.com.');
})
app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`);

})