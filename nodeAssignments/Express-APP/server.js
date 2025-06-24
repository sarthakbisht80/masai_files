const express= require("express");
const PORT=3007;
const app = express();

app.use(express.json());

const users=[
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Bob Smith", email: "bob@example.com" }
];
app.get("/users/list",(req,res)=>{

    res.json(users);

})
app.get("/users/get",(req,res)=>{
    res.json(users[0]);
    
})
app.use((req,res)=>{
    res.status(404).send(" 404 Not Found ");

})
app.listen(PORT,()=>{
  console.log("Server Started at 3007");
});

