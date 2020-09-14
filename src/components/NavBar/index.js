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
            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider"></hr>
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
          </div>
          <div class="navbar-end">
            <Link to="/contact" className="navbar-item">
              Contact Me
          </Link>
          </div>
        </div>
      
    </nav>
  );
}

export default NavBar;
