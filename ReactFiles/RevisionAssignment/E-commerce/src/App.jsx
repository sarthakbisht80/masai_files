// src/App.jsx
import React from 'react';
import ProductsList from './Components/ProductsList';
import CartSummary from './Components/CartSummary';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Mini E-commerce Store</h1>
      <ProductsList />
      <CartSummary />
    </div>
  );
};

export default App;
