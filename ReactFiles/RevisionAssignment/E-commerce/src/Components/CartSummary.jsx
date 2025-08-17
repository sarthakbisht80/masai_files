import React from 'react';
import { useCart } from '../context/CartContext';

const CartSummary = () => {
  const { cart, addItem, removeItem } = useCart();

  return (
    <div style={{ border: '1px solid #000', padding: '10px', marginTop: '20px' }}>
      <h3>Cart Summary</h3>
      {cart.items.length === 0 && <p>Cart is empty</p>}
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
            <button onClick={() => addItem(item)}>+</button>
            <button onClick={() => removeItem(item)}>-</button>
          </li>
        ))}
      </ul>
      <h4>Total: ${cart.total.toFixed(2)}</h4>
    </div>
  );
};

export default CartSummary;
