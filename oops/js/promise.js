const mypromse = new Promise((resolve,reject)=>{
    let sucess;
    if(sucess){
        resolve("resolved");
    }
    else{
        reject("rejected");
    }
});
mypromse.then(result=>{
    console.log("Sucesss",result);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("promse finished");
})