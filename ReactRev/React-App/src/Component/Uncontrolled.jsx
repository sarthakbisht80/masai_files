import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const Uncontrolled = () => {
    const inputRef= useRef();
    
  useEffect(()=>{
            inputRef.current.focus();
  },[])
    return (
   <>
        <h2>Wleomce to UNcontrolled form</h2>
        <button ref={inputRef}></button>
        <input type="text" placeholder='enter value here' />
        
   </>
  )
}

export default Uncontrolled