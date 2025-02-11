import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Product from './Screens/Product'
import Category from './Screens/Category'
import Cart from './Screens/Cart'
import './Style.css'
import AdminHome from './Screens/AdminHome'
import Home from './Screens/Home'
import Payment from './Screens/Payment'
import Logout from './Screens/Logout'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/category/:categoryId/product/:id' element={<Product />} />
        <Route path='/category/:id' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
