import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from '@mui/icons-material'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        </Routes> 

      </div>
      
    </>
  )
}

export default App
