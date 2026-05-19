import React, { useState, useEffect } from 'react';
import './Playground.css';

const Playground = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect Example
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  // API Fetching Example
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="playground-page animate-fade-in">
      <header className="page-header playground-header">
        <div className="container">
          <h1 className="gradient-text">Interactive Playground</h1>
          <p>Experiment with React hooks and concepts in real-time or launch our full online sandbox environment.</p>
          
          <div className="playground-cta-wrapper">
            <a 
              href="https://stackblitz.com/edit/vitejs-vite-peherbxr?file=index.html&terminal=dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary playground-launch-btn"
            >
              <span className="btn-icon">⚡</span> Explore the Code Playground
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="playground-grid">
          {/* useState Example */}
          <div className="playground-card glass">
            <h3>useState & Event Handling</h3>
            <p>Update state based on user interaction.</p>
            <div className="demo-area">
              <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                Count is: {count}
              </button>
              <button className="btn btn-outline" onClick={() => setCount(0)} style={{ marginLeft: '1rem' }}>
                Reset
              </button>
            </div>
          </div>

          {/* Controlled Component Example */}
          <div className="playground-card glass">
            <h3>Controlled Components</h3>
            <p>Manage form inputs with React state.</p>
            <div className="demo-area">
              <input
                type="text"
                className="input-field"
                placeholder="Type something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <p style={{ marginTop: '1rem', minHeight: '1.5rem' }}>
                <strong>You typed:</strong> {text}
              </p>
            </div>
          </div>

          {/* API Fetching Example */}
          <div className="playground-card glass" style={{ gridColumn: '1 / -1' }}>
            <h3>useEffect & Data Fetching</h3>
            <p>Fetch data from an external API and render a list with keys.</p>
            <div className="demo-area">
              <button className="btn btn-primary" onClick={fetchUsers} disabled={loading}>
                {loading ? 'Fetching...' : 'Fetch Users'}
              </button>

              {users.length > 0 && (
                <ul className="user-list">
                  {users.map(user => (
                    <li key={user.id} className="user-list-item">
                      <strong>{user.name}</strong>
                      <span>{user.email}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
