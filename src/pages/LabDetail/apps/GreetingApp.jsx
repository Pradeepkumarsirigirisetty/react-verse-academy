import React, { useState } from 'react';

function GreetingApp() {
  const [name, setName] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('morning');

  const greetings = {
    morning: '🌅 Good Morning',
    afternoon: '☀️ Good Afternoon',
    evening: '🌆 Good Evening',
    night: '🌙 Good Night',
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Greeting Generator</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem' }}
      />

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {Object.keys(greetings).map((key) => (
          <button
            key={key}
            onClick={() => setTimeOfDay(key)}
            style={{
              padding: '0.5rem 1rem', borderRadius: '20px', border: 'none',
              cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
              background: timeOfDay === key ? '#6366f1' : '#e2e8f0',
              color: timeOfDay === key ? '#fff' : '#333',
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <div style={{
        marginTop: '1.5rem', padding: '1.5rem', borderRadius: '12px',
        background: 'linear-gradient(135deg, #eef2ff, #fdf2f8)', minHeight: '80px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {name ? (
          <h3 style={{ margin: 0, color: '#1e293b' }}>{greetings[timeOfDay]}, {name}! 👋</h3>
        ) : (
          <p style={{ color: '#94a3b8', margin: 0 }}>Type your name above to see the greeting...</p>
        )}
      </div>
    </div>
  );
}

export default GreetingApp;
