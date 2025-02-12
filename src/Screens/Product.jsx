import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Navbar';
import { Button, Typography, Stack, Rating, Box, Card, CardContent, CardMedia } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

function Product() {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        _id: 'errt',
        title: 'Sport Isofix Car Seat Charcoal Grey',
        description: 'A comfortable and safe car seat for children.',
        price: '24,299.00',
        imageUrl: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',
        additionalImages: [
            
        ]
    });

    const { axiosInstance , user} = useAuth();
    const { id, categoryId } = useParams();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axiosInstance.get(`/categories/${categoryId}/items/${id}`);
          if (data ) {
            setProduct(data)
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [axiosInstance, id]);
  
    const addItemToCart = async (item) => {
      axiosInstance.post('/product/cart/', {
        userId: user._id,
        product: item._id
      }).catch(err=>{
        alert("error")
      })
  
    }
  

    const [rating, setRating] = useState(3.5);

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
                            
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', borderRadius: '12px' }}
                                image={product.imageUrl1}
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
                             
                            </div>
                        </Stack>
                        <Stack sx={{ padding: '20px', width: '50%' }} spacing={2}>
                            <Typography variant="h4" sx={{ fontWeight: 600 }}>{product.title}</Typography>
                            <Typography variant="body1" color="textSecondary">{product.description}</Typography>
                            <Typography variant="h6" sx={{ color: '#8c8c8c' }}>MRP: ₹ {product.strikeprice} Save ₹ {product.strikeprice - product.price}</Typography>
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
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#ba562b',
                                            color: 'white',
                                            '&:hover': { backgroundColor: 'darkgreen' },
                                            borderRadius: '9px',
                                            padding: '10px 20px',
                                        }}
                                        onClick={() => (navigate('/Payment', { state: { product } }))}>
                                        Buy Now
                                    </Button>
                            </Stack>

                            
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
