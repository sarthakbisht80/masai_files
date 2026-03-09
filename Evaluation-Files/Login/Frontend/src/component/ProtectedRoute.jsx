import React from 'react'
import { isAuthenticated } from '../../utils/auth'
import{Naviagte} from "react-router-dom"
const ProtectedRoute = (children) => {
  if(!isAuthenticated()){
    return <Naviagte to="/login"/>
  }
    return children;
}

export default ProtectedRoute