import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "../components/CartProduct";

export default function Cart() {
  let { products, totalPrice, clearProducts } = useContext(CartContext);

  return (
    <>
      <main>
        <div className="checkoutContainer">
          {products.map((product, id) => (
            <CartProduct key={id} product={product} />
          ))}
          <div className="buttonCheckoutContainer">
            <button onClick={() => clearProducts()} className="buttonCheckout">CHECKOUT</button>
          </div>
          <div className="totalPriceContainer">
            <h1>TOTAL: </h1>
            <h1 style={{ color: "rgb(245, 181, 53)" }}>${totalPrice}</h1>
          </div>
        </div>
      </main>
    </>
  );
}
