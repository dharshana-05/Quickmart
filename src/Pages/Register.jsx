import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Registered successfully!');
    navigate('/login');
  };

  const handleGoogleRegister = () => {
    alert('Google Sign-Up (Dummy)');
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        <div className="divider">or</div>
        <button className="google-btn" onClick={handleGoogleRegister}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
