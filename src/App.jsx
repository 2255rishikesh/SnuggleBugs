import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Product from './screens/Product'
import NewNav from './NewNav'
function App() {
  const [count, setCount] = useState(0)
    
  return (
      <div style={{margin:"-10px"}}>
    
   <NewNav/>
   <Navbar></Navbar>
   
 
      </div>
  )
}

export default App
