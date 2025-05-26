import React, { useState } from "react";
function Toogle({label}){


    const [state,setstate]= useState(label);
    function OnBtn(){

        setstate("On");
        
    }
    function OffBtn(){
        setstate("OFF")
    }
    
    return(
        
        <>

        <button onClick={OnBtn}> on </button>
        <h2 style={{
          color:state=="On"?"green":"red"
        }}> {state}</h2>
        <button onClick={OffBtn}> Off </button>
        </>
    )
}
export default Toogle;
