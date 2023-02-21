import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="h1-container">
        <h1 className="nav-h1">Lain's Web Design</h1>
      </div>

      <div className="nav-list-container">
        <ul className="nav-ul">
          <li id="Home" className="nav-li">
            Home
          </li>
          <li id="Projects" className="nav-li">
            Projects
          </li>
          <li id="AboutUs" className="nav-li">
            About Us
          </li>
          <li id="Contact" className="nav-li">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
