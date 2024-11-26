import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <Logo variant="vertical" className="footer-logo" />

        <div className="footer-section">
          <h3>Navigation Menu</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order online</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacts</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Lemon Street
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +1 (800) 555-1234
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> info@littlelemon.com
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Social Media Link</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-credit">
        <p className="footer-text container">&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
