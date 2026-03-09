import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import ProtectedRoute from './component/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>

      <Route path='/dashbaord' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
    }/>
 <Route path='*' element={<Navigate to="/login"/>} />
    </Routes >
    </BrowserRouter>
  )
}

export default App
