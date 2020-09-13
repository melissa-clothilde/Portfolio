import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
 
  return (
    <nav className="navbar is-white">
  
      <div className="navbar-brand">
        <Link to="/" className="navbar-item"
          >Melissa Elie
        </Link>
      </div>

      <div id="navbar-burger burger"
        data-target="navMenueColorwhite-example" className="navbar-menu">
        <div className="navbar-start">

          <Link to="/about" className="navbar-item">
            About
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/portfolio" className="navbar-link">
              Portfolio
            </Link>
            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Jobs
              </a>
              <a className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider"></hr>
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
          </div>
          <div className="navbar-end">
            <Link to="/contact" className="navbar-item">
              Contact Me
          </Link>
          </div>
        </div>
      
    </nav>
  );
}

export default NavBar;
