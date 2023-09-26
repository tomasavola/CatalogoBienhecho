import React from "react";
import { Outlet } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";


export default function Layout() {
  return (
    <>
        <Header />
        <Carrousel/>
      <Outlet />
      <Footer/>
    </>
  );
}
