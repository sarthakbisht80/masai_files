import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/Registration'

function App() {

  return (
    <>
     <LoginForm/>
     <RegisterForm/>
    </>
  )
}

export default App
