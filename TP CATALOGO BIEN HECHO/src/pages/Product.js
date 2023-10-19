import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Product() {

  let {addProduct} = useContext(CartContext);
  const { productId } = useParams();
  const [producto, setProducto] = useState({images: []});

  let loadProduct = () => {    
    axios
      .get("https://dummyjson.com/products/"+productId)
      .then((result) => {
        setProducto(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadProduct();  
  }, [productId]);

 
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
            <p className="product-detail-price">${producto.price}</p>
            <p className="product-description">
              {producto.description}
            </p>     
            <Link to="/cart">       
            <button className="btnAddToCart" onClick={() => addProduct(producto)}>
        ADD TO CART
      </button>
      </Link>
          </div>
        </section>
      </main>
    )
  }

