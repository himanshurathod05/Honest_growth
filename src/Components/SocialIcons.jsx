import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>

      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialIcons;