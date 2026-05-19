// Detailed reading material for each syllabus module
export const moduleContent = {
  1: {
    title: "React Basics & JSX",
    subtitle: "Introduction to React, Virtual DOM, and JSX Syntax",
    sections: [
      {
        heading: "What is React?",
        content: `React is a JavaScript library created by Facebook for building fast, interactive user interfaces. Instead of manipulating the real DOM directly (which is slow), React uses a **Virtual DOM** — a lightweight copy of the actual DOM kept in memory. When state changes, React compares the new Virtual DOM with the previous snapshot (a process called **diffing**), then applies only the minimal set of changes to the real DOM (called **reconciliation**). This makes updates incredibly efficient.`,
        code: null
      },
      {
        heading: "Advantages of React",
        content: `• **Component-Based Architecture** — Build encapsulated, reusable pieces of UI.\n• **Virtual DOM** — Only updates what changed, leading to high performance.\n• **Unidirectional Data Flow** — Data flows from parent to child via props, making apps predictable.\n• **Huge Ecosystem** — React Router, Redux, Next.js, and thousands of community packages.\n• **Cross-Platform** — Use React Native to build mobile apps with the same concepts.`,
        code: null
      },
      {
        heading: "Creating React Elements",
        content: `Under the hood, JSX compiles down to \`React.createElement()\` calls. Understanding this helps you see that JSX is just syntactic sugar.`,
        code: `// Without JSX (the hard way)
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, React!'
);

// With JSX (the easy way) — identical result
const element = <h1 className="greeting">Hello, React!</h1>;`
      },
      {
        heading: "JSX Syntax & Expressions",
        content: `JSX lets you write HTML-like syntax inside JavaScript. You can embed any JavaScript expression inside curly braces \`{}\`. Remember: JSX uses \`className\` instead of \`class\`, and every tag must be closed.`,
        code: `function WelcomeBanner() {
  const studentName = "Sanjay";
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : "Good Evening";

  return (
    <div className="banner">
      <h1>{greeting}, {studentName}! 👋</h1>
      <p>You have been learning for {Math.floor(Math.random() * 30)} days.</p>
      {/* This is a JSX comment */}
    </div>
  );
}`
      }
    ]
  },

  2: {
    title: "Components & Props",
    subtitle: "Building Reusable UI with Functional Components and Data Flow",
    sections: [
      {
        heading: "What are Components?",
        content: `Components are the building blocks of any React application. Think of them as custom HTML elements that encapsulate their own structure, style, and logic. Every React app is a tree of components. The convention is to name components with **PascalCase** (e.g., \`UserCard\`, not \`userCard\`).`,
        code: `// A simple functional component
function StudentCard() {
  return (
    <div className="card">
      <h2>React Student</h2>
      <p>Currently learning Components & Props</p>
    </div>
  );
}

// Usage: <StudentCard />`
      },
      {
        heading: "Props — Passing Data to Components",
        content: `Props (short for "properties") let you pass data from a parent component to a child component. Props are **read-only** — a child should never modify its own props. This one-way data flow makes your app predictable and easy to debug.`,
        code: `// Parent passes data via props
function App() {
  return (
    <div>
      <StudentCard name="Sanjay" course="React" progress={75} />
      <StudentCard name="Priya" course="Node.js" progress={40} />
    </div>
  );
}

// Child receives props as an object
function StudentCard({ name, course, progress }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <div className="progress-bar">
        <div style={{ width: \`\${progress}%\` }}>{progress}%</div>
      </div>
    </div>
  );
}`
      },
      {
        heading: "Component Composition",
        content: `Composition means building complex UIs by combining simpler components. Use \`children\` prop to create wrapper/layout components that don't know their content ahead of time.`,
        code: `// A reusable Card wrapper using children
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  );
}

// Compose different content inside the same Card
function App() {
  return (
    <>
      <Card title="Welcome">
        <p>This card has a paragraph inside.</p>
      </Card>
      <Card title="Stats">
        <ul>
          <li>Modules completed: 3</li>
          <li>Quiz score: 85%</li>
        </ul>
      </Card>
    </>
  );
}`
      }
    ]
  },

  3: {
    title: "State & Events",
    subtitle: "Managing Interactive UIs with useState and Event Handlers",
    sections: [
      {
        heading: "useState Hook",
        content: `State is data that can change over time and triggers a re-render when updated. The \`useState\` hook returns an array with two items: the current state value and a setter function. **Never modify state directly** — always use the setter.`,
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`
      },
      {
        heading: "Event Handling in React",
        content: `React events are named using camelCase (\`onClick\`, not \`onclick\`). You pass a function reference, not a function call. Common events: \`onClick\`, \`onChange\`, \`onSubmit\`, \`onKeyDown\`, \`onMouseEnter\`.`,
        code: `function LoginForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log('Logging in with:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button type="submit">Login</button>
    </form>
  );
}`
      },
      {
        heading: "Updating Objects & Arrays in State (Immutability)",
        content: `React detects changes by comparing references. If you mutate an object or array in place, React won't know it changed. Always create a **new copy** with the spread operator.`,
        code: `function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build a project', done: false },
  ]);

  // ✅ Adding — spread the old array
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  // ✅ Updating — map and return new objects
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  // ✅ Deleting — filter creates a new array
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
}`
      }
    ]
  },

  4: {
    title: "Rendering & Lists",
    subtitle: "Conditional Rendering, Lists with Keys, and Reconciliation",
    sections: [
      {
        heading: "Conditional Rendering",
        content: `In React, you can render different UI based on conditions using ternary operators, logical AND (\`&&\`), or early returns. This is how you show/hide elements, display loading states, or switch between views.`,
        code: `function Dashboard({ isLoggedIn, isAdmin, notifications }) {
  // Early return pattern
  if (!isLoggedIn) {
    return <p>Please log in to view your dashboard.</p>;
  }

  return (
    <div>
      <h1>Welcome back!</h1>

      {/* Ternary — show one thing or another */}
      {isAdmin ? <AdminPanel /> : <UserPanel />}

      {/* Logical AND — show only if truthy */}
      {notifications.length > 0 && (
        <span className="badge">{notifications.length} new</span>
      )}
    </div>
  );
}`
      },
      {
        heading: "Rendering Lists with Keys",
        content: `Use \`.map()\` to transform arrays into JSX elements. Every list item needs a unique \`key\` prop so React can efficiently track which items changed, were added, or removed. **Never use array index as key** if the list can be reordered or filtered.`,
        code: `function StudentList() {
  const students = [
    { id: 'S101', name: 'Sanjay', score: 92 },
    { id: 'S102', name: 'Priya', score: 88 },
    { id: 'S103', name: 'Ravi', score: 95 },
  ];

  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>
          {student.name} — Score: {student.score}
        </li>
      ))}
    </ul>
  );
}`
      },
      {
        heading: "Reconciliation & Batch Updating",
        content: `React batches multiple state updates that happen in the same event handler into a single re-render for performance. The reconciliation algorithm compares the previous and new Virtual DOM trees, finds the differences, and applies only those changes to the real DOM. This is why React is fast — it never does a full page re-render.`,
        code: `function BatchExample() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    // React batches both updates into ONE re-render
    setCount(c => c + 1);
    setFlag(f => !f);
    // Component only re-renders once, not twice!
  };

  console.log('Rendered!'); // Logs once per click

  return (
    <button onClick={handleClick}>
      Count: {count} | Flag: {flag.toString()}
    </button>
  );
}`
      }
    ]
  },

  5: {
    title: "Side Effects & Data Fetching",
    subtitle: "Using useEffect for Side Effects and Fetching Data from APIs",
    sections: [
      {
        heading: "useEffect & Rules of Hooks",
        content: `Side effects are operations that reach outside the component: API calls, timers, subscriptions, or DOM manipulation. \`useEffect\` runs after the component renders. The dependency array controls when it re-runs:\n• **No array** — runs after every render\n• **Empty array \`[]\`** — runs once on mount\n• **With dependencies \`[x, y]\`** — runs when x or y changes`,
        code: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Runs once on mount (empty dependency array)
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function — runs on unmount
    return () => clearInterval(interval);
  }, []);

  return <p>Timer: {seconds}s</p>;
}`
      },
      {
        heading: "API Calls with fetch",
        content: `Fetching data is the most common side effect. Use \`useEffect\` + \`fetch\` to load data when a component mounts. Always handle loading and error states to provide a good user experience.`,
        code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
      .then(res => {
        if (!res.ok) throw new Error('User not found');
        return res.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <h2>{user.name} — {user.email}</h2>;
}`
      },
      {
        heading: "Scheduler Methods & Clearing Intervals",
        content: `\`setTimeout\` and \`setInterval\` are common in React for delayed actions or repeated updates. Always clear them in the cleanup function to prevent memory leaks when the component unmounts.`,
        code: `function Notification() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (!visible) return null;

  return (
    <div className="notification">
      This message will disappear in 5 seconds!
    </div>
  );
}`
      }
    ]
  },

  6: {
    title: "Routing & Navigation",
    subtitle: "Building Single Page Applications with React Router",
    sections: [
      {
        heading: "Multi-page vs SPA",
        content: `Traditional websites reload the entire page on navigation. **Single Page Applications (SPAs)** load once, then dynamically swap content without full reloads — giving a native-app-like feel. React Router is the standard library that enables this by mapping URL paths to components.`,
        code: null
      },
      {
        heading: "React Router & Path Parameters",
        content: `Install with \`npm install react-router-dom\`. Wrap your app in \`BrowserRouter\`, define routes with \`Routes\` and \`Route\`, and link between pages with \`Link\` or \`NavLink\`.`,
        code: `import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

// Dynamic route — :id is a path parameter
function StudentDetail() {
  const { id } = useParams();
  return <h2>Viewing student #{id}</h2>;
}`
      },
      {
        heading: "useNavigate & Navigate",
        content: `\`useNavigate\` gives you programmatic navigation — redirect users after form submission, login, or any action. The \`Navigate\` component handles declarative redirects.`,
        code: `import { useNavigate, Navigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // After successful login...
    setIsLoggedIn(true);
    navigate('/dashboard'); // Programmatic redirect
  };

  return <button onClick={handleLogin}>Log In</button>;
}

// Declarative redirect — protect a route
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}`
      }
    ]
  },

  7: {
    title: "Forms & Storage",
    subtitle: "Handling Forms, Inputs, and Local Browser Storage",
    sections: [
      {
        heading: "Controlled vs Uncontrolled Inputs",
        content: `In a **controlled** input, React state is the single source of truth — the input value is always driven by state. In an **uncontrolled** input, the DOM itself holds the value and you read it with a ref. Controlled inputs are preferred because they give you full control over validation and formatting.`,
        code: `import { useState, useRef } from 'react';

// Controlled — React drives the value
function ControlledForm() {
  const [name, setName] = useState('');

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Type your name"
    />
  );
}

// Uncontrolled — DOM drives the value
function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert('Name: ' + inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} placeholder="Type your name" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}`
      },
      {
        heading: "Local Storage & Cookies",
        content: `\`localStorage\` persists data across browser sessions (even after closing the tab). It stores key-value pairs as strings. Use \`JSON.stringify\` to save objects and \`JSON.parse\` to read them back. Cookies are similar but have expiration dates and are sent with HTTP requests.`,
        code: `function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Current theme: {theme}
    </button>
  );
}`
      },
      {
        heading: "JSON Methods",
        content: `\`JSON.stringify()\` converts a JavaScript object to a JSON string (for storage or sending to a server). \`JSON.parse()\` converts a JSON string back into a JavaScript object. These are essential for working with localStorage and API responses.`,
        code: `const student = { name: "Sanjay", scores: [90, 85, 92] };

// Object → String (for storage)
const jsonString = JSON.stringify(student);
console.log(jsonString);
// '{"name":"Sanjay","scores":[90,85,92]}'

// String → Object (reading back)
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "Sanjay"
console.log(parsed.scores[0]); // 90`
      }
    ]
  },

  8: {
    title: "Authentication & Context API",
    subtitle: "Managing Global State and Securing Routes",
    sections: [
      {
        heading: "Authentication vs Authorization",
        content: `**Authentication** answers "Who are you?" — verifying identity (login with email/password, OAuth, etc.).\n**Authorization** answers "What can you do?" — checking permissions (admin vs regular user, access control).\n\nIn React apps, authentication typically involves sending credentials to a backend, receiving a token (usually JWT), and storing it for subsequent requests.`,
        code: null
      },
      {
        heading: "JWT Token Handling & Protected Routes",
        content: `A **JSON Web Token (JWT)** is a compact, URL-safe token that contains encoded user information. After login, the server sends a JWT. You store it (usually in localStorage or httpOnly cookies) and include it in the Authorization header of future API requests.`,
        code: `// Storing and using a JWT token
const login = async (email, password) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  localStorage.setItem('token', data.token);
};

// Sending token with API requests
const fetchProtectedData = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('/api/dashboard', {
    headers: { Authorization: \`Bearer \${token}\` },
  });
  return res.json();
};`
      },
      {
        heading: "Context API, Provider & useContext",
        content: `The **Context API** solves prop drilling — passing data through many levels of components. Create a context, wrap your app with a Provider, and consume the value with \`useContext\` anywhere in the tree.`,
        code: `import { createContext, useContext, useState } from 'react';

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create a Provider component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook for easy access
function useAuth() {
  return useContext(AuthContext);
}

// 4. Use it anywhere!
function Navbar() {
  const { user, logout } = useAuth();
  return user ? (
    <button onClick={logout}>Logout {user.name}</button>
  ) : (
    <a href="/login">Login</a>
  );
}`
      }
    ]
  },

  9: {
    title: "Best Practices & Debugging",
    subtitle: "Common Pitfalls and How to Debug React Applications",
    sections: [
      {
        heading: "Common Mistakes",
        content: `Here are the most frequent mistakes beginners make in React:\n• **Mutating state directly** — Always use the setter function.\n• **Missing keys in lists** — React needs unique keys for efficient updates.\n• **Forgetting to export/import** — Use \`export default\` or named exports consistently.\n• **Calling hooks conditionally** — Hooks must always be called in the same order at the top level.\n• **Infinite loops in useEffect** — Forgetting the dependency array or including changing references.`,
        code: `// ❌ WRONG — Mutating state directly
const [items, setItems] = useState(['a', 'b']);
items.push('c'); // This does nothing visible!

// ✅ RIGHT — Create a new array
setItems([...items, 'c']);

// ❌ WRONG — Hook inside a condition
if (isLoggedIn) {
  const [name, setName] = useState(''); // BREAKS!
}

// ✅ RIGHT — Hooks at the top level
const [name, setName] = useState('');
// Use the condition inside the render instead`
      },
      {
        heading: "Debugging with React DevTools",
        content: `**React DevTools** is a browser extension (Chrome/Firefox) that lets you:\n• Inspect the component tree and see each component's props and state.\n• Track which components re-render (use the Profiler tab).\n• Edit state live to test different scenarios.\n• View the Context values flowing through your app.\n\nInstall from the Chrome Web Store, then open DevTools → "Components" and "Profiler" tabs.`,
        code: `// Useful debugging techniques

// 1. Console.log inside components
function MyComponent({ data }) {
  console.log('MyComponent rendered with:', data);
  return <div>{data.name}</div>;
}

// 2. useEffect to track state changes
useEffect(() => {
  console.log('Count changed to:', count);
}, [count]);

// 3. React.StrictMode (in index.js) — catches bugs early
//    It intentionally double-renders in dev mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
      },
      {
        heading: "Third-party Packages",
        content: `The React ecosystem is massive. Here are essential packages every developer should know:\n• **react-router-dom** — Client-side routing\n• **axios** — HTTP client (alternative to fetch)\n• **react-icons** — Thousands of icons from popular icon libraries\n• **react-hot-toast** — Beautiful toast notifications\n• **framer-motion** — Powerful animations\n• **zustand / redux-toolkit** — State management for large apps\n\nAlways check bundle size (bundlephobia.com) before adding a dependency!`,
        code: `// Example: Using axios for API calls
import axios from 'axios';

const fetchUsers = async () => {
  try {
    const { data } = await axios.get('/api/users');
    return data;
  } catch (error) {
    console.error('API Error:', error.response?.data);
  }
};

// Example: Using react-hot-toast
import toast from 'react-hot-toast';

const saveData = async () => {
  toast.promise(
    axios.post('/api/save', formData),
    {
      loading: 'Saving...',
      success: 'Saved successfully! 🎉',
      error: 'Could not save. Try again.',
    }
  );
};`
      }
    ]
  }
};
