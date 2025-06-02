import React, { useReducer } from "react";

const initialState={
    count:0,
};

const reducer=(state,action)=>{
   switch(action)
    {
        case "Increment":
            return  {count: state.count +1}
        
        case "Decrement":
            return  {count: state.count -1} 

        case "Default":
            return {count: state.count=0} 
        
            default :
            return state;
        
        }

}
function Counter(){
  
     const [state,dispatch] = useReducer(reducer,initialState);

    return(
        <>
        <p>Count: {state.count}</p>
        <button onClick={()=>dispatch("Increment")} >Incremnet</button>
        <button disabled ={state.count==0} onClick={()=>  dispatch("Decrement") }>Decrement</button>
        <button onClick={()=>dispatch('Default')} > Reset </button>
        </>
    )
}
export default Counter;