import React, { useState, useEffect } from 'react';

function CharacterExplorer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div style={{ padding: '3rem', textAlign: 'center' }}>⏳ Loading characters...</div>;
  if (error) return <div style={{ padding: '3rem', textAlign: 'center' }}>❌ Error: {error}</div>;

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>🧑‍🤝‍🧑 Character Explorer</h2>
      <input
        placeholder="Search characters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', marginBottom: '1.5rem' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.75rem' }}>
        {filtered.map(user => (
          <div key={user.id} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', textAlign: 'center' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '1.1rem', margin: '0 auto 0.5rem',
            }}>{user.name.charAt(0)}</div>
            <h4 style={{ margin: '0 0 0.15rem', fontSize: '0.9rem' }}>{user.name}</h4>
            <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, wordBreak: 'break-all' }}>{user.email}</p>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '1rem' }}>No characters found.</p>}
    </div>
  );
}

export default CharacterExplorer;
