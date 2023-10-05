import React, { createContext, useReducer, useContext } from 'react';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';


const CartContext = createContext();


const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };  
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const { cartState, dispatch } = useContext(CartContext);
  return { cartState, dispatch };
};
