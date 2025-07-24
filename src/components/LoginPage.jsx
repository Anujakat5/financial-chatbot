import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingChat from './FloatingChat.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === 'admin123') {
      setMessage('Login successful! ✅');
      navigate('/dashboard');
    } else {
      setMessage('Invalid credentials ❌');
    }

    // try {
    //   const res = await fetch('http://localhost:8080/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password })
    //   });

    //   if (res.ok) {
    //     const data = await res.json();
    //     setMessage(`Welcome, ${data.username || email}!`);
    //     navigate('/dashboard');
    //   } else {
    //     const err = await res.text();
    //     setError(err || 'Invalid credentials');
    //   }
    // } catch (err) {
    //   setError('Server error. Please try again later.');
    // }
  };

  return (
    <>
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>

        {error && <div className="error-msg">{error}</div>}
        {message && <div className="success-msg">{message}</div>}
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} type="submit">Login</button>

        <a style={styles.forgotPass} href="/">Forgot Password?</a>
      </form>

      <FloatingChat />
    </div>
</>
  );
};

const styles = {
  page: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // background: '#f2f2f2'
    background: 'linear-gradient(#74ebd5, #9face6)'
  },
  form: {
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '420px'
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  button: {
    padding: '0.75rem',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  forgotPass: {
    marginLeft: '-210px'
  }
};

export default LoginPage;
