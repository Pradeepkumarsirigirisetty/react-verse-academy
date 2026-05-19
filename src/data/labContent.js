// Source code strings and line-by-line explanations for each lab

export const labContent = {
  1: {
    title: "Greeting App",
    description: "A simple app to practice props and conditional rendering.",
    difficulty: "Beginner",
    concepts: ["Props", "Conditional Rendering", "useState"],
    sourceCode: `import React, { useState } from 'react';

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
    <div style={{ padding: '2rem' }}>
      <h2>Greeting Generator</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {Object.keys(greetings).map((key) => (
          <button
            key={key}
            onClick={() => setTimeOfDay(key)}
            style={{
              ...btnStyle,
              background: timeOfDay === key ? '#6366f1' : '#e2e8f0',
              color: timeOfDay === key ? '#fff' : '#333',
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <div style={outputStyle}>
        {name ? (
          <h3>{greetings[timeOfDay]}, {name}! 👋</h3>
        ) : (
          <p style={{ color: '#94a3b8' }}>Type your name above to see the greeting...</p>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '0.75rem', borderRadius: '8px',
  border: '1px solid #e2e8f0', fontSize: '1rem', marginTop: '1rem',
};

const btnStyle = {
  padding: '0.5rem 1rem', borderRadius: '20px',
  border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
};

const outputStyle = {
  marginTop: '1.5rem', padding: '1.5rem', borderRadius: '12px',
  background: 'linear-gradient(135deg, #eef2ff, #fdf2f8)', minHeight: '80px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};`,
    explanations: [
      { line: "import React, { useState } from 'react';", explanation: "Import React and the useState hook. useState lets us create state variables that trigger re-renders when changed." },
      { line: "function GreetingApp() {", explanation: "Define a functional component called GreetingApp. This is the main component for our greeting generator." },
      { line: "const [name, setName] = useState('');", explanation: "Create a state variable 'name' initialized to an empty string. setName is the function to update it." },
      { line: "const [timeOfDay, setTimeOfDay] = useState('morning');", explanation: "Create a state variable 'timeOfDay' initialized to 'morning'. This controls which greeting message is shown." },
      { line: "const greetings = { morning: '🌅 Good Morning', ... };", explanation: "An object mapping time-of-day keys to greeting strings with emojis. This acts as our data source." },
      { line: "onChange={(e) => setName(e.target.value)}", explanation: "When the input changes, update the 'name' state with the new value. This is a controlled input — React owns the value." },
      { line: "onClick={() => setTimeOfDay(key)}", explanation: "When a time button is clicked, update timeOfDay state. This triggers a re-render and the greeting message updates." },
      { line: "{name ? <h3>...</h3> : <p>...</p>}", explanation: "Conditional rendering with a ternary: if name is truthy (not empty), show the greeting; otherwise show a placeholder." },
      { line: "{greetings[timeOfDay]}, {name}!", explanation: "Dynamic lookup — reads the greeting from the object using the current timeOfDay, then displays the user's name." },
    ]
  },

  2: {
    title: "Task Manager",
    description: "Practice useState, forms, and list rendering with keys.",
    difficulty: "Intermediate",
    concepts: ["useState", "Forms", "List Rendering", "Keys", "Immutable Updates"],
    sourceCode: `import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React Basics', done: true },
    { id: 2, text: 'Build a Todo App', done: false },
  ]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const pending = tasks.filter(t => !t.done).length;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Task Manager</h2>
      <p style={{ color: '#64748b', marginBottom: '1rem' }}>
        {pending} task{pending !== 1 ? 's' : ''} remaining
      </p>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          style={inputStyle}
        />
        <button onClick={addTask} style={addBtnStyle}>Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={taskStyle}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                style={{ width: '18px', height: '18px' }}
              />
              <span style={{ textDecoration: task.done ? 'line-through' : 'none', color: task.done ? '#94a3b8' : '#1e293b' }}>
                {task.text}
              </span>
            </label>
            <button onClick={() => deleteTask(task.id)} style={delBtnStyle}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const inputStyle = {
  flex: 1, padding: '0.75rem', borderRadius: '8px',
  border: '1px solid #e2e8f0', fontSize: '1rem',
};
const addBtnStyle = {
  padding: '0.75rem 1.25rem', borderRadius: '8px', border: 'none',
  background: '#6366f1', color: '#fff', fontWeight: 600, cursor: 'pointer',
};
const taskStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '0.75rem 1rem', marginBottom: '0.5rem', borderRadius: '8px',
  background: '#f8fafc', border: '1px solid #e2e8f0',
};
const delBtnStyle = {
  background: 'none', border: 'none', color: '#ef4444',
  fontSize: '1rem', cursor: 'pointer', padding: '0.25rem',
};`,
    explanations: [
      { line: "const [tasks, setTasks] = useState([...]);", explanation: "Initialize tasks state with an array of task objects. Each has an id, text, and done boolean." },
      { line: "const [input, setInput] = useState('');", explanation: "Track the current value of the text input for adding new tasks." },
      { line: "if (!input.trim()) return;", explanation: "Guard clause — prevent adding empty tasks. trim() removes whitespace." },
      { line: "setTasks([...tasks, { id: Date.now(), text: input, done: false }]);", explanation: "Spread the existing tasks into a new array and append a new task object. Date.now() gives a unique ID." },
      { line: "setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));", explanation: "Immutable update: map over tasks, find the matching one by id, spread it and toggle 'done'. Others stay unchanged." },
      { line: "setTasks(tasks.filter(t => t.id !== id));", explanation: "Filter creates a new array excluding the task with the matching id. This is the immutable delete pattern." },
      { line: "const pending = tasks.filter(t => !t.done).length;", explanation: "Derived state — computed from tasks on every render. Counts how many tasks are not yet completed." },
      { line: "onKeyDown={(e) => e.key === 'Enter' && addTask()}", explanation: "Listen for the Enter key press on the input. If Enter is pressed, call addTask() for better UX." },
      { line: "key={task.id}", explanation: "Each list item needs a unique key so React can efficiently track additions, removals, and reorders." },
      { line: "textDecoration: task.done ? 'line-through' : 'none'", explanation: "Conditional inline style: if task is done, show strikethrough text. Otherwise, render normally." },
    ]
  },

  3: {
    title: "Character API Explorer",
    description: "Fetch data from an external API and display profiles.",
    difficulty: "Intermediate",
    concepts: ["useEffect", "fetch API", "Loading/Error States", "Async Data"],
    sourceCode: `import React, { useState, useEffect } from 'react';

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

  if (loading) return <div style={centerStyle}>⏳ Loading characters...</div>;
  if (error) return <div style={centerStyle}>❌ Error: {error}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧑‍🤝‍🧑 Character Explorer</h2>
      <input
        placeholder="Search characters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      <div style={gridStyle}>
        {filtered.map(user => (
          <div key={user.id} style={cardStyle}>
            <div style={avatarStyle}>
              {user.name.charAt(0)}
            </div>
            <h4 style={{ margin: '0.5rem 0 0.25rem' }}>{user.name}</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>{user.email}</p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0.25rem 0 0' }}>
              📍 {user.address.city}
            </p>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: '#94a3b8' }}>No characters found.</p>
      )}
    </div>
  );
}

const centerStyle = { padding: '3rem', textAlign: 'center', fontSize: '1.1rem' };
const inputStyle = {
  width: '100%', padding: '0.75rem', borderRadius: '8px',
  border: '1px solid #e2e8f0', fontSize: '1rem', marginBottom: '1.5rem',
};
const gridStyle = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem',
};
const cardStyle = {
  padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0',
  background: '#f8fafc', textAlign: 'center',
};
const avatarStyle = {
  width: '48px', height: '48px', borderRadius: '50%',
  background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: 'white',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontWeight: 700, fontSize: '1.25rem', margin: '0 auto',
};`,
    explanations: [
      { line: "const [users, setUsers] = useState([]);", explanation: "Initialize empty array for user data. It will be filled after the API call completes." },
      { line: "const [loading, setLoading] = useState(true);", explanation: "Track loading state. Starts true because we fetch data immediately on mount." },
      { line: "const [error, setError] = useState(null);", explanation: "Track error state. Null means no error. If the API fails, we store the error message here." },
      { line: "useEffect(() => { ... }, []);", explanation: "useEffect with an empty dependency array runs ONCE on mount. This is the standard pattern for fetching data." },
      { line: "fetch('https://jsonplaceholder.typicode.com/users')", explanation: "The fetch API makes an HTTP GET request to this public API endpoint that returns mock user data." },
      { line: "if (!res.ok) throw new Error('Failed to fetch');", explanation: "fetch doesn't throw on HTTP errors (404, 500). We manually check res.ok and throw if the request failed." },
      { line: ".catch(err => { setError(err.message); ... });", explanation: "The catch block handles any errors (network failure, HTTP errors we threw). Sets the error state to display to the user." },
      { line: "const filtered = users.filter(u => ...);", explanation: "Derived state — filters the users array based on the search term. Runs on every render, no need for separate state." },
      { line: "if (loading) return <div>⏳ Loading...</div>;", explanation: "Early return pattern: if still loading, show a loading indicator instead of the main UI." },
      { line: "key={user.id}", explanation: "Each user from the API has a unique id. We use it as the key for efficient list rendering." },
    ]
  },

  4: {
    title: "Product Catalog",
    description: "Explore filtering, search, and dynamic rendering.",
    difficulty: "Advanced",
    concepts: ["Filtering", "Search", "Derived State", "Dynamic Styling"],
    sourceCode: `import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'React Hoodie', price: 49.99, category: 'Clothing', inStock: true },
  { id: 2, name: 'JavaScript Mug', price: 14.99, category: 'Accessories', inStock: true },
  { id: 3, name: 'Node.js Sticker Pack', price: 7.99, category: 'Accessories', inStock: false },
  { id: 4, name: 'TypeScript Cap', price: 24.99, category: 'Clothing', inStock: true },
  { id: 5, name: 'Git Cheat Sheet Poster', price: 19.99, category: 'Posters', inStock: true },
  { id: 6, name: 'CSS Wizard T-Shirt', price: 34.99, category: 'Clothing', inStock: false },
];

function ProductCatalog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filtered = PRODUCTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || p.category === category;
    const matchStock = !showInStockOnly || p.inStock;
    return matchSearch && matchCategory && matchStock;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒 Product Catalog</h2>

      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              ...chipStyle,
              background: category === cat ? '#6366f1' : '#f1f5f9',
              color: category === cat ? '#fff' : '#475569',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        <input type="checkbox" checked={showInStockOnly} onChange={() => setShowInStockOnly(!showInStockOnly)} />
        Show in-stock only
      </label>

      <div style={gridStyle}>
        {filtered.map(product => (
          <div key={product.id} style={cardStyle}>
            <h4 style={{ margin: '0 0 0.5rem' }}>{product.name}</h4>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#6366f1', margin: '0 0 0.5rem' }}>
              \${product.price.toFixed(2)}
            </p>
            <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '20px', background: product.inStock ? '#dcfce7' : '#fee2e2', color: product.inStock ? '#16a34a' : '#dc2626' }}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '2rem' }}>No products match your filters.</p>}
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '0.75rem', borderRadius: '8px',
  border: '1px solid #e2e8f0', fontSize: '1rem', marginBottom: '1rem',
};
const chipStyle = {
  padding: '0.4rem 1rem', borderRadius: '20px', border: 'none',
  cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
};
const gridStyle = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem',
};
const cardStyle = {
  padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0',
  background: '#f8fafc', textAlign: 'center',
};`,
    explanations: [
      { line: "const PRODUCTS = [...];", explanation: "A static array of product objects defined outside the component. Since it never changes, it doesn't need to be in state." },
      { line: "const [search, setSearch] = useState('');", explanation: "State for the search input. Every keystroke updates this and triggers a re-render with new filtered results." },
      { line: "const [category, setCategory] = useState('All');", explanation: "State to track which category filter is active. 'All' means no category filter." },
      { line: "const [showInStockOnly, setShowInStockOnly] = useState(false);", explanation: "Boolean state for the in-stock checkbox filter. When true, out-of-stock items are hidden." },
      { line: "const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];", explanation: "Extracts unique categories from products using Set, then spreads into an array with 'All' prepended." },
      { line: "const filtered = PRODUCTS.filter(p => { ... });", explanation: "Chain three filter conditions together. A product must match ALL conditions (search, category, stock) to appear." },
      { line: "const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());", explanation: "Case-insensitive search: convert both to lowercase before checking if the product name contains the search term." },
      { line: "const matchStock = !showInStockOnly || p.inStock;", explanation: "If the checkbox is off (!showInStockOnly is true), all products pass. If on, only inStock products pass." },
      { line: "background: category === cat ? '#6366f1' : '#f1f5f9'", explanation: "Dynamic styling: the active category button gets a purple background, inactive ones get light gray." },
      { line: "product.price.toFixed(2)", explanation: "Formats the price to exactly 2 decimal places (e.g., 49.99 instead of 49.9)." },
    ]
  },

  5: {
    title: "Authentication Flow",
    description: "Mock login dashboard using state and conditional rendering.",
    difficulty: "Advanced",
    concepts: ["Auth State", "Form Validation", "Conditional Views", "Protected Content"],
    sourceCode: `import React, { useState } from 'react';

function AuthFlow() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters');
      return;
    }

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
        <div style={avatarStyle}>{user.name.charAt(0).toUpperCase()}</div>
        <h2 style={{ marginTop: '1rem' }}>Welcome, {user.name}!</h2>
        <p style={{ color: '#64748b' }}>{user.email}</p>
        <div style={dashStyle}>
          <div style={statStyle}><strong>12</strong><span>Posts</span></div>
          <div style={statStyle}><strong>340</strong><span>Followers</span></div>
          <div style={statStyle}><strong>28</strong><span>Following</span></div>
        </div>
        <button onClick={handleLogout} style={logoutBtnStyle}>Logout</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '360px', margin: '0 auto' }}>
      <h2>🔐 Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        {error && <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>{error}</p>}
        <button type="submit" style={loginBtnStyle}>Login</button>
      </form>
      <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', marginTop: '1rem' }}>
        Use any email & password (4+ chars)
      </p>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '0.75rem', borderRadius: '8px',
  border: '1px solid #e2e8f0', fontSize: '1rem', marginBottom: '0.75rem',
};
const loginBtnStyle = {
  width: '100%', padding: '0.75rem', borderRadius: '8px', border: 'none',
  background: '#6366f1', color: '#fff', fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
};
const logoutBtnStyle = {
  padding: '0.75rem 2rem', borderRadius: '8px', border: 'none',
  background: '#ef4444', color: '#fff', fontWeight: 600, cursor: 'pointer', marginTop: '1.5rem',
};
const avatarStyle = {
  width: '72px', height: '72px', borderRadius: '50%',
  background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: 'white',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontWeight: 700, fontSize: '2rem', margin: '0 auto',
};
const dashStyle = {
  display: 'flex', justifyContent: 'center', gap: '2rem', margin: '1.5rem 0',
};
const statStyle = {
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  fontSize: '0.9rem', color: '#64748b',
};`,
    explanations: [
      { line: "const [isLoggedIn, setIsLoggedIn] = useState(false);", explanation: "Boolean state that controls which view to show — the login form or the dashboard. Starts as false (logged out)." },
      { line: "const [error, setError] = useState('');", explanation: "Stores validation error messages. Empty string means no error." },
      { line: "const [user, setUser] = useState(null);", explanation: "Holds the authenticated user object. null when not logged in." },
      { line: "e.preventDefault();", explanation: "Prevents the default form submission behavior (page reload). Essential for SPAs." },
      { line: "if (!email.includes('@')) { setError(...); return; }", explanation: "Client-side validation: check if email contains '@'. If not, set an error and exit early." },
      { line: "setUser({ name: email.split('@')[0], email });", explanation: "Create a mock user object. Extracts the username from the email (part before @)." },
      { line: "if (isLoggedIn) { return (...dashboard...); }", explanation: "Conditional rendering at the component level: if logged in, return the entire dashboard view instead of the login form." },
      { line: "handleLogout resets all state", explanation: "On logout, reset all state variables to their initial values. This clears the form and shows the login view again." },
      { line: "{error && <p style={{ color: '#ef4444' }}>{error}</p>}", explanation: "Logical AND rendering: only show the error paragraph if the error string is truthy (not empty)." },
      { line: "user.name.charAt(0).toUpperCase()", explanation: "Takes the first character of the username and capitalizes it for the avatar circle." },
    ]
  }
};
