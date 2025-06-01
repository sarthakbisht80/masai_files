import { useState ,useRef ,useEffect} from 'react'

import './App.css'

function App() 
{
  const currentPage = useRef(1);
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error('Failed to fetch characters:', error);
    
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters(currentPage.current);
  }, []);

  const handlePageChange = (page) => {
    currentPage.current = page;
    fetchCharacters(page);
  };

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>

      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <div className="grid">
          {characters.map((char) => (
            <div key={char.id} className="card">
              <img src={char.image} alt={char.name} />
              <p>{char.name}</p>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              backgroundColor: page === currentPage.current ? '#00bfff' : '#f0f0f0',
              color: page === currentPage.current ? 'white' : 'black',
              margin: '5px',
              padding: '8px 12px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {page}
          </button>
        ))}
        
      </div>
    </div>
  );
}
export default App;
