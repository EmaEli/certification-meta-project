import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="menu-icon" />
      </button>
      <nav className={`navbar ${menuOpen ? "show" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
          <li className="nav-item"><a href="#reservations" className="nav-link">Reservations</a></li>
          <li className="nav-item"><a href="#order-online" className="nav-link">Order Online</a></li>
          <li className="nav-item"><a href="#login" className="nav-link">Login</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
