import React, { useState } from "react";

function Counter({initialval}){
const [count,setcount]= useState(initialval);

    function Incremenet(){
        setcount(prev=>prev+1);
    } 
    function Decrement(){
        if(count>0){
            setcount(prev=>prev-1);
        }
    }
    
    return (
        <>
    <h2>Counter App</h2>
    <p>Count: {count}</p>
    <button onClick={Incremenet}>Incre</button>
    <button onClick={Decrement}  disabled={count===0} >Decre</button>
        </>
        
)

}
export default Counter;