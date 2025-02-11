import React, { useState } from 'react';
import './styles/Signup.css';
import { TextField, Button, Typography, Link } from '@mui/material';
import { useAuth } from '../Contexts/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
      const {setUser, axiosInstance } = useAuth()
  

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };

  
    if (!formData.name) {
      newErrors.name = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
      console.log("Signup details:", formData);
      axiosInstance.post('/auth/register',{
        formData
      }).then(({data})=>{
        setUser(data.user)
        localStorage.setItem('@Auth',JSON.stringify(data.user))
        if(data.user.role=='admin'){
          window.location.href = '/admin'
        }else{
          window.location.href = '/'

        }
      })
      
    }
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <Typography variant="h4" className="signup-title">Create Account</Typography>
        <form onSubmit={handleSignup} className="signup-form">
          <TextField
            label="Username"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.name)}
            helperText={errors.name}
            variant="outlined"
          />
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
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            variant="outlined"
          />
          <Button
            className="signup-button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            Signup
          </Button>
        </form>
        <div className="signin-link">
          <Typography variant="body2">
            Already have an account? 
            <Link href="/login" className="signin-text"> Login</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Signup;
