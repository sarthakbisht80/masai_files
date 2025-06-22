const fs= require("fs");


function readFileData(){
    try {
        const data= fs.readFileSync("./data.txt","utf-8");
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}
function AppendFileData(){

    try {
        const data= fs.appendFileSync("./data.txt","this is appended data...");
        // console.log(data);
    } catch (error) {
        
        console.log(error);
    }
}

module.exports={readFileData,AppendFileData};

