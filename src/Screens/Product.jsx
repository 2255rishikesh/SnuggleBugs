import React, { useState } from 'react';
import NavBar from '../Components/Navbar';
import { Button, Typography, Stack, Rating, Box, Card, CardContent, CardMedia } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

function Product() {
    const [product, setProduct] = useState({
        _id: 'errt',
        title: 'Sport Isofix Car Seat Charcoal Grey',
        description: 'A comfortable and safe car seat for children.',
        price: '24,299.00',
        imageUrl: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',
        additionalImages: [
            // additional images
        ]
    });

    const [rating, setRating] = useState(3.5);
    const { axiosInstance, user } = useAuth();

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
        console.log(`User rated: ${newValue}`);
    };

    const addToCart = async () => {
        if (!user) {
            console.error("User not logged in.");
            return;
        }

        try {
            await axiosInstance.post(`/product/cart/`, {
                userId: user._id,
                productId: product._id,
            });
            alert("Product added to cart!");
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <NavBar />
            <div style={{ margin: '50px auto', maxWidth: '1200px', padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card sx={{ display: 'flex', width: '100%', borderRadius: '12px', boxShadow: 3 }}>
                        <Stack sx={{ padding: '20px', width: '50%' }} spacing={2}>
                            {/* Product Image and Carousel */}
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', borderRadius: '12px' }}
                                image={product.imageUrl}
                                alt={product.title}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    overflowX: 'auto',
                                    paddingTop: '10px',
                                    gap: '10px',
                                    scrollSnapType: 'x mandatory',
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
                                        }}
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
                                    onClick={addToCart}
                                >
                                    ADD TO CART
                                </Button>
                                <Link to="/Payment">
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
                                </Link>
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
                        </Stack>
                    </Card>
                </Box>
            </div>
        </div>
    );
}

export default Product;
