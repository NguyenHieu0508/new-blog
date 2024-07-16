import React, { useState, useEffect } from 'react';
import { fetchAlbums, createAlbum, updateAlbum, deleteAlbum } from '../services/apiService';
import '../App.css';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState({ title: '' });
  const [editingAlbum, setEditingAlbum] = useState(null);

  useEffect(() => {
    handleFetchAlbums();
  }, []);

  const handleFetchAlbums = () => {
    fetchAlbums().then(data => setAlbums(data));
  };

  const handleCreateAlbum = () => {
    createAlbum(newAlbum).then(data => {
      setAlbums([...albums, data]);
      setNewAlbum({ title: '' });
    });
  };

  const handleUpdateAlbum = (album) => {
    updateAlbum(album.id, album).then(data => {
      const updatedAlbums = albums.map(a => (a.id === album.id ? data : a));
      setAlbums(updatedAlbums);
      setEditingAlbum(null);
    });
  };

  const handleDeleteAlbum = (id) => {
    deleteAlbum(id).then(() => {
      setAlbums(albums.filter(a => a.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>Albums</h1>
      <div>
        <input
          type="text"
          value={newAlbum.title}
          onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })}
          placeholder="Title"
        />
        <button onClick={handleCreateAlbum}>Create Album</button>
      </div>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {editingAlbum && editingAlbum.id === album.id ? (
              <div>
                <input
                  type="text"
                  value={editingAlbum.title}
                  onChange={(e) => setEditingAlbum({ ...editingAlbum, title: e.target.value })}
                />
                <button onClick={() => handleUpdateAlbum(editingAlbum)}>Save</button>
              </div>
            ) : (
              <div>
                <h2>{album.title}</h2>
                <button onClick={() => setEditingAlbum(album)}>Edit</button>
                <button onClick={() => handleDeleteAlbum(album.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
