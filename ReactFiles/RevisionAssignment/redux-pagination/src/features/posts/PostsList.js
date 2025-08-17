import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {currentItems.map((post) => (
          <li key={post.id} style={{ marginBottom: "15px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              backgroundColor: currentPage === i + 1 ? "lightblue" : "white",
              border: "1px solid #ccc",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsList;
