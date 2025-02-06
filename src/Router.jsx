import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Product from './Screens/Product'
import Category from './Screens/Category'
import Cart from './Screens/Cart'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router
