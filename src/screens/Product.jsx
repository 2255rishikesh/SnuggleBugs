import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import { Box, Button, Rating, Stack, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';

function Product() {

    const { id } = useParams();
<Navbar></Navbar>
    const [product, setProduct] = useState({_id:'dhj',title:" baby care",discriptin:"",price:4567,imageUrl:'https://cdn.fcglcdn.com/brainbees/images/products/583x720/3437926a.webp'})
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //      async () => {
    //         setLoading(true)
    //         try {
    //           const product = await axios.get('/product/'.concat(id));
    //           setProduct(product)
    //         } catch (error) {
    //             alert('Unknown Error occured, Please try again')
    //         }
    //         setLoading(false)
    //     }
    //  }, [])



    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
        
      };
      const [value, setValue] = useState(2);
const [hover, setHover] = useState(-1);
      
    return (

<Stack sx={{p:2}}>

        

<h3>{product.title}</h3>
<p>{product.discriptin}</p>

<img src={product.imageUrl}width="500px" ></img>
<h2>Babyhug Milk Protein Formula Daily Moisturising Milky Lotion Mild & Gentle Formula For Newborn Baby - 400 ml</h2>
<h3>mrp:231  </h3>
<Rating
  name="hover-feedback"
  value={value}
  precision={0.5}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  onChangeActive={(event, newHover) => {
    setHover(newHover);
  }}
  emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="large" />}
/>
{value !== null && (
  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
)}

<h4>Product Description:</h4>
<Box sx={{width:300}}>
<Typography variant="p" gutterBottom sx={{pl:10}}   >
 Babyhug Lotion contains moisturizing Milk Protein, Aloe Vera and soothing Allantoin. It keeps baby's delicate skin moisturized for 24 hours. 
    Wheat Germ Oil protects baby's skin against dryness and irritation, leaving it soft and supple naturally. 
    This mild & gentle formula is made with care and is free from Paraben, SLS/SLES, Phthalate, Phenoxyethanol, Ethanolamine & Silicon.
Ideal to use for babies
</Typography>
</Box>
<Button variant="contained" color="success" sx={{width:"fit-content"}}>
        ADD TO CART
      </Button> <br /> <br />
      <Button variant="contained" sx={{width:"fit-content"}} >    BUY NOW    </Button>
     

</Stack>
      

        

    )
}

export default Product