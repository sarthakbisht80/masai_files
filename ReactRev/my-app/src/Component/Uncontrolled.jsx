import { useRef } from "react";

import React from 'react'

const Uncontrolled = () => {
        const user= useRef();  
   
        const handleSubmit=(e)=>{
                e.preventDefault();
                const userValue= user.current.value;
                console.log(` ${userValue} `);
                user.current.value="";  
            }

  return (
    <>
    <h2>Uncontrolled</h2>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" ref={user}  placeholder="ENter yoiur name"/>
     <br />
   
    
        <br />      
        <button type="submit"> Submit </button>
      </form>
    </>
  )
}

export default Uncontrolled;