import React, { useEffect } from "react";
import { increment, decrement, reset } from "../Features/counterSlice";
  import {useSelector, useDispatch} from 'react-redux';
import { FetchUser } from "../users/usersSlice";

 export default function Counter(){
const count = useSelector((state)=>state.counter.value);


    return(
        <>
     <ul>

     </ul>
        </>
    )
}