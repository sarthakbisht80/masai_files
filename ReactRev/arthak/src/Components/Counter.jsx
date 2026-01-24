import React from "react";

import { useState } from "react";

const Counter = () => {
  const [data,setData]= useState(0);
    return (
    
    <>
     
            <h2>Count value: {data}</h2>
            <button style={{padding:"10px",color:"rebeccapurple",width:"100px" ,gap:"20px"}} onClick={()=>setData(prev=>prev+1)}>+</button>


            <button style={{padding:"10px",color:"rebeccapurple",width:"100px"}} disabled={data<=0} onClick={()=>setData(prev=>prev-1)}>-</button>
            

    </>
  )
}

export default Counter;