import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Contact from "./pages/Contact.js";
import Product from "./pages/Product.js";
import Cart from "./pages/Cart.js";
import CategoriesProvider from "./context/CategoriesContext.js";
import ProductsProvider from "./context/ProductsContext.js";
import CartProvider from "./context/CartContext.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
            {/* Place the Footer component outside the Routes structure */}
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </CategoriesProvider>
  );
}
