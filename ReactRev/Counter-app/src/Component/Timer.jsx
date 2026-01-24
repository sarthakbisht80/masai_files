import React from 'react'
import { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const Timer = () => {
  const [seconds,setSeconds]= useState(0);
  const [isStart,SetIsStart]= useState(false);
  
  useEffect(()=>{
    let count;
    if(isStart===true){
      count= setInterval(()=>{
        setSeconds(prev=>prev+1);
      },1000);
    }
  return ()=> clearInterval(count);

  },[isStart]);
  return(
    <>
      <h2>{seconds}</h2>
      <button onClick={()=>SetIsStart(true)}>Start Timer</button>
      <button onClick={()=>SetIsStart(false)}>Stop</button>
    </>
  )
}

export default Timer