import React, { useState } from 'react';
import './styles/Signup.css';

const Signup = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup details:", { name, email, password });
    // Add further logic here for user registration (e.g., API call)
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="text"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field"
            required
          />
          <button className="signup-button" type="submit">
            Signup
          </button>
        </form>
        <div className="signin-link">
          <p>Already have an account? <a href="/login" className="signin-text">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
