import React from "react";
import { useCart } from '../context/CartContext';
import "../cart.css";

const Cart = () => {
  const { cartState, dispatch } = useCart();

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const incrementQuantity = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div style={{ display: cartState.cartItems.length > 0 ? 'block' : 'none' }}>
      <h2>Tu carrito</h2>
      <ul>
        {cartState.cartItems.map(item => (
          <li key={item.id}>
            <img className="imagen" src={item.images[0]} alt={item.title} />
            <span>{item.title}</span>
            <span>${item.price}</span>
            <button className="remove-button" onClick={() => removeFromCart(item)}>❌</button>
            <div className="quantity">
              <button className="increment-button" onClick={() => incrementQuantity(item)}>+</button>
              <span>{item.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
