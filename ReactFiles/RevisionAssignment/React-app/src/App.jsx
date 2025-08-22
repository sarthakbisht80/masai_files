import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'



function App() {
 const [count,setCount]= useState(0);
 const [text,setText]= useState("");

const Calculation = (num)=>{
  console.log("calculation running");
  let result=0;

  for(let i=0;i<1000000;i++){
    result+=num;
  }
  return result;
}

const memoizedvalue= useMemo(()=>
Calculation(count,[count])
)

  return (
    <>
    <div>

    <h2>Count :{count}</h2>

    <button onClick={()=>setCount(count+1)}>Incr</button>
    <h2> Resuilt :{memoizedvalue}</h2>

    <input type='text'
    placeholder='type your input'
    value={text}
    onChange={(e)=>setText(e.target.value)}
    />

    </div>

   
    </>
  )
}

export default App
