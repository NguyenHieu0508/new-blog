import React, { useState, useEffect } from 'react';
import { fetchPhotos, createPhoto, updatePhoto, deletePhoto } from '../services/apiService';
import '../App.css';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [newPhoto, setNewPhoto] = useState({ title: '', url: '', thumbnailUrl: '' });
  const [editingPhoto, setEditingPhoto] = useState(null);

  useEffect(() => {
    handleFetchPhotos();
  }, []);

  const handleFetchPhotos = () => {
    fetchPhotos().then(data => setPhotos(data));
  };

  const handleCreatePhoto = () => {
    createPhoto(newPhoto).then(data => {
      setPhotos([...photos, data]);
      setNewPhoto({ title: '', url: '', thumbnailUrl: '' });
    });
  };

  const handleUpdatePhoto = (photo) => {
    updatePhoto(photo.id, photo).then(data => {
      const updatedPhotos = photos.map(p => (p.id === photo.id ? data : p));
      setPhotos(updatedPhotos);
      setEditingPhoto(null);
    });
  };

  const handleDeletePhoto = (id) => {
    deletePhoto(id).then(() => {
      setPhotos(photos.filter(p => p.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>Photos</h1>
      <div>
        <input
          type="text"
          value={newPhoto.title}
          onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
          placeholder="Title"
        />
        <input
          type="text"
          value={newPhoto.url}
          onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
          placeholder="URL"
        />
        <input
          type="text"
          value={newPhoto.thumbnailUrl}
          onChange={(e) => setNewPhoto({ ...newPhoto, thumbnailUrl: e.target.value })}
          placeholder="Thumbnail URL"
        />
        <button onClick={handleCreatePhoto}>Create Photo</button>
      </div>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            {editingPhoto && editingPhoto.id === photo.id ? (
              <div>
                <input
                  type="text"
                  value={editingPhoto.title}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, title: e.target.value })}
                />
                <input
                  type="text"
                  value={editingPhoto.url}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, url: e.target.value })}
                />
                <input
                  type="text"
                  value={editingPhoto.thumbnailUrl}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, thumbnailUrl: e.target.value })}
                />
                <button onClick={() => handleUpdatePhoto(editingPhoto)}>Save</button>
              </div>
            ) : (
              <div>
                <h2>{photo.title}</h2>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <button onClick={() => setEditingPhoto(photo)}>Edit</button>
                <button onClick={() => handleDeletePhoto(photo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
