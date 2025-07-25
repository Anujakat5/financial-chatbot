import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingChat from './FloatingChat.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const [customerid, setCustomerid] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    const now = new Date();
    const formattedTime = now.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    });
    localStorage.setItem("loginTimestamp", formattedTime);
    try {
      const response = await fetch('https://financial-banking-878612543973.europe-west1.run.app/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerid,
          password
        })
      });

      const text = await response.text();

      if (response.ok) {
        if (text.includes("Invalid")) {
          setError("❌ Invalid customer ID or password");
        } else {
          setMessage("✅ Login successful!");
          localStorage.setItem("customerid", customerid);
          navigate('/dashboard');
        }
      } else {
        setError(text || 'Login failed.');
      }
    } catch (err) {
      console.error("Login error:", err.message);
      setError('⚠️ Server error. Please try again later.');
    }
  };

  return (
    <>
      <div style={styles.page}>
        <div style={styles.logoContainer}>
          <img src="src/assets/logo.png" alt="Logo" style={styles.logo} />
          <div style={styles.textGroup}>
            <h3 style={styles.bankName}>SAARTHI</h3>
            <p style={styles.slogan}>Your security, our priority</p>
          </div>
        </div>

        <form style={styles.form} onSubmit={handleLogin}>
          <h2>Login</h2>

          {error && <div className="error-msg">{error}</div>}
          {message && <div className="success-msg">{message}</div>}
          <input
            style={styles.input}
            type="text"
            placeholder="Customer ID"
            value={customerid}
            onChange={(e) => setCustomerid(e.target.value)}
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
          <div style={styles.divider}></div>

          <div style={styles.altSignIn}>
            <p style={styles.altSignInText}>Sign in with other options</p>
            <div style={styles.altButtons}>
              <div style={{ ...styles.altButton, ...styles.google }}>
                <img src="/bio.png" alt="Google" style={styles.icon} /> Fingerprint
              </div>
              <div style={{ ...styles.altButton, ...styles.microsoft }}>
                <img src="/facialrecog.png" alt="Microsoft" style={styles.icon} /> Scan Face
              </div>
            </div>
          </div>

          <div style={styles.ivrCard}>
            <span style={styles.ivrIcon}><img src="/mobile.png" alt="mobileIcon" style={styles.mobileIcon} /></span>
            <div style={styles.ivrText}>
              <p style={styles.ivrTitle}>Login via IVR</p>
              <p style={styles.ivrSub}>Call 1800-123-4567 </p>
            </div>
          </div>
        </form>

        <FloatingChat />
      </div>
    </>
  );
};

const styles = {
  mobileIcon: {
    width: '40px',
    height: '50px',
  },
  page: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  logoContainer: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginBottom: '0.5rem'
  },
  textGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem'
  },
  bankName: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  slogan: {
    margin: 0,
    fontSize: '0.8rem',
    color: '#333'
  },
  divider: {
    margin: '1.5rem 0 1rem',
    borderTop: '1px solid #ccc'
  },
  altSignIn: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  altSignInText: {
    fontSize: '0.95rem',
    marginBottom: '0.5rem',
    fontWeight: '500',
  },
  altButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
  },
  altButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1.25rem',
    borderRadius: '25px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    cursor: 'pointer',
    boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  google: {
    background: '#fff',
    color: '#444',
    border: '1px solid #ddd',
    backgroundColor: 'rgb(231, 240, 255)',
  },
  microsoft: {
    background: '#fff',
    color: '#222',
    border: '1px solid #ccc',
    backgroundColor: 'rgb(231, 240, 255)',
  },
  icon: {
    width: '30px',
    height: '39px',
  },
  ivrCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    background: '#e7f0ff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    marginTop: '-15px',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  ivrIcon: {
    fontSize: '1.8rem',
    paddingLeft: '62px'
  },
  ivrTitle: {
    fontWeight: '600',
    fontSize: '1rem',
    margin: 0,
  },
  ivrSub: {
    fontSize: '0.85rem',
    color: '#333',
    margin: 0,
  },
  ivrText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
  
};

export default LoginPage;