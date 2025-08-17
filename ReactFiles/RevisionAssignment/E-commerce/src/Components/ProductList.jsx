import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';
import { useCart } from '../context/CartContext';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.products);
  const { addItem } = useCart();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {items.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
          <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <button onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
