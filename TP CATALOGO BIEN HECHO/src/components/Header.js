import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <header>
      <h3>Tullionbek store</h3>
      <nav className="arreglarHeader">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Filtrar</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="user-icons">
        <a href="#">
          <i style={{ color: "black" }} className="fas fa-user"></i>
        </a>
        {/* Enlace a la página del carrito */}
        <Link to="/cart">
          <i
            style={{ color: "black" }}
            className="fas fa-shopping-cart"
          ></i>
        </Link>
      </div>
    </header>
  );
}
