import React from "react";
import { useSelector,useDispatch } from "react-redux";

import { increment,decrement,incrementAsync } from "../redux/action";

const Counter=()=>{
    const count= useSelector((state)=>state.count);
    const dispatch= useDispatch();


    return(
        <>
        <h2>count {count}</h2>
        <button onClick={()=>dispatch(increment())} >Incre</button>
        <button onClick={()=>dispatch(decrement())} >Decre</button>
        <button onClick={()=>dispatch(incrementAsync())} >IncrAffter2Sec</button>
        
        </>
    )
}
export default Counter;
