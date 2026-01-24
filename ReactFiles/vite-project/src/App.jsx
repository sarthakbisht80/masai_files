import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';




function FunctionCounter(){
  const [count,setCount]= useState(0);

  useEffect(()=>{
    console.log("functional comopent monted");
    return ()=>{
      console.log("functionaal component unmounted ")
    }
  },[count]);

  return(
    <>
      <h2>Funtional counter:{count}</h2>
      <button onClick={()=>setCount(count+1)}> Increse </button>
    </>
  )
}





export default FunctionCounter;
