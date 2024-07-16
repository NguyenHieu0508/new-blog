import React, { useState, useEffect } from 'react';
import { fetchPosts, createPost, updatePost, deletePost } from '../services/apiService';
import '../App.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const handleFetchPosts = () => {
    fetchPosts().then(data => setPosts(data));
  };

  const handleCreatePost = () => {
    createPost(newPost).then(data => {
      setPosts([...posts, data]);
      setNewPost({ title: '', body: '' });
    });
  };

  const handleUpdatePost = (post) => {
    updatePost(post.id, post).then(data => {
      const updatedPosts = posts.map(p => (p.id === post.id ? data : p));
      setPosts(updatedPosts);
      setEditingPost(null);
    });
  };

  const handleDeletePost = (id) => {
    deletePost(id).then(() => {
      setPosts(posts.filter(p => p.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>Posts</h1>
      <div>
        <input
          type="text"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          placeholder="Body"
        ></textarea>
        <button onClick={handleCreatePost}>Create Post</button>
      </div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {editingPost && editingPost.id === post.id ? (
              <div>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                />
                <textarea
                  value={editingPost.body}
                  onChange={(e) => setEditingPost({ ...editingPost, body: e.target.value })}
                ></textarea>
                <button onClick={() => handleUpdatePost(editingPost)}>Save</button>
              </div>
            ) : (
              <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={() => setEditingPost(post)}>Edit</button>
                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
