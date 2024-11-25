import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="logo-container">
          <img src={logo} alt="Little Lemon Logo" className="logo" />
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
