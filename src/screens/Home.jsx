import React from 'react'
import NavBar from '../Components/Navbar'
import './styles/home.css'
import Cardcomponents from '../Components/Cardcomponents'
import CategoryComp from '../Components/CategoryComp'
function Home() {
  return (
    <div>
      <NavBar/>
      <img src="https://momcozy.com/cdn/shop/files/20240914MOMCOZY-first.jpg?v=1732959895&width=1200" className={'header'}/>
       <center><h1>The love laungauge</h1> </center>
    <Cardcomponents id={'ert'} imgurl={"https://momcozy.com/cdn/shop/files/baby-first-2.jpg?v=1728640357&width=400"} title={"High chair"}/>
    <br /> <br />
    <CategoryComp/>
    <div style={{display: "flex", justifyContent: "space-between", width: "100vw", alignItems: "center"}}>
    
    <img src="https://momcozy.com/cdn/shop/files/20241026MOMCOZY-1200-1498-h_-head.jpg?v=1732953745&width=600" alt="SnuggleBugs" style={{flex: 1, maxWidth: "50%", height: "auto"}} />
    <div style={{flex: 1, maxWidth: "50%", paddingLeft: "20px", paddingRight: "20px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
    <h1 style={{
        fontSize: "2.5rem", 
        color: "#2a9d8f", 
        fontWeight: "600", 
        lineHeight: "1.3", 
        marginBottom: "20px"
    }}>
        SnuggleBugs care, the best promise to babies
    </h1>
    <p style={{
        fontSize: "1rem", 
        color: "#333", 
        lineHeight: "1.6", 
        fontWeight: "400", 
        textAlign: "justify", 
        marginBottom: "20px"
    }}>
        We focus on safe and caring baby products. We make sure only natural and harmless materials are used and go out of our way to apply strict and high standards of craftsmanship. What's more, we think highly of product designs based on the concept of comfort and user experience.
        To us, nothing is more important than a baby feeling cozy. When a baby is cozy and taken good care of, we believe parents can breathe and relax.
    </p>
    <div style={{
        textAlign: "right",
        marginTop: "20px"
    }}>
        <span style={{
            fontSize: "1.2rem", 
            color: "#2a9d8f", 
            fontWeight: "500", 
            fontStyle: "italic"
        }}>
            Cozy beginnings, happy futures.
        </span>
    </div>
</div>

</div>

    </div>
    

  )
}

export default Home
