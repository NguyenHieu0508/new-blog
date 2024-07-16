import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostList from './components/PostList';
import CommentList from './components/CommentList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import TodoList from './components/TodoList';
import UserList from './components/UserList';


const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <ul>
           <li><Link to="/posts"><i className="ti-write"></i> Posts</Link></li>
        <li><Link to="/comments"><i className="ti-comment-alt"></i> Comments</Link></li>
        <li><Link to="/albums"><i className="ti-image"></i> Albums</Link></li>
        <li><Link to="/photos"><i className="ti-camera"></i> Photos</Link></li>
        <li><Link to="/todos"><i className="ti-check-box"></i> Todos</Link></li>
        <li><Link to="/users"><i className="ti-user"></i> Users</Link></li>
      </ul>
    </nav>
  </div>
);

const App = () => {
  console.log("Rendering App");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/comments" element={<CommentList />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/photos" element={<PhotoList />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
