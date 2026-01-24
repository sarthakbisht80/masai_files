import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Controlled from './Component/Controlled';
import FocusInput from './Component/Ref';
import Uncontrolled from './Component/Uncontrolled';
import Counter from './Component/Counter';
import Card from './Component/Comp/Card';
import Kaka from './Component/Kaka';
import ChildB from './Component/Comp/ChildB';

function App() {
    const [name,setName]= useState("");
  return (
      <>
     {/* <Card name="Ricky"/> */}
     <FocusInput/>
        </>
     
    )

}
    

export default App;
