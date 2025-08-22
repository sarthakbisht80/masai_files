import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

export default function Posts() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {data.slice(0, 10).map((post) => ( // show first 10
            <li key={post.id}>
              <strong style={{
                color:"red",
                backgroundColor:"black"
              }}>{post.title}</strong>
              <p style={{
                color:"yellow",
                  backgroundColor:"black"
              }}>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
