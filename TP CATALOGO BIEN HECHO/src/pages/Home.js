import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Product from "../components/Product";
import myImage from "../images/logo.png"; 
import '../styles.css'

export default function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <main>
        <center>
      {/* <img class="imagenLogo" src={myImage} alt="Descripción de la imagen" /> */}
      </center>
        <section className="product-list">
          {/* Agrega tu imagen */}
          

          {products.map((producto) =>
            producto.id <= 6 ? (
              <Product producto={producto} url={"products/" + producto.id} showProductDetail={false} />
            ) : (
              <></>
            )
          )}
        </section>
      </main>
    </>
  );
}
