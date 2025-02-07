import React, { useState } from 'react';
import './styles/Login.css';
import { TextField } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <>
      <div className="login-background">
        <div className="login-container">
          <h1 className="login-title">Welcome Back</h1>
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <TextField
                id="outlined-text-input"
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                margin="normal"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                margin="normal"
              />
              <button className="login-button" type="submit">Login</button>
            </div>
          </form>
          <div className="signup-link">
            <p>Don't have an account? <a href="/signup" className="signup-text">Signup</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

