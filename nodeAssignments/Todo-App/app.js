const express= require("express");
const app= express();
const todoRoutes= require("./routes/todoRoute");

app.use(express.json());
app.use("/",todoRoutes);

app.use((req,res)=>{
    res.status(404).send("404 not foound");
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Port started at ${PORT}`);
})