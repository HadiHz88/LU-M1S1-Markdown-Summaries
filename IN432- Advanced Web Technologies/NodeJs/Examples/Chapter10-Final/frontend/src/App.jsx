import { useState } from 'react';
import './App.css';

const API = 'http://localhost:5000/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loaded, setLoaded] = useState(false);

  // Load tasks
  async function loadTasks() {
    const res = await fetch(API + '/tasks');
    const data = await res.json();
    setTasks(data);
    setLoaded(true);
  }

  // Add task
  async function addTask(e) {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    const res = await fetch(API + '/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask })
    });
    const task = await res.json();
    setTasks([task, ...tasks]);
    setNewTask('');
  }

  // Delete task
  async function deleteTask(id) {
    await fetch(API + '/tasks/' + id, { method: 'DELETE' });
    setTasks(tasks.filter(t => t._id !== id));
  }

  // Toggle complete
  async function toggleTask(id) {
    const res = await fetch(API + '/tasks/' + id + '/toggle', { method: 'PATCH' });
    const updated = await res.json();
    setTasks(tasks.map(t => t._id === id ? updated : t));
  }

  return (
    <div className="app">
      <h1>📝 Task Manager</h1>
      
      {!loaded ? (
        <button onClick={loadTasks} className="load-btn">Load Tasks</button>
      ) : (
        <>
          <form onSubmit={addTask} className="task-form">
            <input
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              placeholder="New task..."
            />
            <button type="submit">Add</button>
          </form>
          
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add one above!</p>
          ) : (
            <ul className="task-list">
              {tasks.map(task => (
                <li key={task._id} className={task.completed ? 'completed' : ''}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task._id)}
                  />
                  <span className="task-title">{task.title}</span>
                  <button onClick={() => deleteTask(task._id)}>🗑️</button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default App;
