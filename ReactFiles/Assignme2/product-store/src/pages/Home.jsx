import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setDisplayed(data.products);
      });

    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(setCategories);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    if (sort === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setDisplayed(filtered);
  }, [category, sort, products]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>All Products</h2>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {displayed.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
