const fs= require("fs");


function ReadContent(){

    const data= fs.readFileSync("./data.txt","utf-8");
    return data;

}

module.exports=ReadContent;
