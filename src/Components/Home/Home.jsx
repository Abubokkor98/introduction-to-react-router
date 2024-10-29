import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto">

      {/* fixed header */}
      <Header></Header>
      {/* <div className="text-7xl font-bold">
        <h1>I am Home Page</h1>
        <p>Also Known as Default Page</p>
      </div> */}
      
      
      {/* changAble content */}
      <Outlet></Outlet>
      {/* fixed footer */}
      <Footer></Footer>
    </div>
  );
}
