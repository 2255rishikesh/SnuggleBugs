import React, { useState } from 'react';
import NavBar from '../Components/Navbar';
import { Button, Typography, Stack, Rating, Box, Card, CardContent, CardMedia } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

function Product() {
    // Product state
    const [product, setProduct] = useState({
        _id: 'errt',
        title: 'Sport Isofix Car Seat Charcoal Grey',
        description: 'A comfortable and safe car seat for children.',
        price: '24,299.00',
        imageUrl:
            'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',
        additionalImages: [
            'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/18-nov-2022/492863593_2.jpg',
            'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/18-nov-2022/492863593_6.jpg', 
            'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/18-nov-2022/492863593_3.jpg', 
            'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/18-nov-2022/492863593_5.jpg', 
            'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/18-nov-2022/492863593_7.jpg',
        ]
    });

    // Rating state
    const [rating, setRating] = useState(3.5); // Default rating

    // Handle the rating change
    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
        console.log(`User rated: ${newValue}`); // For example, you can send this to a backend
    };

    return (
        <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <NavBar />
            <div style={{ margin: '50px auto', maxWidth: '1200px', padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card sx={{ display: 'flex', width: '100%', borderRadius: '12px', boxShadow: 3 }}>
                        <Stack sx={{ padding: '20px', width: '50%' }} spacing={2}>
                            {/* Main Product Image */}
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', borderRadius: '12px', transition: 'transform 0.5s ease' }}
                                image={product.imageUrl}
                                alt={product.title}
                                style={{ transition: 'transform 0.5s ease' }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                            
                            {/* Horizontal Scrolling of Additional Images */}
                            <div 
                                style={{
                                    display: 'flex',
                                    overflowX: 'auto',
                                    paddingTop: '10px',
                                    gap: '10px',
                                    scrollSnapType: 'x mandatory',
                                    scrollbarWidth: 'thin', // For modern browsers
                                }}
                            >
                                {product.additionalImages.map((image, index) => (
                                    <img 
                                        key={index} 
                                        src={image} 
                                        alt={`Additional Product Image ${index + 1}`} 
                                        style={{
                                            width: '200px',
                                            height: 'auto',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            scrollSnapAlign: 'center',
                                            transition: 'transform 0.3s ease',
                                        }} 
                                        onClick={() => alert(`Image ${index + 1} clicked!`)} // Optional: Add functionality for clicking images
                                    />
                                ))}
                            </div>
                        </Stack>

                        <Stack sx={{ padding: '20px', width: '50%' }} spacing={2}>
                            <Typography variant="h4" sx={{ fontWeight: 600 }}>{product.title}</Typography>
                            <Typography variant="body1" color="textSecondary">{product.description}</Typography>
                            <Typography variant="h6" sx={{ color: '#8c8c8c' }}>MRP: ₹ 26,999.00 Save ₹ 2,700.00</Typography>
                            <Typography variant="h4" sx={{ fontWeight: 600, color: '#ba562b' }}>₹ {product.price}</Typography>

                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="outlined"
                                    startIcon={<ShoppingCart />}
                                    sx={{
                                        backgroundColor: '#f0f0f0',
                                        color: '#333',
                                        '&:hover': { backgroundColor: '#e0e0e0' },
                                        borderRadius: '8px',
                                        padding: '10px 20px',
                                    }}
                                >
                                    ADD TO CART
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#ba562b',
                                        color: 'white',
                                        '&:hover': { backgroundColor: 'darkgreen' },
                                        borderRadius: '9px',
                                        padding: '10px 20px',
                                    }}
                                >
                                    Buy Now
                                </Button>
                            </Stack>

                            {/* Rating Component */}
                            <Stack spacing={1}>
                                <Typography variant="h6">Rate this Product:</Typography>
                                <Rating
                                    name="product-rating"
                                    value={rating}
                                    precision={0.5}
                                    onChange={handleRatingChange}
                                    sx={{ color: '#ba562b' }}
                                />
                                <Typography variant="body1">Current Rating: {rating}</Typography>
                            </Stack>

                            {/* Product Description */}
                            <div style={{ marginTop: '30px', maxWidth: '500px' }}>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>At a Glance</Typography>
                                <Typography variant="body1" paragraph>
                                    The Mothercare sport ISOFIX car seat is an easy-to-fit forward-facing, group 1 car seat suitable for children weighing between 9-18kgs (approx. 9 months to 4 years). It offers great value, comfort, and safety protection. The seat reclines on its own axis to five positions and has built-in locking clips to maintain the tension of the belt, while a 5-point harness with chest and buckle pads holds your child comfortably and securely. Secured in the car using ISOFIX anchorage points and top tether, the seat has deep wide wings with side impact protection, a head cushion, and a body support cushion for younger children.
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>Safety Warning</Typography>
                                <Typography variant="body1" paragraph>
                                    Do not use in a front seat with an active airbag. Try to keep journeys for newborns up to 4 weeks old, no longer than 30 minutes, and for older babies no longer than 2 hours. It is good for your baby to lie flat for most of the day, so if you do need to make a longer trip, ensure that you take regular breaks to allow your little one to stretch out for a while away from their car seat.
                                </Typography>
                            </div>
                        </Stack>
                    </Card>
                </Box>
            </div>
        </div>
    );
}

export default Product;
