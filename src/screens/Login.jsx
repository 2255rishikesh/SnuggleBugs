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
      <div style={{ backgroundImage: `url(../assets/logo.jpg)`, height:"100vh" }} className="login-background">
        <h1>Login</h1>
        <form onSubmit={handleLogin} style={{flexDirection:"column"}}>
         
            <TextField
          id="outlined-text-input"
          label="Email"
          type="email"
        />
            <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
