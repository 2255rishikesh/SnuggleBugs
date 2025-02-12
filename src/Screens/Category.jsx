import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Button, Typography, Grid, CircularProgress } from '@mui/material';
import './styles/Category.css';
import NavBar from '../Components/Navbar';
import { useAuth } from '../Contexts/AuthContext';

function CardItem({ product, addItemToCart ,categoryId}) {


  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
      <div onClick={() => window.location.href = `/category/${categoryId}/product/${product._id}`}>

        <CardMedia
          component="img"
          height="200"
          image={product.imageUrl1 || 'https://via.placeholder.com/150'}
          alt={product.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            {product.title || 'Product Title Not Available'}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {product.description || 'No description available'}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ marginBottom: 2 }}>
            {product.price ? `₹${product.price.toLocaleString()}` : '₹999.00'}
          </Typography>
        </CardContent>
      </div>
      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => addItemToCart(product)}
        >
          Add to Cart
        </Button>
      </Link>
    </Card>
  );
}

function CardList() {
  const [products, setProduct] = useState([]);
  const { axiosInstance , user} = useAuth();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(`/categories/${id}`);
        if (data && Array.isArray(data.items)) {
          setProduct(data.items);
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

  return (
    <div className="category-page">
      <NavBar />
      <div className="card-container">
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {products.length === 0 ? (
              <Typography variant="h6" color="textSecondary" align="center">No products available</Typography>
            ) : (
              products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product._id} >
                  <CardItem product={product} addItemToCart={addItemToCart} categoryId={id} />

                </Grid>
              ))
            )}
          </Grid>
        )}
      </div>
    </div>
  );
}

export default CardList;
