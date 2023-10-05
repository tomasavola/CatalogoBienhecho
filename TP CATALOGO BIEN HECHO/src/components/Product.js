import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCart } from './CartContext'; 


export default function Product({ producto, url }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: producto });
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
    </div>
  );
}

Product.propTypes = {
  producto: PropTypes.object,
  url: PropTypes.string,
};
