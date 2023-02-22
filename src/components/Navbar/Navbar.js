import React from "react";
import "./Navbar.css";
// import logo from "../../images/nav-logo.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="h1-container">
        {/* <img className="nav-img" src={logo} alt="lain web design logo" /> */}
        <h1 className="nav-h1">Lain Web Design</h1>
      </div>

      <div className="nav-list-container">
        <ul className="nav-ul">
          <li id="#Home" className="nav-li">
            <a className="nav-a" href="/">
              Home
            </a>
          </li>
          <li id="#Projects" className="nav-li">
            <a className="nav-a" href="/projects">
              Projects
            </a>
          </li>
          <li id="#AboutUs" className="nav-li">
            <a className="nav-a" href="/aboutus">
              About Us
            </a>
          </li>
          <li id="#Contact" className="nav-li">
            <a className="nav-a" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
