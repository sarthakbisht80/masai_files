import React from "react";
import{ useSelector,useDispatch} from 'react-redux';
import { decrement, increment } from "./action";

const Counter=()=>{

    const count= useSelector((state)=>state.count)
    const dispatch= useDispatch();
    return (
        <>
       <h1>Counter:{count}</h1>
       <button onClick={()=> dispatch(increment())} >Inc</button>
       <button onClick={()=>dispatch(decrement())} disabled={count==0} >Dec</button>
        </>
    )
}
export default Counter;