import { useEffect, useRef } from "react";
import React from 'react'

const FocusInput = () => {
   const inputRef= useRef();
  
   useEffect(()=>{

      inputRef.current.focus();

   },[]);
  return (
    <>
    <h2>UseRef usecase</h2>
       <input type="text" placeholder="enter your text here " ref={inputRef} />
    </>
  )
}

export default FocusInput;