import React, {  useEffect, useRef, useState } from "react";


function InputChange(){
let  inputRef= useRef();
    let btnRef=useRef();
const [input,setinput]= useState('');


 const handleClick=()=>{
    
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="green";
    inputRef.current.style.color="red";

    btnRef.current.innerHTML="Focuesd !🎯"
     
 }
 
    return(
        <>
        
        <input
        style={{
            padding:"9px",
            margin:"6px",
            borderRadius:"14px"
        }}
        type="text" ref={inputRef} 
        placeholder="enter text here.."
        onChange={(e)=>setinput(e.target.value)}
        />

        <button onClick={handleClick } >click me</button>
        <h3 ref={btnRef}></h3>
        <p>{input}</p>


        </>


    )
}
export default InputChange;
