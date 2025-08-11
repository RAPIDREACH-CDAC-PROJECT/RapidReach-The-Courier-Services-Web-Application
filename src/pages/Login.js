import React, { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem('token', res.data.token); // store JWT token
      alert('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data || 'Login failed');
    }
  };

  const styles = {
    container: { maxWidth: '400px', margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' },
    heading: { textAlign: 'center', marginBottom: '1rem', color: '#0d6efd' },
    input: { width: '100%', padding: '8px 12px', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' },
    button: { width: '100%', padding: '10px', backgroundColor: '#0d6efd', border: 'none', color: 'white', fontSize: '1.1rem', borderRadius: '4px', cursor: 'pointer' },
    forgot: { display: 'block', marginTop: '0.5rem', color: '#0d6efd', textAlign: 'right', textDecoration: 'none' }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2> 
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" name="email" onChange={handleChange} style={styles.input} type="email" required />
        <input placeholder="Password" type="password" name="password" onChange={handleChange} style={styles.input} required />
        <button type="submit" style={styles.button}>Login</button>
      </form>
<Link to="/forgot-password" style={styles.forgot}>Forgot Password?</Link>
    </div>
  );
}

export default Login;
