import React, { useState } from 'react';
import './styles/Login.css';
import { TextField, Button, Typography, Link } from '@mui/material';
import { useAuth } from '../Contexts/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

    const {setUser, axiosInstance } = useAuth()
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      // Add login logic here, like API call
      console.log('Logging in with:', formData);
      axiosInstance.post('/auth/login',{
        formData
      })
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <Typography variant="h4" className="login-title">Welcome Back</Typography>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.email)}
              helperText={errors.email}
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.password)}
              helperText={errors.password}
              variant="outlined"
            />
            <Button
              className="login-button"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
            >
              Login
            </Button>
          </div>
        </form>
        <div className="signup-link">
          <Typography variant="body2">
            Don't have an account? 
            <Link href="/signup" className="signup-text"> Sign up</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
