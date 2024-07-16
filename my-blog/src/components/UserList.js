import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../services/apiService';
import '../App.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    handleFetchUsers();
  }, []);

  const handleFetchUsers = () => {
    fetchUsers().then(data => setUsers(data));
  };

  const handleCreateUser = () => {
    createUser(newUser).then(data => {
      setUsers([...users, data]);
      setNewUser({ name: '', email: '' });
    });
  };

  const handleUpdateUser = (user) => {
    updateUser(user.id, user).then(data => {
      const updatedUsers = users.map(u => (u.id === user.id ? data : u));
      setUsers(updatedUsers);
      setEditingUser(null);
    });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter(u => u.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>Users</h1>
      <div>
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          placeholder="Email"
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {editingUser && editingUser.id === user.id ? (
              <div>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                />
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                />
                <button onClick={() => handleUpdateUser(editingUser)}>Save</button>
              </div>
            ) : (
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <button onClick={() => setEditingUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
