import React, { useState } from 'react';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data || 'Registration failed');
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '2rem auto',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    heading: {
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#0d6efd'
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      marginBottom: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '1rem'
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#0d6efd',
      border: 'none',
      color: 'white',
      fontSize: '1.1rem',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    buttonHover: {
      backgroundColor: '#0b5ed7'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          name="email"
          onChange={handleChange}
          style={styles.input}
          type="email"
          required
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
          style={styles.input}
          type="tel"
          required
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

export default Register;
