import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Product from "../components/Product";
import myImage from "../images/logo.png"; 
import '../styles.css'
import imagen1 from "../images/imagen1.png";
import imagen2 from "../images/imagen2.png";
import imagen3 from "../images/imagen3.png";
import SimpleImageSlider from "react-simple-image-slider";

export default function Home() {
  const { products } = useContext(ProductsContext);

  let sliderData = [
    {
      url: imagen1,
    },
    {
      url: imagen2,
    },
    {
      url: imagen3,
    },
  ]

  return (
    <>
      <main>
      <div className='slider-container'>
            <SimpleImageSlider
              width={'60%'}
              height={500}
              images={sliderData}
              showBullets={true}
              showNavs={true}
              autoPlay={false}
              
            />
      </div>
        <center>
      </center>
        <section className="product-list">
          
    
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
