import { useState } from 'react'

import './App.css'
import ChildC from './Components/ChildC';
import UserContext from './Context/User';
import ChildB from './Components/ChildB';
import ChildA from './Components/ChildA';
import Calendar from './Components/Calender';

function App() {

  const [user,setUser]= useState("Ishaan");
  return (
    <>
{/* 
  <UserContext.Provider value={user}>
        <ChildB/>
    </UserContext.Provider> */}
  <Calendar/>
    </>
  )
}

export default App;
