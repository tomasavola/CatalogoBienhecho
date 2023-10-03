import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Product({ producto, url }) {
  return (
    <div key={producto.id} className="product" >
      <img src={producto.images[0]} alt={producto.id} />
      
        <>
          <h3 className="product-title">{producto.title}</h3>
          <p className="product-price">${producto.price}</p>
          <Link to={url}><button class="button-33" >Más info</button></Link>
        </>
      
    </div>
  );
}

Product.propTypes = {
  producto: PropTypes.object,
  url: PropTypes.string,
  showProductDetail: PropTypes.bool,
};
