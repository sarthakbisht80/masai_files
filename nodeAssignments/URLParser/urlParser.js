
const urlModule= require("url");

function UrlParser(FullUrl){
    const myUrl=  urlModule.parse(FullUrl,true);
return{
    hostname:myUrl.hostname,
    pathname:myUrl.pathname,
    query:myUrl.query
};
 
}
module.exports= UrlParser;