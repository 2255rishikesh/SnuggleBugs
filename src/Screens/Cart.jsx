import React, { useState, useCallback, useEffect } from "react";
import { Grid, Card, CardContent, Typography, IconButton, Button, TextField } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../Contexts/AuthContext";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => (
  <Card sx={{ display: 'flex', padding: 2, marginBottom: 2 }}>
    <div style={{ marginRight: 16 }}>
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{ width: 100, height: 100, objectFit: 'cover' }}
      />
    </div>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>{item.title}</Typography>
      <Typography variant="body2" color="textSecondary">${item.price.toFixed(2)}</Typography>

      <Grid container spacing={1} alignItems="center" sx={{ marginTop: 1 }}>
        <Grid item>
          <IconButton onClick={() => onDecrease(item._id)} disabled={item.quantity <= 1}>
            <RemoveCircleIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="body2">{item.quantity}</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => onIncrease(item._id)}>
            <AddCircleIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Typography variant="body2" color="textPrimary" sx={{ marginTop: 1 }}>
        Total: ${(item.price * item.quantity).toFixed(2)}
      </Typography>

      <IconButton
        onClick={() => onRemove(item._id)}
        color="error"
        sx={{ marginTop: 2 }}
        aria-label="Remove item"
      >
        <DeleteIcon />
      </IconButton>
    </CardContent>
  </Card>
);

const CartSummary = ({ total, onCouponChange, onApplyCoupon, coupon, onCheckout }) => (
  <Card sx={{ padding: 2, marginTop: 3 }}>
    <Typography variant="h6" gutterBottom>Total Price: ${total}</Typography>

    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8}>
        <TextField
          fullWidth
          label="Enter coupon code"
          variant="outlined"
          value={coupon}
          onChange={onCouponChange}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onApplyCoupon}
        >
          Apply Coupon
        </Button>
      </Grid>
    </Grid>

    <Button
      variant="contained"
      color="secondary"
      fullWidth
      sx={{ marginTop: 2 }}
      onClick={onCheckout}
    >
      Proceed to Checkout
    </Button>
  </Card>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      _id: 'errt',
      title: 'Sport Isofix Car Seat Charcoal Grey',
      price: 24299.00,
      quantity: 1,
      imageUrl: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',
    },
  ]);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
      const { axiosInstance , user} = useAuth();
  

      useEffect(() => {
        const fetchData = async () => {
            const user1 = await localStorage.getItem('@Auth');
            const { data } = await axiosInstance.get(`/product/cart/${user._id || JSON.parse(user1)._id}`);
            if (data) {
              setCartItems(data.products);
            }
        }
        fetchData();
    }, [user, axiosInstance]);

  const getTotal = useCallback(() => {
    let total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    total -= total * (discount / 100);
    return total.toFixed(2);
  }, [cartItems, discount]);

  const updateQuantity = useCallback((id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? { ...item, quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  }, []);

  const applyCoupon = useCallback(() => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(10);
    } else if (coupon === 'DISCOUNT20') {
      setDiscount(20);
    } else {
      alert('Invalid coupon code');
      setDiscount(0);
    }
  }, [coupon]);

  const removeItem = useCallback((id) => {
    setCartItems((prevItems) => prevItems.filter(item => item._id !== id));
  }, []);

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <div style={{ padding: 16 }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        cartItems.map(item => (
          <CartItem
            key={item._id}
            item={item}
            onIncrease={() => updateQuantity(item._id, 'increase')}
            onDecrease={() => updateQuantity(item._id, 'decrease')}
            onRemove={removeItem}
          />
        ))
      )}

      {cartItems.length > 0 && (
        <CartSummary
          total={getTotal()}
          onCouponChange={(e) => setCoupon(e.target.value)}
          onApplyCoupon={applyCoupon}
          coupon={coupon}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default Cart;
