import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './screens/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar></Navbar>
       <Routes>
       <Route path="/" element={<Home/>}/>
      
        </Routes> 

        
      </div>
      
    </>
  )
}

export default App
