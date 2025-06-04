import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counterAction";

function Counter(){
   
   const count= useSelector((state)=>state.counter.count)
   const dispath= useDispatch(); 
   
   return(

        <>
        <h2>count: {count}</h2>
        <button onClick={()=>dispath(increment)} > Incre</button>
        <button onClick={()=>dispath(decrement)}  >Decre</button>
        
        
        
        </>
    )
}
export default  Counter;