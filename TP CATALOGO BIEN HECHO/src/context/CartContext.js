import React, { createContext, useReducer, useContext } from 'react';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // Si el artículo ya existe en el carrito, crea una copia del estado
        const updatedCartItems = [...state.cartItems];
        // Aumenta la cantidad en 1
        updatedCartItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // Si no existe, agrega el artículo al carrito con una cantidad de 1
        action.payload.quantity = 1;

        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case REMOVE_FROM_CART:
      const itemToRemoveIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (itemToRemoveIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        if (updatedCartItems[itemToRemoveIndex].quantity > 1) {
          // Si hay más de 1 artículo, disminuye la cantidad en 1
          updatedCartItems[itemToRemoveIndex].quantity -= 1;
        } else {
          // Si solo hay 1 artículo, elimina el artículo del carrito
          updatedCartItems.splice(itemToRemoveIndex, 1);
        }

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      return state;

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
