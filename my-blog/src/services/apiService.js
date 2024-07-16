const API_URL = 'https://jsonplaceholder.typicode.com';

// CRUD functions for Posts
export const fetchPosts = () => {
  return fetch(`${API_URL}/posts`)
    .then(response => response.json());
};

export const createPost = (post) => {
  return fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(response => response.json());
};

export const updatePost = (id, post) => {
  return fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(response => response.json());
};

export const deletePost = (id) => {
  return fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE'
  }).then(response => response.ok);
};

// CRUD functions for Comments
export const fetchComments = () => {
  return fetch(`${API_URL}/comments`)
    .then(response => response.json());
};

export const createComment = (comment) => {
  return fetch(`${API_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(response => response.json());
};

export const updateComment = (id, comment) => {
  return fetch(`${API_URL}/comments/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(response => response.json());
};

export const deleteComment = (id) => {
  return fetch(`${API_URL}/comments/${id}`, {
    method: 'DELETE'
  }).then(response => response.ok);
};

// CRUD functions for Albums
export const fetchAlbums = () => {
  return fetch(`${API_URL}/albums`)
    .then(response => response.json());
};

export const createAlbum = (album) => {
  return fetch(`${API_URL}/albums`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(album)
  }).then(response => response.json());
};

export const updateAlbum = (id, album) => {
  return fetch(`${API_URL}/albums/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(album)
  }).then(response => response.json());
};

export const deleteAlbum = (id) => {
  return fetch(`${API_URL}/albums/${id}`, {
    method: 'DELETE'
  }).then(response => response.ok);
};

// CRUD functions for Photos
export const fetchPhotos = () => {
  return fetch(`${API_URL}/photos`)
    .then(response => response.json());
};

export const createPhoto = (photo) => {
  return fetch(`${API_URL}/photos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(photo)
  }).then(response => response.json());
};

export const updatePhoto = (id, photo) => {
  return fetch(`${API_URL}/photos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(photo)
  }).then(response => response.json());
};

export const deletePhoto = (id) => {
  return fetch(`${API_URL}/photos/${id}`, {
    method: 'DELETE'
  }).then(response => response.ok);
};

// CRUD functions for Todos
export const fetchTodos = () => {
  return fetch(`${API_URL}/todos`)
    .then(response => response.json());
};

export const createTodo = (todo) => {
  return fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(response => response.json());
};

export const updateTodo = (id, todo) => {
  return fetch(`${API_URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(response => response.json());
};

export const deleteTodo = (id) => {
  return fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE'
  }).then(response => response.ok);
};

// CRUD functions for Users
export const fetchUsers = () => {
  return fetch(`${API_URL}/users`)
    .then(response => response.json());
};

export const createUser = (user) => {
  return fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => response.json());
};

export const updateUser = (id, user) => {
  return fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => response.json());
};

export const deleteUser = (id) => {
  return fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE'
  }).then(response => response.ok);
};
