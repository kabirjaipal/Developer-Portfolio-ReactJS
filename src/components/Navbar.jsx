import React from "react";
import "../Styles/Navbar.css";

const Navbar = ({ page, setPage }) => {
  return (
    <div className="navbar">
      <a href="/" className="nav_title">
        Tech Boy
      </a>
      <div className="links">
        {[
          "About US",
          "Portfolio",
          "Skills",
          "Services",
          "Contact US",
        ].map((title, index) => (
          <li key={index}>
            <p onClick={() => setPage(title)}>{title}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;