import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };

    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      if (!itemToRemove) return state;

      if (itemToRemove.quantity > 1) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          total: state.total - itemToRemove.price,
        };
      }

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        total: state.total - itemToRemove.price,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (item) => dispatch({ type: 'REMOVE_ITEM', payload: item });

  return (
    <CartContext.Provider value={{ cart: state, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
