import React, { useState } from 'react';
import NavBar from '../Components/Navbar';
import { Button, Typography, Stack, Rating, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Cart from './Cart';
function Product() {
    // Product state
    const [product, setProduct] = useState({
        _id: 'errt',
        title: 'Sport Isofix Car Seat Charcoal Grey',
        description: 'A comfortable and safe car seat for children.',
        price: '24,299.00',
        imageUrl:
            'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',
    });

    // Rating state
    const [rating, setRating] = useState(2.5); // Default rating

    // Handle the rating change
    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
        console.log(`User rated: ${newValue}`); // For example, you can send this to a backend
    };

    return (
        <div>
            <NavBar />
            <div style={{ margin: 50 }}>
                <Box sx={{ display: 'flex', width: '100vw' }}>
                    <Box sx={{ width: "60%" }}>

                        <img src={product.imageUrl} alt="Product Image" />


                    </Box>
                    <Stack sx={{ display: 'flex', flexDirection: 'column', width: "50%" }}>

                        <div style={{ marginTop: '30px' }}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h6>MRP: ₹ 26,999.00 Save ₹ 2,700.00</h6>
                            <h2>₹ {product.price}</h2>

                            {/* Add to Wishlist Button with Cart Icon */}
                            <Button variant="outlined" startIcon={<ShoppingCart />} style={{ marginRight: '10px' }}>
                                ADD TO CART
                            </Button>
                        
                            {/* Buy Now Button with custom color */}
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: '#ba562b', '&:hover': { backgroundColor: 'darkgreen' } }}
                            >
                                Buy Now
                            </Button>

                            {/* Rating Component */}
                            <Stack spacing={1} style={{ marginTop: '20px' }}>
                                <Typography variant="h6">Rate this Product:</Typography>
                                <Rating
                                    name="product-rating"
                                    value={rating}
                                    precision={0.5}
                                    onChange={handleRatingChange}
                                />
                                <Typography variant="body1">Current Rating: {rating}</Typography>
                            </Stack>

                            {/* Product Description */}
                            <div style={{ maxWidth: "50%" }}>
                                <Typography variant="body1" gutterBottom>
                                    <h2>At a Glance</h2>
                                    The Mothercare sport ISOFIX car seat is an easy-to-fit forward-facing, group 1 car seat suitable for children weighing between 9-18kgs (approx. 9 months to 4 years). It offers great value, comfort, and safety protection. The seat reclines on its own axis to five positions and has built-in locking clips to maintain the tension of the belt, while a 5-point harness with chest and buckle pads holds your child comfortably and securely. Secured in the car using ISOFIX anchorage points and top tether, the seat has deep wide wings with side impact protection, a head cushion, and a body support cushion for younger children.
                                    Take a look at our car sun shades which can help protect your little one from the glare and heat of the sun. Our expertly trained store staff will help you choose the right car seat for both your child and your car. They will even show you how to fit your car seat safely and securely.
                                </Typography>

                                <Typography variant="body1" gutterBottom>
                <h2>Safety warning</h2>
                Do not use in a front seat with an active airbag. Try to keep journeys for newborns up to 4 weeks old, no longer than 30 minutes, and for older babies no longer than 2 hours. It is good for your baby to lie flat for most of the day, so if you do need to make a longer trip, ensure that you take regular breaks to allow your little one to stretch out for a while away from their car seat.
              </Typography>

                            </div>

                        </div>

                    </Stack>
                </Box>

            </div>
        </div>
    );
}

export default Product;