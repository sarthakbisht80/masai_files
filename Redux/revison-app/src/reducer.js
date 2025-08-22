// takes current state return new
//  state
import { increment,decrement } from "./action";


const initialState={
    count:0
};

function counterReducer(state=initialState , action)
{
switch(action.type){
    case "INCREMENT":
        return {count:state.count+1}

    case "DECREMENT":
        return {count:state.count>0 ? state.count-1 : 0 }
    default:
        return state;           
}
}
export default counterReducer;