import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <header>
      <h3>Indumentaria Tullioenbek</h3>
      <nav class="arreglarHeader">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
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
        <a href="#">
          <i
            style={{ color: "black" }}
            className="fas fa-shopping-cart"
          ></i>
        </a>
      </div>
    </header>
  );
}
