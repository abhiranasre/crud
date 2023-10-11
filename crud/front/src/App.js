import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (inputText.trim() !== '') {
      if (editIndex !== null) {
        tasks[editIndex] = inputText;
        setEditIndex(null);
      } else {
        tasks.push(inputText);
      }
      setInputText('');
      setTasks([...tasks]);
    }
  };

  const editItem = (index) => {
    setInputText(tasks[index]);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      tasks.splice(index, 1);
      setTasks([...tasks]);
      setEditIndex(null);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div>
        <button onClick={addItem}>
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              style={{
                border: '1px solid black', 
                width:"40%",
                marginLeft:"30%",
                padding:"0.5rem",
                marginBottom: '5px', 
              }}
              key={index}
            >
              <span style={{ marginRight: '70%' }}>{task}</span>
              <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
