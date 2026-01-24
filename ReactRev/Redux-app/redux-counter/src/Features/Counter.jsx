import React from "react";
import { increment,decrement,reset } from "./CounterSlice";
import  {useSelector,useDispatch} from "react-redux";

export default  function Count(){

        const count = useSelector((state)=>state.Counter.value);
        const dispatch= useDispatch();

        return(
            <>
          
      <h2>Redux Toolkit Counter</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>+ Increment</button>
      <button onClick={() => dispatch(decrement())}>- Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    
            </>
        )
    }