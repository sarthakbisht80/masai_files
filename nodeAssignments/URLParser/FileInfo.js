const  path= require("path"); //path mdoule:

function Filefunc(filepath){
    
return{
    fileName:path.basename(filepath),
    extension:path.extname(filepath),
    directory:path.dirname(filepath),
};
};
    

module.exports= Filefunc;


