import React from "react";
import Connect from "../../components/Connect";
import Foot from "../../components/Foot";
import PortfolioGrid from "../../components/PortfolioGrid/index";
import NavBar from "../../components/NavBar"

function Portfolio() {
  
  return (
    <React.Fragment>
             <NavBar />
      <div className="container">
        <PortfolioGrid />
        <div className="connect-box">
        <Connect />
        </div>
      </div>
    <Foot />
    </React.Fragment>
  );
}

export default Portfolio;
