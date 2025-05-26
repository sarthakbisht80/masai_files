import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/counter'
import Toogle from './Components/Toogle'
import ProfileCard from './Components/ProfileCard'

function App() {
 
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
   
   </div>
 
   {/* <Counter initialval={0} />
  <Toogle label="Power-Status"/> */}
  <ProfileCard />
    </>
  )
}

export default App
