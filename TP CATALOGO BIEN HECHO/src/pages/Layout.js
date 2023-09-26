import React from "react";
import { Outlet } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
        <Header />
      <Outlet />
      <Footer/>
    </>
  );
}
