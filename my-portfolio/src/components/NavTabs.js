import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from 'react-bulma-components';
import "./NavTabs.css";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <Container className="nav nav-tabs">
      <div className="nav-item left">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Melissa Elie
        </Link>
      </div>
      <div className="nav-item right">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </div>
      <div className="nav-item right">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </div>
      <div className="nav-item right">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </div>
      <div className="nav-item right">
        <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
          div>
          Learn More
        </Link>
      </div>
    </Container>
  );
}

export default NavTabs;
