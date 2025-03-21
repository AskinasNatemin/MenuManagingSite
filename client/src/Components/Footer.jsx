import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-box">
            <h4>CONNECT WITH US</h4>
            <p>
              <FaPhoneAlt /> +91 9656784330
            </p>
            <p>
              <FaEnvelope /> info@deepnetsoft.com
            </p>
          </div>

          <div className="footer-box center-box">
            <div className="logo">
              <span className="logo-primary">DEEP</span>
              <span className="logo-secondary">NET</span>
              <span className="logo-soft">SOFT</span>
            </div>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          <div className="footer-box">
            <h4>FIND US</h4>
            <p>
              <FaMapMarkerAlt /> First Floor, Geo Infopark, Infopark EXPY,
              Kakkanad
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom px-4">
        <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
