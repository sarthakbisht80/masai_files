const {readFileData,AppendFileData} =require("./fileOperations");


console.log("Initial data is");
readFileData()
setTimeout(()=>{
    AppendFileData();

    console.log("Data after apending the file :",readFileData());
},700);
