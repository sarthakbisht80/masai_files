import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <strong>Tags:</strong>
        <ul>
          {post.tags.map(tag => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostDetails;