import React from 'react'
import NavBar from '../Components/Navbar'
import './styles/home.css'
import Cardcomponents from '../Components/Cardcomponents'

function Home() {
  return (
    <div>
      <NavBar/>
      <img src="https://momcozy.com/cdn/shop/files/20240914MOMCOZY-first.jpg?v=1732959895&width=1200" className={'header'}/>
       <center><h1>The love laungauge</h1> </center>
    <Cardcomponents id={'ert'} imgurl={"https://momcozy.com/cdn/shop/files/baby-first-2.jpg?v=1728640357&width=400"} title={"High chair"}/>
    </div>

  )
}

export default Home
