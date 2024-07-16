
import React, { useState, useEffect } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../services/apiService';
import '../App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', completed: false });
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    handleFetchTodos();
  }, []);

  const handleFetchTodos = () => {
    fetchTodos().then(data => setTodos(data));
  };

  const handleCreateTodo = () => {
    createTodo(newTodo).then(data => {
      setTodos([...todos, data]);
      setNewTodo({ title: '', completed: false });
    });
  };

  const handleUpdateTodo = (todo) => {
    updateTodo(todo.id, todo).then(data => {
      const updatedTodos = todos.map(t => (t.id === todo.id ? data : t));
      setTodos(updatedTodos);
      setEditingTodo(null);
    });
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id).then(() => {
      setTodos(todos.filter(t => t.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>Todos</h1>
      <div>
        <input
          type="text"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          placeholder="Title"
        />
        <label>
          <input
            type="checkbox"
            checked={newTodo.completed}
            onChange={(e) => setNewTodo({ ...newTodo, completed: e.target.checked })}
          />
          Completed
        </label>
        <button onClick={handleCreateTodo}>Create Todo</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editingTodo && editingTodo.id === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editingTodo.title}
                  onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
                />
                <label>
                  <input
                    type="checkbox"
                    checked={editingTodo.completed}
                    onChange={(e) => setEditingTodo({ ...editingTodo, completed: e.target.checked })}
                  />
                  Completed
                </label>
                <button onClick={() => handleUpdateTodo(editingTodo)}>Save</button>
              </div>
            ) : (
              <div>
                <h2>{todo.title}</h2>
                <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
                <button onClick={() => setEditingTodo(todo)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
