import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  const [isActive, setisActive] = useState(false);
  return (
    <nav className="is-fixed-top">
      <nav className="navbar is-mobile">

        <div className="navbar-brand">
          <Link to="/" className="navbar-item my-name"
          >Melissa Elie
        </Link>

        </div>
      </nav>
      <nav className="navbar is-mobile">
        <div>
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarExampleTransparentExample navbar-toggle "
          className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <Link to="/about" className="navbar-item navbar-center about-burger">
              About
          </Link>


            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/portfolio" className="navbar-link">
                Portfolio
            </Link>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="/happilyWoke">
                  happily Woke
              </a>
                <a className="navbar-item" href="/RabbitHole">
                  Rabbit Hole
              </a>
                <a className="navbar-item" href="/Eater">
                  Eater
              </a>

              </div>
            </div>
            <Link to="/contact" className="navbar-item navbar-center">
              Contact Me
            </Link>

          </div>
      </nav>
    </nav>
  );
}

export default NavBar;
