import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const Increment=()=>{
    setCount(prev=>prev+1);
  }
  
  const Decrement=()=>{
    setCount(prev=>prev-1);
  }
  const Reset=()=>{
    setCount(0);
  }
  return (
    <>
 
    </>
  )
}

export default App
