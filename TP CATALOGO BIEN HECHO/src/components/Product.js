import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import Cart from '../components/Cart'; 
import { useNavigate } from 'react-router-dom';

export default function Product({ producto, url }) {
  const { dispatch } = useCart();
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();


  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: producto });
    setShowCart(true); // Muestra el carrito
    navigate('/cart'); // Redirige al usuario a la pantalla del carrito
  };
  
  

  return (
    <div key={producto.id} className="product">
      <img src={producto.images[0]} alt={producto.id} />

      <>
        <h3 className="product-title">{producto.title}</h3>
        <p className="product-price">${producto.price}</p>
        <Link to={url}><button className="button-33">Más info</button></Link>
        <button onClick={addToCart}>Agregar al carrito</button>
      </>
      {showCart && <Cart />} {/* Muestra el carrito si showCart es true */}
    </div>
  );
}

Product.propTypes = {
  producto: PropTypes.object,
  url: PropTypes.string,
};
