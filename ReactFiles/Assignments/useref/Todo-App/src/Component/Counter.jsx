import React from "react";
import { useReducer } from "react";

function Counter(){
let initialVal={
    count:0,
}

    function reducer(state,action){
         switch(action.type){
            case 'Increment':
                return {count:state.count+1};

            case 'Decrement' :
                return {count:state.count-1}                
                case 'default':
                return state;
         }
    }

    const [val,dispatch] =useReducer(reducer,initialVal);


    return(
        <>
            <p>{val.count}</p>
            <button onClick={()=>dispatch( {type:'Increment'})} > Incre</button>
          <button disabled={val.count==0} onClick={()=>dispatch({type:'Decrement'})} >Decremnt</button>
            </>
    )
}
export default Counter;
