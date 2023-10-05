import React from "react";
import { useCart } from '../context/CartContext';
import "../cart.css";

const Cart = () => {
  const { cartState } = useCart();

  return (
    <div style={{ display: cartState.cartItems.length > 0 ? 'block' : 'none' }}>
      <h2>Tu carrito</h2>
      <ul>
        {cartState.cartItems.map(item => (
          <li key={item.id}>
            <img class="imagen" src={item.images[0]} alt={item.title} />
            <span>{item.title}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Cart;
