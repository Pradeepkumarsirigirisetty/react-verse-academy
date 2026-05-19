import React, { useState } from 'react';

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
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ marginBottom: '0.25rem' }}>📋 Task Manager</h2>
      <p style={{ color: '#64748b', marginBottom: '1rem', fontSize: '0.9rem' }}>
        {pending} task{pending !== 1 ? 's' : ''} remaining
      </p>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem' }}
        />
        <button onClick={addTask} style={{
          padding: '0.75rem 1.25rem', borderRadius: '8px', border: 'none',
          background: '#6366f1', color: '#fff', fontWeight: 600, cursor: 'pointer',
        }}>Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0.75rem 1rem', marginBottom: '0.5rem', borderRadius: '8px',
            background: '#f8fafc', border: '1px solid #e2e8f0',
          }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, cursor: 'pointer' }}>
              <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} style={{ width: '18px', height: '18px' }} />
              <span style={{ textDecoration: task.done ? 'line-through' : 'none', color: task.done ? '#94a3b8' : '#1e293b' }}>
                {task.text}
              </span>
            </label>
            <button onClick={() => deleteTask(task.id)} style={{
              background: 'none', border: 'none', color: '#ef4444', fontSize: '1rem', cursor: 'pointer',
            }}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
