const fs= require("fs");
const path= "./tasks.json"
//read write file operations

function readfile(){
    const data= fs.readFileSync(path,"utf-8");
    return JSON.parse(data.tasks);
}
function writefile(tasks){
    fs.writeFileSync(path,JSON.stringify({tasks},null,2),"utf-8");
}
module.exports={readfile, writefile};