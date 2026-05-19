import React, { useState } from 'react';

function AuthFlow() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (!email.includes('@')) { setError('Please enter a valid email'); return; }
    if (password.length < 4) { setError('Password must be at least 4 characters'); return; }
    setUser({ name: email.split('@')[0], email });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: '1.75rem', margin: '0 auto',
        }}>{user.name.charAt(0).toUpperCase()}</div>
        <h2 style={{ marginTop: '1rem', marginBottom: '0.25rem' }}>Welcome, {user.name}!</h2>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{user.email}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '1.5rem 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.9rem', color: '#64748b' }}><strong style={{ fontSize: '1.25rem', color: '#1e293b' }}>12</strong><span>Posts</span></div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.9rem', color: '#64748b' }}><strong style={{ fontSize: '1.25rem', color: '#1e293b' }}>340</strong><span>Followers</span></div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.9rem', color: '#64748b' }}><strong style={{ fontSize: '1.25rem', color: '#1e293b' }}>28</strong><span>Following</span></div>
        </div>
        <button onClick={handleLogout} style={{
          padding: '0.75rem 2rem', borderRadius: '8px', border: 'none',
          background: '#ef4444', color: '#fff', fontWeight: 600, cursor: 'pointer',
        }}>Logout</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '320px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1rem' }}>🔐 Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', marginBottom: '0.75rem' }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', marginBottom: '0.75rem' }} />
        {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: '0 0 0.75rem' }}>{error}</p>}
        <button type="submit" style={{
          width: '100%', padding: '0.75rem', borderRadius: '8px', border: 'none',
          background: '#6366f1', color: '#fff', fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
        }}>Login</button>
      </form>
      <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem', marginTop: '1rem' }}>
        Use any email & password (4+ chars)
      </p>
    </div>
  );
}

export default AuthFlow;
