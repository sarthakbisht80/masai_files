
const fs= require("fs");

const dbpath= "./db.json";

function readTodo(){

    const data= JSON.parse(fs.readFileSync(dbpath,"utf-8"));
    return data;
   
}
function writeTodos(todos){
    fs.writeFileSync(dbpath,JSON.stringify(todos,null,2),"utf-8");

}
module.exports={readTodo,writeTodos};
