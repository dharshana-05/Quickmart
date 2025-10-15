import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Logged In:', formData);
    alert('Login successful!');
    navigate('/home'); 
  };

  const handleGoogleLogin = () => {
    console.log('Google Login Clicked');
    alert('Google Login (Dummy)');
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>

      <p className="login-text">
        Don't have an account? <Link to="/register" className="login-link">Register here</Link>
      </p>

      <hr />
      <button onClick={handleGoogleLogin} className="google-button">
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
