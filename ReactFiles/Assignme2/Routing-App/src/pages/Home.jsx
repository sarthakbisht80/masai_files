import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Blog Posts</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;