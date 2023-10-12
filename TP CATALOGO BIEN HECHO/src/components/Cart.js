import React from "react";
import { useCart } from '../context/CartContext';


const Cart = () => {
  const { cartState } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartState.cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;