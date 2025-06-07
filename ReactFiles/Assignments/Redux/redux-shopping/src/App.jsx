import React from 'react'
 import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import { addItem,removeItem } from './features/cartSlice'


const dummyProducts = [
  { id: 1, name: 'Apple', price: 20 },
  { id: 2, name: 'Banana', price: 10 },
  { id: 3, name: 'Orange', price: 15 },
];

function App() {
   const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();


  return (
 <div style={{ padding: 20 }}>
      <h1>🛒 Shopping Cart</h1>

      <h2>Products</h2>
      {dummyProducts.map(product => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() => dispatch(addItem(product))}>Add</button>
        </div>
      ))}

      <h2>Cart Items</h2>
      {items.length === 0 && <p>No items in the cart.</p>}
      {items.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
 
}

export default App;
