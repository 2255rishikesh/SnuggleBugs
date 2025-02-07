import React, { useState } from 'react'
import NavBar from '../Components/Navbar'
import { Button, Typography } from '@mui/material'

function Product() {

<NavBar></NavBar>
const [product,setproduct] = useState({_id:'errt',title:'baby',discriptin:'',price:'',imageurl:"https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/18-nov-2022/492863593_1.jpg"})
const [loading,setloading] = useState(false)


  return (
    <div>

<h2>{product.title}</h2>
<p>{product.discriptin}</p>
<h2>Sport Isofix Car Seat Charcoal Grey</h2>
<h6> MRP:₹ 26,999.00 Save ₹ 2,700.00</h6>
<h2>₹ 24,299.00</h2>
<Button variant="contained" color="success">add to wishlist</Button>
<br /><br />
<Button variant="contained">buy now</Button>
<Typography variant="boby1" gutterBottom>
  <h2>At a Glance</h2>
  The Mothercare sport ISOFIX car seat is an easy-to-fit forward-facing, group 1 car seat suitable for children weighing between 9-18kgs (approx. 9 months to 4 years) 
  offering great value, comfort and safety protection.The seat reclines on its own axis to five positions and has built-in locking clips to maintain the tension of the belt while a 5-point harness 
  with chest and buckle pads holds your child comfortably and securely. Secured in the car using ISOFIX anchorage points and top tether,
   the seat has deep wide wings with side impact protection,
   a head cushion and a body support cushion for younger children.Take a look at our car sun shades which can help protect your little one from the
    glare and heat of the sunOur expertly trained store staff will help you choose the right car seat for both your child and your car. 
    They will even show you how to fit your car seat safely and securely
</Typography>
    </div>
  )
}

export default Product