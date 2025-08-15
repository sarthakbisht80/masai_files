import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import LoginPage from '../Pages/LoginPage'
import ProductDetails from '../Pages/ProductDetails'
import ProductCard from '../Components/ProductCard/ProductCard'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/login' element={<LoginPage/>}/>
  <Route path='/ProductDetails' element={<ProductDetails/>}/>
    <Route path="product/:id" element={<ProductCard/>}/> 
    </Routes>
  )
}

export default AllRoutes;