import React from "react";
import { Link } from "react-router-dom";
import "./leftbar.scss";
const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <ul className="links">
          <li>
            <Link to="/">软件</Link>
          </li>
          <li>
            <Link to="/about">OLLO J</Link>
          </li>
          <li>
            <Link to="/services">OLLO K</Link>
          </li>
          <li>
            <Link to="/products">Dream</Link>
          </li>
          <li>
            <Link to="/blog">SmartIII</Link>
          </li>
          <li>
            <Link to="/contact">Engineer</Link>
          </li>
          <li>
            <Link to="/gallery">Premium</Link>
          </li>
          <li>
            <Link to="/faq">GP</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
