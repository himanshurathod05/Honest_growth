import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Company Info */}
        <div className="footer-col">
          <h3>Honest Growth</h3>
          <p>
            We help brands grow with powerful digital strategies, creative
            design, and cutting-edge technology.
          </p>
          <p className="footer-email">honestgrowth07@gmail.com</p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Main Services</h4>
          <ul>
            <li>Brand Strategy</li>
            <li>UI / UX Design</li>
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Email Form */}
        <div className="footer-col">
          <h4>Subscribe</h4>
          <p>Get the latest insights & updates.</p>
          <form className="footer-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit" className="icons">
            <FaPaperPlane  />
            </button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Honest Growth. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;