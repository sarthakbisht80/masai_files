const os = require("os");

function getSystemInfo(){
    const cpus= os.cpus();
console.log("System Information --");

console.log("CPU s",cpus);
// console.log("")
// console.log("")
// console.log("")
// console.log("")
}

module.exports=getSystemInfo;
