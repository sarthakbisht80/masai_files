import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);//saved in posts 
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Get current page's posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDropdownChange = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Posts</h2>

      {/* Posts list */}
      {currentPosts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ddd",
            margin: "8px 0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

      {/* Pagination controls */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        {/* Numbered pagination */}
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => handlePageClick(num)}
              style={{
                margin: "0 5px",
                padding: "5px 10px",
                borderRadius: "3px",
                border: "1px solid #ccc",
                backgroundColor:
                  currentPage === num ? "#007bff" : "white",
                color: currentPage === num ? "white" : "black",
                cursor: "pointer",
              }}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Page dropdown */}
        <div style={{ marginLeft: "15px" }}>
          <select
            value={currentPage}
            onChange={handleDropdownChange}
            style={{ padding: "5px" }}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Page {num}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
