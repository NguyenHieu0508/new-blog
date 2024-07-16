import React, { useState, useEffect } from 'react';
import { fetchComments, createComment, updateComment, deleteComment } from '../services/apiService';
import '../App.css';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', body: '' });
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {
    handleFetchComments();
  }, []);

  const handleFetchComments = () => {
    fetchComments().then(data => setComments(data));
  };

  const handleCreateComment = () => {
    createComment(newComment).then(data => {
      setComments([...comments, data]);
      setNewComment({ name: '', body: '' });
    });
  };

  const handleUpdateComment = (comment) => {
    updateComment(comment.id, comment).then(data => {
      const updatedComments = comments.map(c => (c.id === comment.id ? data : c));
      setComments(updatedComments);
      setEditingComment(null);
    });
  };

  const handleDeleteComment = (id) => {
    deleteComment(id).then(() => {
      setComments(comments.filter(c => c.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>Comments</h1>
      <div>
        <input
          type="text"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
          placeholder="Name"
        />
        <textarea
          value={newComment.body}
          onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          placeholder="Body"
        ></textarea>
        <button onClick={handleCreateComment}>Create Comment</button>
      </div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {editingComment && editingComment.id === comment.id ? (
              <div>
                <input
                  type="text"
                  value={editingComment.name}
                  onChange={(e) => setEditingComment({ ...editingComment, name: e.target.value })}
                />
                <textarea
                  value={editingComment.body}
                  onChange={(e) => setEditingComment({ ...editingComment, body: e.target.value })}
                ></textarea>
                <button onClick={() => handleUpdateComment(editingComment)}>Save</button>
              </div>
            ) : (
              <div>
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
                <button onClick={() => setEditingComment(comment)}>Edit</button>
                <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
