import React, { useContext } from "react";
import { UserContext } from "../UserContext";


function ToogleTheme(){
const name= useContext(UserContext);

return(
<>
<h2>Hellow , CUrrent theeme is {name}.</h2>
</> 
)
}
export default ToogleTheme;
