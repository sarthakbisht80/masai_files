import React from "react";
import{ useSelector,useDispatch} from 'react-redux';
import { decrement, increment } from "./action";

const Counter=()=>{

    const Count= useSelector((state)=>state.count)
    const dispatch= useDispatch();
    return (
        <>
       <h1>Counter:{Count}</h1>
       <button onClick={()=> dispatch(increment())} >Inc</button>
       <button onClick={()=>dispatch(decrement())} disabled={Count==0} >Dec</button>
        </>
    )
}
export default Counter;