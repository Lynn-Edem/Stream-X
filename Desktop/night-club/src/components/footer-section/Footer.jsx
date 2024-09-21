import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { BsCCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <div className="followContact">
        <h1>Follow us</h1>
        <h1>Contact us</h1>
      </div>

      <div className="social-content">
        <div className="social-link">
          <div className="aLink">
            <FaInstagram id="iconSocial" />
            <Link to="https://www.instagram.com/devbruce_?igsh=ZXFrcmV3cmhkNTRo">
              Instagram
            </Link>
          </div>
          <div className="aLink">
            <FaLinkedin id="iconSocial" />
            <Link to="https://www.linkedin.com/in/offordile-divine-630274247/">
              LinkedIn
            </Link>
          </div>
          <div className="aLink">
            <FaTiktok id="iconSocial" />
            <Link to="https://www.tiktok.com/@devbruce_?_t=8puTNSUwUeE&_r=1">
              Tiktok
            </Link>
          </div>
        </div>
        <div className="club">
          <h2>
            RUNWAY <br /> NIGHTCLUB
          </h2>
        </div>

        <div className="address">
          <h3>Company Address</h3>
          <h3>Company Address</h3>
        </div>
      </div>

      <div className="faqSection">
        <Link id="priFaq" to="/">
          Privacy
        </Link>
        <Link id="priFaq" to="/">
          FAQ
        </Link>
        <p className="yearClub">
          <BsCCircle /> 2024 RUNWAY NIGHTCLUB
        </p>
      </div>
    </section>
  );
};

export default Footer;
