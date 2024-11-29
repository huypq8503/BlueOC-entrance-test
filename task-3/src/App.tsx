import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost  } from './postsSlice';
import { RootState, AppDispatch } from './store';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const [userId, setUserId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const handleAddPost = () => {
    if (userId && title && body) {
      dispatch(addPost({ userId: parseInt(userId, 10), title, body })); 
      setUserId('')
      setTitle(''); 
      setBody('');
    }
  };
  return (
    <div>
        <div style={{ marginBottom: '20px' }}>
        <h2>Add New Post</h2>
        <input
          type="number"
          placeholder="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleAddPost} style={{ padding: '5px 10px' }}>
          Add Post
        </button>
      </div>
      <table border={1} style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
          <th>user ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
