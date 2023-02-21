import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <h1>Lain's Web Design</h1>
      <div>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
