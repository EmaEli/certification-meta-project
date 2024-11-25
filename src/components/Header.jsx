import React from "react";
import logo from "../assets/LittleLemon-HorizontalLogo.png"

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;
