import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Component/Child';
import Uncontrolled from './Component/Uncontrolled';

function App() {
  const [count, setCount] = useState("RIcky");

  return (
    <>
    <Child count={count}/>
    {/* <h2>HTML CONtrolled FORM</h2>
    <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} />
   <h2>{count}</h2> */}
    {/* <Uncontrolled/> */}
    </>
  )
}

export default App
