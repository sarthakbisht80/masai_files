import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentPage = useRef(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setTodos(data);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
      setLoading(false);
    };

    fetchTodos();
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      currentPage.current = page;
    }
  };

  const indexOfLastItem = currentPage.current * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTodos = todos.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="app">
      <h1>Todo List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="todo-list">
          {currentTodos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              {todo.title}
            </li>
          ))}
        </ul>
      )}

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage.current - 1)}
          disabled={currentPage.current === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              backgroundColor:
                page === currentPage.current ? '#007bff' : '#e0e0e0',
              color: page === currentPage.current ? '#fff' : '#000',
              fontWeight: page === currentPage.current ? 'bold' : 'normal',
              margin: '0 5px',
              padding: '6px 12px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage.current + 1)}
          disabled={currentPage.current === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
