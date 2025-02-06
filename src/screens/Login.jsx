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
      <div style={{ backgroundImage: `url(../assets/logo.jpg)`, height:"50%",float:"right" }} className="login-background">
      <br></br>
      <h1>Login</h1>
        <form onSubmit={handleLogin}>
         <div  style={{flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, display:"flex"}}>

            <TextField
          id="outlined-text-input"
          label="Email"
          type="email"
          /><br></br>
            <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          />
        <br></br>
           <button varient='contained' type="submit" >Login</button>
          </div>
        </form>
      </div>    </>
  );
};

export default Login;
