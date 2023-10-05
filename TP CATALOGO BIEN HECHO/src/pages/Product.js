import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { productId } = useParams();
  const [producto, setProducto] = useState({ images: [] });
  const { dispatch } = useCart();

  const loadProduct = () => {
    axios
      .get("https://dummyjson.com/products/" + productId)
      .then((result) => {
        setProducto(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadProduct();
  }, [productId]);

  const addToCart = () => {
    // Agregar el producto al carrito usando el contexto
    dispatch({ type: 'ADD_TO_CART', payload: producto });
  };

  return (
    <main>
      <section className="product-detail">
        <div className="product-image">
          <SimpleImageSlider
            width={'80%'}
            height={500}
            images={producto.images}
            showBullets={true}
          />
        </div>
        <div className="product-info">
          <h1 className="product-name">{producto.title}</h1>
          <p className="product-price">${producto.price}</p>
          <p className="product-description">{producto.description}</p>
          <button className="btnAddToCart" onClick={addToCart}>
            ADD TO CART
          </button>
          <Link to="/cart">Go to Cart</Link>
        </div>
      </section>
    </main>
  );
}
