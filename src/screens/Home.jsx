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
    <br /> <br />
    <div style={{float:"right", alignItems:"center", flex:1, display:"flex",justifyContent:"space-between",width:"100vw"}}>  
    <img src="https://momcozy.com/cdn/shop/files/20241026MOMCOZY-1200-1498-h_-head.jpg?v=1732953745&width=600"></img>
    <h1 >SnuggleBugs care, the best promise to babies</h1>
    <p></p>
    </div>
    </div>

  )
}

export default Home
