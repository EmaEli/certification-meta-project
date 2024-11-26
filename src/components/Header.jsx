import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
