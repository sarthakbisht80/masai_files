import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";


//this will combine all the reducers
//  we have created so that no need
//  to import frpom going each file to import themin store.js

const rootreducer= combineReducers({
    counter:counterReducer,
    auth:authReducer,

});
export default rootreducer;