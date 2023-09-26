import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Product({ producto, url, showProductDetail }) {
  return (
    <Link key={producto.id} className="product" to={url}>
      <img src={producto.images[0]} alt={producto.id} />
      {showProductDetail === true ? (
        <>
          <h3 className="product-title">{producto.title.toUpperCase()}</h3>
          <p className="product-price">${producto.price}</p>
          <h4>{producto.title.toUpperCase()}</h4>
        </>
      ) : (
        <></>
      )}
      <button className="btn">VER MAS</button>
    </Link>
  );
}

Product.propTypes = {
  producto: PropTypes.object,
  url: PropTypes.string,
  showProductDetail: PropTypes.bool,
};
